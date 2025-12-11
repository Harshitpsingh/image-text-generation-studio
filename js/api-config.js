// ============================================================================
// api-config.js - API Configuration and Constants
// ============================================================================

const API_CONFIG = {
  // Hugging Face BLIP Image Analysis API
  HUGGING_FACE: {
    endpoint: 'https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-large',
    name: 'Hugging Face BLIP',
    requiresKey: false,
    description: 'Free image analysis with no API key needed'
  },

  // Pollinations AI - Image Generation
  POLLINATIONS: {
    endpoint: 'https://image.pollinations.ai/prompt',
    name: 'Pollinations AI',
    requiresKey: false,
    description: 'Free image generation'
  },

  // Replicate - Premium Models
  REPLICATE: {
    endpoint: 'https://api.replicate.com/v1/predictions',
    name: 'Replicate',
    requiresKey: true,
    description: 'Premium AI models with free credits'
  },

  // Stability AI
  STABILITY: {
    endpoint: 'https://api.stability.ai/v1/generate',
    name: 'Stability AI',
    requiresKey: true,
    description: 'High-quality image generation'
  },

  // OpenAI DALL-E
  OPENAI: {
    endpoint: 'https://api.openai.com/v1/images/generations',
    name: 'OpenAI DALL-E',
    requiresKey: true,
    description: 'Premium AI image generation'
  }
};

// Image Generation Styles
const IMAGE_STYLES = {
  realistic: {
    label: 'Realistic',
    prefix: 'Create a highly realistic and detailed'
  },
  illustration: {
    label: 'Illustration',
    prefix: 'Create a beautiful illustration of'
  },
  'oil painting': {
    label: 'Oil Painting',
    prefix: 'Create an oil painting style artwork of'
  },
  'digital art': {
    label: 'Digital Art',
    prefix: 'Create stunning digital art depicting'
  },
  photorealistic: {
    label: 'Photorealistic',
    prefix: 'Generate a photorealistic image of'
  },
  cyberpunk: {
    label: 'Cyberpunk',
    prefix: 'Create a cyberpunk-themed artwork of'
  },
  fantasy: {
    label: 'Fantasy',
    prefix: 'Create a fantasy-inspired illustration of'
  }
};

// Variation Styles for Image Variations
const VARIATION_STYLES = [
  {
    name: 'Photorealistic',
    prompt: 'Create a photorealistic variation of: {description}. Professional studio lighting, 4K quality, high detail.'
  },
  {
    name: 'Oil Painting',
    prompt: 'Create an oil painting style variation of: {description}. Vibrant warm color palette, classic fine art, impressionist brushstrokes.'
  },
  {
    name: 'Digital Illustration',
    prompt: 'Create a digital illustration variation of: {description}. Cool blue and purple tones, modern digital art, contemporary style.'
  },
  {
    name: '3D Render',
    prompt: 'Create a 3D rendered variation of: {description}. Dramatic cinematic lighting, high detail, professional 3D render.'
  }
];

// Prompt Enhancement Suffix
const PROMPT_ENHANCEMENT_SUFFIX = '. High quality, detailed, professional, trending on artstation, 4k resolution.';

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    API_CONFIG,
    IMAGE_STYLES,
    VARIATION_STYLES,
    PROMPT_ENHANCEMENT_SUFFIX
  };
}
