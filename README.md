# Image & Text Generation Studio

> An AI-powered web application for generating images from text prompts and creating artistic variations of uploaded images using free APIs.



![Python Version](https://img.shields.io/badge/version-1.0.0-blue)

## 🎨 Features

### Text to Image Workflow
- ✅ Enter text prompts with style selection
- ✅ AI-powered prompt enhancement
- ✅ Generate images in 7 different styles (Realistic, Illustration, Oil Painting, Digital Art, Photorealistic, Cyberpunk, Fantasy)
- ✅ Copy enhanced prompts to clipboard

### Image Variations Workflow
- ✅ Upload images or paste image URLs
- ✅ AI-powered image analysis (powered by Hugging Face BLIP)
- ✅ Automatic theme, style, and tone detection
- ✅ Generate 4 artistic variations (Photorealistic, Oil Painting, Digital Illustration, 3D Render)

### API Integration
- 🐝 **Pollinations AI** - Free image generation (default)
- 🔄 **Replicate** - Premium models with free credits
- 🎯 **Stability AI** - High-quality image generation
- 🤖 **OpenAI DALL-E** - Premium image generation
- 🧠 **Hugging Face BLIP** - Free image analysis (NO API KEY NEEDED)

### Additional Features
- 🎨 Modern gradient UI with smooth animations
- 📱 Fully responsive design (mobile & desktop)
- ⚡ Real-time message notifications
- 🔄 Results clearing between workflows
- 💾 Copy to clipboard functionality
- 🎯 Professional card-based interface

## 🚀 Live Demo

**[View Live Project](https://your-vercel-link.vercel.app)** 

## 📋 Requirements

### APIs Used (All Free!)
1. **Hugging Face BLIP** - Image Captioning
   - Endpoint: `https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-large`
   - Authentication: ❌ NOT REQUIRED
   - Free tier: ✅ Unlimited

2. **Pollinations AI** - Image Generation
   - Endpoint: `https://image.pollinations.ai/prompt/`
   - Authentication: ❌ NOT REQUIRED
   - Free tier: ✅ Unlimited

3. **Replicate** (Optional) - Premium Models
   - Requires API Key from [replicate.com](https://replicate.com)
   - Free credits available

4. **Stability AI** (Optional) - High Quality
   - Requires API Key from [platform.stability.ai](https://platform.stability.ai)
   - Free credits available

5. **OpenAI DALL-E** (Optional) - Premium
   - Requires API Key from [openai.com](https://openai.com)
   - Paid service

## 🔧 Installation & Setup

### Option 1: Run Locally

#### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No Node.js or backend required!

#### Steps
1. Clone the repository
```bash
git clone https://github.com/yourusername/image-text-generation-studio.git
cd image-text-generation-studio
```

2. Open in browser
```bash
# Simply open the index.html file in your browser
# Or use a local server for best results

# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (http-server)
npx http-server

# Then visit: http://localhost:8000
```

### Option 2: Deploy to Vercel (Recommended)

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/image-text-generation-studio.git
git push -u origin main
```

2. **Connect to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"
   - Get your live link!

### Option 3: Deploy to Netlify

1. **Connect to Netlify**
   - Visit [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect GitHub
   - Select repository
   - Click "Deploy site"

### Option 4: GitHub Pages

1. Enable GitHub Pages
   - Go to Settings → Pages
   - Select "Deploy from a branch"
   - Select main branch
   - Save
   - Get your link: `https://yourusername.github.io/image-text-generation-studio`

## 📖 Usage Guide

### Text to Image
1. Enter your text prompt in the "Text to Image" section
2. Select desired image style from dropdown
3. Click "Enhance & Generate"
4. AI enhances your prompt and generates an image
5. Copy the enhanced prompt or generate new variations

### Image Variations
1. Upload an image OR paste an image URL
2. Click "Analyze & Generate Variations"
3. AI analyzes the image (3-6 seconds)
4. Theme, style, and tone are automatically detected
5. 4 artistic variations are generated (Photorealistic, Oil Painting, Digital Art, 3D Render)
6. All images displayed in gallery

### Select Different APIs
1. Scroll to "Select Image Generation API" section
2. Click on desired API card
3. For APIs requiring keys, paste your API key in the input field
4. API is now active for generation!

## 🏗️ Project Structure

```
image-text-generation-studio/
├── index.html                    # Main HTML file
├── css/
│   └── styles.css               # All styling
├── js/
│   ├── api-config.js            # API configuration
│   ├── api-client.js            # API request handlers
│   ├── image-handler.js         # Image processing
│   ├── analysis.js              # Analysis functions
│   ├── ui-controller.js         # UI handlers
│   └── utils.js                 # Utilities
├── docs/
│   ├── SETUP.md                 # Setup guide
│   ├── API_DOCUMENTATION.md     # API details
│   └── WORKFLOW.md              # Workflow explanation
├── assets/
│   └── images/                  # Screenshots
├── README.md                    # This file
├── package.json                 # Project metadata
├── .gitignore                   # Git ignore rules

```

## 🔌 API Documentation

### Hugging Face BLIP (Image Analysis)
```javascript
// No API key required!
const response = await fetch(
  'https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-large',
  {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ inputs: imageUrl })
  }
);
const result = await response.json();
// Returns: { generated_text: "description of image" }
```

### Pollinations AI (Image Generation)
```javascript
// No API key required!
const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=512&height=512`;
// Returns image URL directly
```

### Replicate (Optional)
```javascript
// Requires API key from replicate.com
const response = await fetch('https://api.replicate.com/v1/predictions', {
  method: 'POST',
  headers: {
    'Authorization': `Token YOUR_API_KEY`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ /* request */ })
});
```

### Stability AI (Optional)
```javascript
// Requires API key from platform.stability.ai
const response = await fetch('https://api.stability.ai/v1/generate', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer YOUR_API_KEY`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ /* request */ })
});
```

### OpenAI DALL-E (Optional)
```javascript
// Requires API key from openai.com
const response = await fetch('https://api.openai.com/v1/images/generations', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer YOUR_API_KEY`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ /* request */ })
});
```

## 📊 Workflow Explanation

### Image Analysis & Variation Flow

1. **Upload Image** → Convert to Base64 or use URL
2. **Analyze with BLIP** → Get detailed description
3. **Extract Details** → Theme, Style, Tone
4. **Create Prompts** → 4 different artistic prompts
5. **Generate Images** → Pollinations API creates variations
6. **Display Gallery** → Show all 4 variations

Example:
```
Input: Cat photo
↓
Analysis: "a cat sitting on a wooden chair in a sunny room"
↓
Theme: Animal scene | Style: Photography | Tone: Bright
↓
Generate:
  - Photorealistic cat with studio lighting
  - Oil painting style cat
  - Digital illustration cat
  - 3D rendered cat
↓
Display all 4 variations
```

## 🎯 Key Features

| Feature | Details |
|---------|---------|
| **Free APIs** | No credit card required |
| **No Authentication** | Hugging Face & Pollinations work without keys |
| **Fully Responsive** | Works on mobile, tablet, desktop |
| **Modern UI** | Gradient backgrounds, smooth animations |
| **Real-time Analysis** | Image processed in 25-35 seconds |
| **4 Variation Styles** | Photorealistic, Oil Painting, Digital Art, 3D Render |
| **Copy to Clipboard** | Easy prompt sharing |
| **Dark Mode Ready** | Modern color scheme |

## 📱 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## ⚙️ Configuration

### Environment Variables (Optional)
Create `.env` file in root (if using Node backend):
```env
HUGGING_FACE_API_KEY=optional
REPLICATE_API_KEY=your_key_here
STABILITY_AI_KEY=your_key_here
OPENAI_API_KEY=your_key_here
```

Note: Frontend version doesn't require .env file!

## 🚨 Troubleshooting

### Images not generating?
- Check if URL is publicly accessible
- Ensure image is in standard format (JPG, PNG)
- Try refreshing the page
- Check browser console for errors

### Analysis failing?
- Verify internet connection
- Try a different image
- Check if Hugging Face servers are up
- Wait a moment and try again

### API errors?
- For optional APIs, ensure API key is valid
- Verify key has appropriate permissions
- Check API rate limits haven't been exceeded

## 📝 Code Examples

### Add Custom Style
```javascript
// In js/analysis.js
function detectThemeFromDescription(description) {
  const desc = description.toLowerCase();
  // Add your custom logic here
  if (desc.includes('custom_keyword')) {
    return 'Custom Theme';
  }
  return 'default theme';
}
```

### Customize Colors
```css
/* In css/styles.css */
:root {
  --color-primary: #2563eb;  /* Change primary color */
  --color-success: #10b981;  /* Change success color */
  /* ... other colors */
}
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎓 Learning Resources

- [Hugging Face Documentation](https://huggingface.co/docs)
- [Pollinations AI Docs](https://pollinations.ai)
- [Web APIs - MDN](https://developer.mozilla.org/en-US/docs/Web/API)
- [JavaScript Async/Await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous)

## 🌟 Credits

Built with ❤️ using:
- Hugging Face BLIP for image analysis
- Pollinations AI for image generation
- Vanilla JavaScript (no frameworks)
- CSS3 for styling

## 📧 Contact

For questions or suggestions, feel free to open an issue on GitHub.

---

**Star this project if you find it useful!** ⭐
