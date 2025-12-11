# API_DOCUMENTATION.md - Complete API Reference

## 📡 Supported APIs Overview

| API | Type | Free | Key Required | Status |
|-----|------|------|--------------|--------|
| **Pollinations** | Image Generation | ✅ Yes | ❌ No | Default |
| **Hugging Face BLIP** | Image Analysis | ✅ Yes | ❌ No | Recommended |
| **Replicate** | Image Generation | ✅ Free Credits | ✅ Yes | Optional |
| **Stability AI** | Image Generation | ✅ Free Credits | ✅ Yes | Optional |
| **OpenAI DALL-E** | Image Generation | ❌ Paid | ✅ Yes | Optional |

## 🐝 Pollinations AI (DEFAULT - FREE)

### Overview
- **Type:** Image Generation
- **Status:** FREE - No API key required
- **Quality:** High quality, fast generation
- **Pricing:** Completely free
- **Rate Limits:** Reasonable for personal use

### Endpoint
```
https://image.pollinations.ai/prompt/{prompt}?width=512&height=512&seed={seed}
```

### Implementation
```javascript
async function generateWithPollinations(prompt) {
    const encodedPrompt = encodeURIComponent(prompt);
    const imageUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=512&height=512&seed=${Math.random()}`;
    return imageUrl;
}
```

### Parameters
- **prompt** (required): Image description
- **width** (optional): Image width (default: 512)
- **height** (optional): Image height (default: 512)
- **seed** (optional): Random seed for reproducibility

### Example
```javascript
const prompt = "A cat sitting on a chair";
const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=512&height=512`;
// Returns: Image URL directly
```

### Response
Returns image URL directly - no JSON parsing needed!

### Error Handling
```javascript
try {
    const imageUrl = await generateWithPollinations(prompt);
    if (!imageUrl) throw new Error('No URL returned');
    // Display image
} catch (error) {
    console.error('Error:', error);
    showMessage('Failed to generate image', 'error');
}
```

## 🧠 Hugging Face BLIP (FREE - Image Analysis)

### Overview
- **Type:** Image Caption/Analysis
- **Status:** FREE - No API key required
- **Model:** Salesforce BLIP Image Captioning
- **Accuracy:** Very high
- **Speed:** 3-6 seconds per image

### Endpoint
```
https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-large
```

### Implementation
```javascript
async function analyzeImageWithAI(imageUrl) {
    const response = await fetch(
        'https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-large',
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ inputs: imageUrl })
        }
    );
    const result = await response.json();
    return result[0].generated_text;
}
```

### Parameters
- **inputs** (required): Image URL or Base64 data

### Request Example
```json
{
  "inputs": "https://example.com/image.jpg"
}
```

### Response Example
```json
[
  {
    "generated_text": "a cat sitting on a wooden chair in sunlight"
  }
]
```

### Usage in App
```javascript
// Upload image
const imageUrl = event.target.result; // Base64 from FileReader

// Analyze
const analysis = await analyzeImageWithAI(imageUrl);
console.log(analysis);
// Output: "a cat sitting on a wooden chair in sunlight"

// Extract details
const theme = detectThemeFromDescription(analysis);
const style = detectStyleFromDescription(analysis);
const tone = detectToneFromDescription(analysis);
```

### Error Handling
```javascript
try {
    const result = await analyzeImageWithAI(imageUrl);
    if (!result) {
        throw new Error('No description returned');
    }
} catch (error) {
    console.error('Analysis failed:', error);
    // Use fallback analysis
    return generateImageAnalysisWithFallback();
}
```

## 🔄 Replicate API (Optional)

### Overview
- **Type:** Image Generation (Premium models)
- **Key Required:** YES
- **Free Credits:** $5 free credits/month
- **Quality:** Very high
- **Models:** Stable Diffusion, DALL-E, etc.

