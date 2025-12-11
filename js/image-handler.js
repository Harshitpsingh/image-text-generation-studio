// ============================================================================
// js/image-handler.js - Image Upload and Processing Functions
// ============================================================================

/**
 * Handle image file upload and conversion to Base64
 */
function handleImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
        if (!validateImageFormat(file)) {
            showMessage('❌ Invalid image format. Please use JPG, PNG, or GIF', 'error');
            return;
        }
        
        const reader = new FileReader();
        reader.onload = (e) => {
            currentImageUrl = e.target.result;
            showMessage('✅ Image uploaded successfully', 'success');
        };
        reader.onerror = () => {
            showMessage('❌ Error reading file', 'error');
        };
        reader.readAsDataURL(file);
    }
}

/**
 * Validate if image format is supported
 */
function validateImageFormat(file) {
    const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    return validTypes.includes(file.type);
}

/**
 * Convert image file to Base64 string
 */
function convertImageToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

/**
 * Get image dimensions
 */
function getImageDimensions(imageUrl) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
            resolve({
                width: img.width,
                height: img.height
            });
        };
        img.onerror = () => {
            resolve({ width: 512, height: 512 });
        };
        img.src = imageUrl;
    });
}

/**
 * Validate image before processing
 */
function validateImageInput(imageUrl, fileInput) {
    if (!imageUrl && !fileInput.files.length) {
        return {
            valid: false,
            error: '❌ Please provide an image URL or upload a file'
        };
    }
    return { valid: true };
}
