// ============================================================================
// js/analysis.js - Image Analysis and Detection Functions
// ============================================================================

/**
 * Detect theme from image description
 */
function detectThemeFromDescription(description) {
    const desc = description.toLowerCase();
    
    if (desc.includes('person') || desc.includes('people') || desc.includes('face') || desc.includes('portrait')) {
        return 'Portrait/Character scene';
    }
    if (desc.includes('landscape') || desc.includes('nature') || desc.includes('tree') || desc.includes('mountain') || desc.includes('forest')) {
        return 'Natural landscape scene';
    }
    if (desc.includes('building') || desc.includes('city') || desc.includes('architecture') || desc.includes('street') || desc.includes('urban')) {
        return 'Urban/Architectural scene';
    }
    if (desc.includes('food') || desc.includes('drink') || desc.includes('meal') || desc.includes('recipe')) {
        return 'Food & beverage scene';
    }
    if (desc.includes('animal') || desc.includes('dog') || desc.includes('cat') || desc.includes('bird') || desc.includes('wildlife')) {
        return 'Animal/Wildlife scene';
    }
    if (desc.includes('water') || desc.includes('beach') || desc.includes('ocean') || desc.includes('sea') || desc.includes('lake')) {
        return 'Water/Marine scene';
    }
    if (desc.includes('flower') || desc.includes('plant') || desc.includes('garden')) {
        return 'Nature/Botanical scene';
    }
    
    return 'Mixed visual composition';
}

/**
 * Detect style from image description
 */
function detectStyleFromDescription(description) {
    const desc = description.toLowerCase();
    
    if (desc.includes('oil') || desc.includes('paint') || desc.includes('painted')) {
        return 'Artistic/Painted style';
    }
    if (desc.includes('cartoon') || desc.includes('illustration') || desc.includes('comic')) {
        return 'Cartoon/Comic style';
    }
    if (desc.includes('digital') || desc.includes('3d') || desc.includes('render') || desc.includes('cgi')) {
        return 'Digital/3D style';
    }
    if (desc.includes('sketch') || desc.includes('drawing') || desc.includes('pencil')) {
        return 'Sketch/Drawing style';
    }
    if (desc.includes('watercolor') || desc.includes('acrylic')) {
        return 'Fine Art style';
    }
    
    return 'Photography/Realistic style';
}

/**
 * Detect tone from image description
 */
function detectToneFromDescription(description) {
    const desc = description.toLowerCase();
    
    if (desc.includes('dark') || desc.includes('night') || desc.includes('shadow') || desc.includes('moody')) {
        return 'Dark and moody';
    }
    if (desc.includes('bright') || desc.includes('sunny') || desc.includes('light') || desc.includes('vibrant')) {
        return 'Bright and cheerful';
    }
    if (desc.includes('colorful') || desc.includes('vivid') || desc.includes('saturated')) {
        return 'Vibrant and dynamic';
    }
    if (desc.includes('calm') || desc.includes('peaceful') || desc.includes('serene') || desc.includes('quiet')) {
        return 'Calm and peaceful';
    }
    if (desc.includes('dramatic') || desc.includes('intense') || desc.includes('powerful')) {
        return 'Dramatic and intense';
    }
    
    return 'Balanced and professional';
}

/**
 * Extract focus elements from description
 */
function extractFocusElements(description) {
    const words = description.toLowerCase().split(/[,.\s]+/).filter(w => w.length > 4);
    const unique = [...new Set(words)].slice(0, 5).join(', ');
    return unique || 'various elements';
}

/**
 * Generate fallback image analysis
 */
function generateImageAnalysisWithFallback() {
    const analyses = [
        'Image Detected - Visual Composition: Scene with multiple visual elements. Theme: General scene with interesting composition. Style: Photographic or visual media. Tone: Professional and balanced. Suggested Variations: Try different lighting conditions, color palettes, perspectives, times of day, seasons, and artistic interpretations.',
        'Image Detected - Content: Visual scene with subjects of interest. Theme: Detailed scene composition. Style: Photography or visual art. Tone: Dynamic and engaging. Suggested Variations: Experiment with different lighting, angles, backgrounds, color schemes, weather conditions, and artistic styles.',
        'Image Detected - Analysis: Scene with distinctive visual elements. Theme: Interesting visual composition. Style: Visual media. Tone: Professional and clear. Suggested Variations: Try varying lighting effects, color palettes, viewing angles, backgrounds, seasons, and artistic techniques.',
        'Image Detected - Composition: Scene with visual interest. Theme: Scene composition. Style: Photography. Tone: Varied and expressive. Suggested Variations: Explore different lighting conditions, color treatments, perspectives, backgrounds, times of day, and artistic styles.'
    ];
    return analyses[Math.floor(Math.random() * analyses.length)];
}

/**
 * Generate image analysis (fallback)
 */
function generateImageAnalysis() {
    return generateImageAnalysisWithFallback();
}