### Setup
1. Go to [replicate.com](https://replicate.com)
2. Sign up
3. Get API key
4. Paste in app

### Endpoint
```
https://api.replicate.com/v1/predictions
```

### Implementation
```javascript
async function generateWithReplicate(prompt) {
    const apiKey = document.getElementById('replicate-key').value;
    
    const response = await fetch('https://api.replicate.com/v1/predictions', {
        method: 'POST',
        headers: {
            'Authorization': `Token ${apiKey}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            version: 'model-version-id',
            input: { prompt: prompt }
        })
    });

    let prediction = await response.json();
    
    // Poll for completion
    while (prediction.status === 'processing') {
        await sleep(1000);
        const pollResponse = await fetch(
            `https://api.replicate.com/v1/predictions/${prediction.id}`,
            { headers: { 'Authorization': `Token ${apiKey}` } }
        );
        prediction = await pollResponse.json();
    }

    return prediction.output[0];
}
```

### Request Example
```json
{
  "version": "model-version-id",
  "input": {
    "prompt": "a cat sitting on a chair",
    "num_outputs": 1,
    "image_dimensions": "512x512"
  }
}
```

### Response Example
```json
{
  "id": "prediction-id",
  "status": "processing",
  "output": null
}
```

When complete:
```json
{
  "id": "prediction-id",
  "status": "succeeded",
  "output": ["https://replicate.delivery/...image.jpg"]
}
```

### Error Handling
```javascript
try {
    if (!apiKey) {
        throw new Error('Replicate API key is required');
    }
    const imageUrl = await generateWithReplicate(prompt);
} catch (error) {
    showMessage('Replicate error: ' + error.message, 'error');
}
```

## 🎯 Stability AI API (Optional)

### Overview
- **Type:** Image Generation
- **Key Required:** YES
- **Free Credits:** Yes, available
- **Quality:** High
- **Engine:** Stable Diffusion

### Setup
1. Go to [platform.stability.ai](https://platform.stability.ai)
2. Sign up
3. Get API key
4. Paste in app

### Endpoint
```
https://api.stability.ai/v1/generate
```

### Implementation
```javascript
async function generateWithStability(prompt) {
    const apiKey = document.getElementById('stability-key').value;
    
    const response = await fetch('https://api.stability.ai/v1/generate', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            prompt: prompt,
            samples: 1,
            steps: 30,
            height: 512,
            width: 512
        })
    });

    const result = await response.json();
    return 'data:image/png;base64,' + result.artifacts[0].base64;
}
```

### Request Example
```json
{
  "text_prompts": [
    { "text": "a cat sitting on a chair", "weight": 1 }
  ],
  "samples": 1,
  "steps": 30,
  "height": 512,
  "width": 512,
  "cfg_scale": 7
}
```

### Response Example
```json
{
  "artifacts": [
    {
      "base64": "iVBORw0KGgoAAAANSUhEUgAAA...",
      "seed": 123456,
      "finish_reason": "SUCCESS"
    }
  ]
}
```

## 🤖 OpenAI DALL-E API (Optional)

### Overview
- **Type:** Image Generation
- **Key Required:** YES
- **Pricing:** Paid ($0.02 per image)
- **Quality:** Very high
- **Model:** DALL-E 3

### Setup
1. Go to [openai.com](https://openai.com)
2. Sign up
3. Create API key
4. Add credits
5. Paste key in app

### Endpoint
```
https://api.openai.com/v1/images/generations
```

### Implementation
```javascript
async function generateWithOpenAI(prompt) {
    const apiKey = document.getElementById('openai-key').value;
    
    const response = await fetch('https://api.openai.com/v1/images/generations', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            prompt: prompt,
            n: 1,
            size: '512x512',
            model: 'dall-e-3'
        })
    });

    const result = await response.json();
    return result.data[0].url;
}
```

### Request Example
```json
{
  "model": "dall-e-3",
  "prompt": "a cat sitting on a chair",
  "n": 1,
  "size": "512x512",
  "quality": "standard",
  "style": "natural"
}
```

### Response Example
```json
{
  "created": 1589478378,
  "data": [
    {
      "url": "https://oaidalleapiprodscus.blob.core.windows.net/...",
      "revised_prompt": "a cat sitting on a wooden chair in sunlight..."
    }
  ]
}
```

## 🔐 API Key Management

### Secure Practices
```javascript
// ✅ DO: Let user paste key directly in UI
const apiKey = document.getElementById('replicate-key').value;

// ❌ DON'T: Hardcode keys
const apiKey = 'your-api-key-here'; // BAD!

