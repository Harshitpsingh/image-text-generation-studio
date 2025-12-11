// ============================================================================
// js/utils.js - Utility Functions and Helpers
// ============================================================================

/**
 * URL encode a string
 */
function encodePrompt(text) {
    return encodeURIComponent(text);
}

/**
 * Decode URL encoded string
 */
function decodePrompt(text) {
    return decodeURIComponent(text);
}

/**
 * Validate text input
 */
function validateInput(text) {
    if (!text || text.trim().length === 0) {
        return {
            valid: false,
            error: 'Input cannot be empty'
        };
    }
    
    if (text.length > 1000) {
        return {
            valid: false,
            error: 'Input too long (max 1000 characters)'
        };
    }
    
    return { valid: true };
}

/**
 * Capitalize first letter
 */
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Format text for display
 */
function formatText(text) {
    return text.trim().replace(/\s+/g, ' ');
}

/**
 * Debounce function
 */
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

/**
 * Throttle function
 */
function throttle(func, delay) {
    let lastCall = 0;
    return function(...args) {
        const now = Date.now();
        if (now - lastCall >= delay) {
            lastCall = now;
            func.apply(this, args);
        }
    };
}

/**
 * Generate unique ID
 */
function generateUniqueId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

/**
 * Sleep/delay function
 */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Check if URL is valid
 */
function isValidUrl(string) {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
}

/**
 * Get file size in MB
 */
function getFileSizeInMB(file) {
    return (file.size / (1024 * 1024)).toFixed(2);
}

/**
 * Check if file is image
 */
function isImageFile(file) {
    const validImageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    return validImageTypes.includes(file.type);
}

/**
 * Clamp number between min and max
 */
function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

/**
 * Random integer between min and max
 */
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
