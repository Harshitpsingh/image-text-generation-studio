// ============================================================================
// js/ui-controller.js - UI Controllers and Event Handlers
// ============================================================================

// Global state
let selectedAPI = 'pollinations';
let currentImageUrl = '';
let enhancedPrompt = '';

/**
 * Select and activate API
 */
function selectAPI(apiName) {
    selectedAPI = apiName;
    
    // Update UI
    document.querySelectorAll('.api-card').forEach(card => {
        card.classList.remove('active');
    });
    event.target.closest('.api-card').classList.add('active');

    // Show/hide API key inputs
    document.querySelectorAll('.api-key-input').forEach(input => {
        input.classList.remove('show');
    });

    if (apiName !== 'pollinations' && apiName !== 'huggingface') {
        const inputId = apiName + '-input';
        const inputElement = document.getElementById(inputId);
        if (inputElement) {
            inputElement.classList.add('show');
        }
    }

    const message = (apiName === 'huggingface') ? 
        '✅ Hugging Face BLIP selected - Free image analysis (no key needed)' : 
        `✅ Selected ${apiName.toUpperCase()} API`;
    showMessage(message, 'success');
}

/**
 * Show message notification
 */
function showMessage(text, type = 'info') {
    const container = document.getElementById('messageContainer');
    const message = document.createElement('div');
    message.className = `message ${type}`;
    message.textContent = text;
    container.appendChild(message);
    setTimeout(() => message.remove(), 5000);
}

/**
 * Copy text to clipboard
 */
function copyToClipboard(elementId) {
    const text = document.getElementById(elementId).textContent;
    navigator.clipboard.writeText(text).then(() => {
        showMessage('✅ Copied to clipboard!', 'success');
    }).catch(() => {
        showMessage('❌ Failed to copy', 'error');
    });
}

/**
 * Enhance and generate text to image
 */
async function enhanceAndGenerateText() {
    const textInput = document.getElementById('textInput').value.trim();
    if (!textInput) {
        showMessage('❌ Please enter text to enhance', 'error');
        return;
    }

    // Validate API key if required
    if (selectedAPI !== 'pollinations') {
        const keyInputId = selectedAPI + '-key';
        const apiKeyElement = document.getElementById(keyInputId);
        if (apiKeyElement && !apiKeyElement.value.trim()) {
            showMessage(`❌ Please enter your ${selectedAPI.toUpperCase()} API key`, 'error');
            return;
        }
    }

    document.getElementById('textLoading').classList.add('active');
    document.getElementById('textBtn').disabled = true;

    try {
        // Clear previous results
        document.getElementById('imageAnalysisResults').style.display = 'none';
        document.getElementById('imageVariations').style.display = 'none';
        
        // Step 1: Enhance prompt
        const style = document.getElementById('imageStyle').value;
        enhancedPrompt = IMAGE_STYLES[style].prefix + ' ' + textInput + PROMPT_ENHANCEMENT_SUFFIX;
        
        document.getElementById('enhancedTextOutput').textContent = enhancedPrompt;
        document.getElementById('textResults').style.display = 'block';
        document.getElementById('resultsSection').style.display = 'block';

        // Step 2: Generate image
        const imageUrl = await generateImageFromPrompt(enhancedPrompt);
        
        const gallery = document.getElementById('imageGallery');
        gallery.innerHTML = '';
        const card = document.createElement('div');
        card.className = 'image-card';
        card.innerHTML = `
            <img src="${imageUrl}" alt="Generated image" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect fill=%22%23ddd%22 width=%22400%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2214%22 fill=%22%23666%22 text-anchor=%22middle%22 dy=%22.3em%22%3EImage loaded%3C/text%3E%3C/svg%3E'">
            <div class="image-card-label">Generated Image</div>
        `;
        gallery.appendChild(card);

        document.getElementById('generatedImages').style.display = 'block';
        showMessage('✅ Image generated successfully!', 'success');
    } catch (error) {
        console.error('Error:', error);
        showMessage('❌ Error: ' + error.message, 'error');
    } finally {
        document.getElementById('textLoading').classList.remove('active');
        document.getElementById('textBtn').disabled = false;
    }
}

/**
 * Analyze image and generate variations
 */