// ❌ DON'T: Store in code
const API_KEYS = {
    replicate: 'key-here' // BAD!
};
```

### .env File (Development Only)
If using Node.js backend:
```
REPLICATE_API_KEY=your_key_here
STABILITY_API_KEY=your_key_here
OPENAI_API_KEY=your_key_here
```

Then in code:
```javascript
const apiKey = process.env.REPLICATE_API_KEY;
```

**Note:** Frontend app doesn't use .env - keys are entered in UI

## 🔄 API Switching

### In App
```javascript
// Select API
function selectAPI(apiName) {
    selectedAPI = apiName; // 'pollinations', 'replicate', etc.
}

// Use selected API
async function generateImageFromPrompt(prompt) {
    if (selectedAPI === 'pollinations') {
        return await generateWithPollinations(prompt);
    } else if (selectedAPI === 'replicate') {
        return await generateWithReplicate(prompt);
    }
    // ... more APIs
}
```

## 📊 API Comparison

```
╔═════════════╦═════════╦═════════╦════════════╗
║ Feature     ║ Pollin. ║ HF BLIP ║ Replicate  ║
╠═════════════╬═════════╬═════════╬════════════╣
║ Speed       ║ ⭐⭐⭐⭐ ║ ⭐⭐⭐   ║ ⭐⭐⭐    ║
║ Quality     ║ ⭐⭐⭐⭐ ║ ⭐⭐⭐⭐ ║ ⭐⭐⭐⭐⭐ ║
║ Cost        ║ Free    ║ Free    ║ Free/$     ║
║ Key Needed  ║ No      ║ No      ║ Yes        ║
║ Reliability ║ ⭐⭐⭐⭐ ║ ⭐⭐⭐⭐ ║ ⭐⭐⭐⭐ ║
╚═════════════╩═════════╩═════════╩════════════╝
```

## ⚠️ Error Handling

### Common Errors
```javascript
// API Key Invalid
"Invalid API key provided"

// Rate Limit Exceeded
"429 Too Many Requests"

// API Down
"503 Service Unavailable"

// CORS Error
"Access to XMLHttpRequest blocked by CORS policy"

// Image Processing Error
"Image could not be processed"
```

### Recovery
```javascript
async function generateImageWithFallback(prompt) {
    try {
        // Try primary API
        return await generateImageFromPrompt(prompt);
    } catch (error) {
        console.warn('Primary API failed, trying fallback...');
        try {
            // Try fallback API
            selectedAPI = 'pollinations';
            return await generateImageFromPrompt(prompt);
        } catch (fallbackError) {
            throw new Error('All APIs failed: ' + fallbackError.message);
        }
    }
}
```

## 📈 Rate Limits

| API | Limit | Period |
|-----|-------|--------|
| Pollinations | Unlimited | - |
| HF BLIP | 5 req/min | Per IP |
| Replicate | 100 req/hour | Per API key |
| Stability | 50 req/day | Free tier |
| OpenAI | Variable | Based on plan |

## 🎯 Best Practices

1. **Use Pollinations by default** - Fast, free, no key
2. **Cache results** - Don't regenerate same prompt
3. **Handle errors gracefully** - Show user-friendly messages
4. **Respect rate limits** - Add delays between requests
5. **Keep keys secure** - Never hardcode or commit to Git
6. **Test locally first** - Before deploying
7. **Monitor usage** - Track API calls
8. **Update endpoints** - APIs may change

## 📚 Resources

- [Pollinations Docs](https://pollinations.ai)
- [Hugging Face Docs](https://huggingface.co/docs)
- [Replicate Docs](https://replicate.com/docs)
- [Stability Docs](https://platform.stability.ai/docs)
- [OpenAI Docs](https://platform.openai.com/docs)

## ✅ Testing APIs

```javascript
// Test Pollinations
console.log(await generateWithPollinations("a cat"));

// Test Hugging Face
console.log(await analyzeImageWithAI(imageUrl));

// Test Replicate
console.log(await generateWithReplicate("a dog"));

// Test Stability
console.log(await generateWithStability("a bird"));

// Test OpenAI
console.log(await generateWithOpenAI("a fish"));
```

Happy generating! 🎨
