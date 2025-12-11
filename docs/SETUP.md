# SETUP.md - Installation & Setup Guide

## 🚀 Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Python 3 (for local server) OR Node.js
- Git (for version control)
- GitHub account (for deployment)

### No Backend Required!
This is a **frontend-only application**. You don't need:
- Node.js backend ✗
- Python server ✗
- Database ✗
- API keys for main features ✗

## 📥 Installation

### Option 1: Local Setup (Recommended for Development)

#### Step 1: Clone or Download Repository
```bash
# Clone from GitHub
git clone https://github.com/yourusername/image-text-generation-studio.git
cd image-text-generation-studio

# OR download ZIP and extract
unzip image-text-generation-studio.zip
cd image-text-generation-studio
```

#### Step 2: Start Local Server
```bash
# Using Python 3
python -m http.server 8000

# Or Python 2
python -m SimpleHTTPServer 8000

# Or Node.js (if installed)
npx http-server -p 8000

# Or with Node package
npm install -g http-server
http-server -p 8000
```

#### Step 3: Open in Browser
```
http://localhost:8000
```

### Option 2: Direct File Opening
Simply open `index.html` in your browser:
- On Windows: Right-click → Open with → Browser
- On Mac: Double-click index.html
- On Linux: xdg-open index.html

**Note:** Some APIs may not work when opening directly due to CORS. Use a local server for best results.

### Option 3: Deploy to Production

#### A. Vercel (Easiest)
```bash
npm install -g vercel
vercel
# Follow prompts to deploy
```

#### B. Netlify (Easiest)
1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Connect GitHub repository
4. Click "Deploy"

#### C. GitHub Pages
1. Go to repository Settings
2. Navigate to "Pages"
3. Select "main" branch as source
4. Click "Save"
5. Get your URL: `https://yourusername.github.io/image-text-generation-studio`

## 📁 Project Structure

```
image-text-generation-studio/
├── index.html              # Main HTML file
├── package.json            # Project metadata
├── .gitignore             # Git ignore rules
├── LICENSE                # MIT License
├── README.md              # Main documentation
│
├── css/
│   └── styles.css         # All styling
│
├── js/
│   ├── api-config.js      # API configuration
│   ├── api-client.js      # API request handlers
│   ├── image-handler.js   # Image processing
│   ├── analysis.js        # Image analysis
│   ├── ui-controller.js   # UI event handlers
│   └── utils.js           # Utility functions
│
├── docs/                  # Documentation
│   ├── SETUP.md          # This file
│   ├── API_DOCUMENTATION.md
│   ├── WORKFLOW.md
│   └── DEPLOYMENT.md
│
└── assets/               # Assets
    └── images/           # Screenshots
```

## 🔧 Configuration

### API Keys (Optional)

The app works with **no API keys**, but you can add optional ones:

#### Pollinations AI (FREE - Default)
- No API key required
- No configuration needed
- Works out of the box ✅

#### Hugging Face BLIP (FREE - Image Analysis)
- No API key required
- No configuration needed
- Works out of the box ✅

#### Replicate (Optional)
1. Go to [replicate.com](https://replicate.com)
2. Sign up free
3. Get API key
4. Paste in app when selecting Replicate API

#### Stability AI (Optional)
1. Go to [platform.stability.ai](https://platform.stability.ai)
2. Sign up free
3. Get API key
4. Paste in app when selecting Stability API

#### OpenAI DALL-E (Optional)
1. Go to [openai.com](https://openai.com)
2. Sign up
3. Create API key
4. Paste in app when selecting OpenAI API

### Environment Variables (Not Needed)
The app doesn't require `.env` file. API keys are entered directly in the UI.

## 🧪 Testing

### Local Testing
```bash
# Start server
python -m http.server 8000

# Open browser
http://localhost:8000

# Test features:
# 1. Text to Image
#    - Enter text prompt
#    - Select style
#    - Click "Enhance & Generate"
#    - Verify image generates

# 2. Image Variations
#    - Upload image or paste URL
#    - Click "Analyze & Generate Variations"
#    - Verify 4 images generate

# 3. API Selection
#    - Try switching between APIs
#    - Test Pollinations (default)
#    - Test optional APIs with keys
```

### Browser Console
```javascript
// Check if JavaScript is loading
console.log('App loaded');

// Test API config
console.log(API_CONFIG);

// Test image generation
generateImageFromPrompt('a cat');
```

## 🐛 Troubleshooting

### Issue: Images not generating
**Solution:**
- Check internet connection
- Verify API endpoint is correct
- Check browser console for errors
- Try refreshing page

### Issue: JS errors in console
**Solution:**
- Verify all JS files are in `js/` folder
- Check file paths in index.html
- Ensure CSS file is linked correctly

### Issue: CSS not loading
**Solution:**
- Verify `styles.css` is in `css/` folder
- Check CSS file path in index.html
- Try hard refresh (Ctrl+Shift+R)

### Issue: CORS errors
**Solution:**
- Use local server instead of opening HTML directly
- Some APIs may have CORS restrictions
- Try different API if one fails

### Issue: API keys not working
**Solution:**
- Verify key is correct
- Check API provider website for status
- Ensure key has proper permissions
- Check rate limits haven't been exceeded

## 📱 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome  | 90+     | ✅ Full Support |
| Firefox | 88+     | ✅ Full Support |
| Safari  | 14+     | ✅ Full Support |
| Edge    | 90+     | ✅ Full Support |
| Mobile  | Modern  | ✅ Full Support |

## ⚡ Performance Tips

1. **Use modern browser** - Better performance
2. **Close unnecessary tabs** - Free up memory
3. **Clear browser cache** - Fix loading issues
4. **Use wired connection** - Faster uploads
5. **Upload smaller images** - Faster processing

## 📞 Getting Help

### Documentation
- **README.md** - Features and overview
- **API_DOCUMENTATION.md** - API details
- **WORKFLOW.md** - How it works
- **DEPLOYMENT.md** - Deployment guide

### Online Resources
- [JavaScript MDN](https://developer.mozilla.org/)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [FileReader API](https://developer.mozilla.org/en-US/docs/Web/API/FileReader)
- [Pollinations Docs](https://pollinations.ai)
- [Hugging Face Docs](https://huggingface.co/docs)

### Debug Mode
Open browser console (F12) to see:
- API requests
- Errors and warnings
- JavaScript logs
- Network activity

## ✅ Setup Checklist

- [ ] Files downloaded/organized
- [ ] Folder structure verified
- [ ] Local server running
- [ ] App opens in browser
- [ ] Text to Image works
- [ ] Image Variations work
- [ ] Message notifications appear
- [ ] Responsive design works
- [ ] All features tested
- [ ] Ready to deploy

## 🎉 Ready to Go!

Your setup is complete! You can now:
1. Use the app locally
2. Deploy to GitHub/Vercel/Netlify
3. Share with others
4. Extend with new features

## 📚 Next Steps

1. Read **API_DOCUMENTATION.md** for API details
2. Check **WORKFLOW.md** for technical flow
3. Follow **DEPLOYMENT.md** to go live
4. Create demo video
5. Submit project

Happy coding! 🚀