async function analyzeAndGenerateVariations() {
    const imageUrl = document.getElementById('imageUrlInput').value.trim();
    const fileInput = document.getElementById('imageInput');

    if (!imageUrl && !fileInput.files.length) {
        showMessage('❌ Please provide an image URL or upload a file', 'error');
        return;
    }

    document.getElementById('variationLoading').classList.add('active');
    document.getElementById('variationBtn').disabled = true;

    try {
        // Handle file upload
        if (fileInput.files.length) {
            const reader = new FileReader();
            reader.onload = (e) => {
                currentImageUrl = e.target.result;
            };
            reader.readAsDataURL(fileInput.files[0]);
            await new Promise(resolve => setTimeout(resolve, 100));
        } else {
            currentImageUrl = imageUrl;
        }

        // Clear previous results
        document.getElementById('generatedImages').style.display = 'none';
        document.getElementById('textResults').style.display = 'none';

        // Analyze image
        const analysis = await analyzeImageWithAI(currentImageUrl);
        document.getElementById('imageAnalysisOutput').textContent = analysis;
        document.getElementById('imageAnalysisResults').style.display = 'block';
        document.getElementById('resultsSection').style.display = 'block';

        // Generate 4 variations
        const variations = await generateImageVariations(analysis);
        
        const gallery = document.getElementById('variationGallery');
        gallery.innerHTML = '';
        
        variations.forEach((imgUrl, index) => {
            const card = document.createElement('div');
            card.className = 'image-card';
            card.innerHTML = `
                <img src="${imgUrl}" alt="Image variation ${index + 1}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect fill=%22%23ddd%22 width=%22400%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2214%22 fill=%22%23666%22 text-anchor=%22middle%22 dy=%22.3em%22%3EVariation ${index + 1}%3C/text%3E%3C/svg%3E'">
                <div class="image-card-label">Variation ${index + 1}</div>
            `;
            gallery.appendChild(card);
        });

        document.getElementById('imageVariations').style.display = 'block';
        showMessage('✅ Generated 4 image variations!', 'success');
    } catch (error) {
        console.error('Error:', error);
        showMessage('❌ Error: ' + error.message, 'error');
    } finally {
        document.getElementById('variationLoading').classList.remove('active');
        document.getElementById('variationBtn').disabled = false;
    }
}

/**
 * Generate image variations based on analysis
 */
async function generateImageVariations(analysis) {
    const variations = [];
    
    const descriptionMatch = analysis.match(/Description: ([^.]+)/);
    const themeMatch = analysis.match(/Theme: ([^.]+)/);
    const baseDescription = descriptionMatch ? descriptionMatch[1] : (themeMatch ? themeMatch[1] : 'Create an image');
    
    const variationPrompts = [
        `Create a photorealistic variation of: ${baseDescription}. Professional studio lighting, 4K quality, high detail.`,
        `Create an oil painting style variation of: ${baseDescription}. Vibrant warm color palette, classic fine art, impressionist brushstrokes.`,
        `Create a digital illustration variation of: ${baseDescription}. Cool blue and purple tones, modern digital art, contemporary style.`,
        `Create a 3D rendered variation of: ${baseDescription}. Dramatic cinematic lighting, high detail, professional 3D render.`
    ];

    for (let i = 0; i < 4; i++) {
        try {
            const imageUrl = await generateImageFromPrompt(variationPrompts[i]);
            variations.push(imageUrl);
        } catch (error) {
            console.error('Error generating variation', i + 1, error);
            const colors = ['6366f1', '8b5cf6', 'ec4899', 'f59e0b'];
            variations.push(`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23${colors[i]}' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='14' fill='%23fff' text-anchor='middle' dy='.3em'%3EVariation ${i + 1}%3C/text%3E%3C/svg%3E`);
        }
    }

    return variations;
}

/**
 * Clear text form
 */
function clearTextForm() {
    document.getElementById('textInput').value = '';
    document.getElementById('textResults').style.display = 'none';
    document.getElementById('generatedImages').style.display = 'none';
}

/**
 * Clear image form
 */
function clearImageForm() {
    document.getElementById('imageInput').value = '';
    document.getElementById('imageUrlInput').value = '';
    document.getElementById('imageAnalysisResults').style.display = 'none';
    document.getElementById('imageVariations').style.display = 'none';
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    showMessage('✅ Ready! Select an API and start generating', 'success');
});
