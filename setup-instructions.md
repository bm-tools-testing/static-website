# 🚀 Professional Business Website - Setup Instructions

## 📥 Getting Started

### Option 1: Download and Run Locally

1. **Download the files** from this repository
2. **Navigate to the project directory** in your terminal
3. **Start a local server** using one of these methods:

#### Method A: Using Python (Recommended)
```bash
# Navigate to the project directory
cd /path/to/your/website

# Python 3
python -m http.server 8080

# Or Python 2
python -m SimpleHTTPServer 8080
```

#### Method B: Using Node.js
```bash
# Install a simple HTTP server globally
npm install -g http-server

# Navigate to project directory and start server
cd /path/to/your/website
http-server -p 8080
```

#### Method C: Using PHP
```bash
# Navigate to project directory
cd /path/to/your/website

# Start PHP development server
php -S localhost:8080
```

4. **Open your browser** and go to: `http://localhost:8080`

### Option 2: GitHub Setup (For Development)

1. **Create a new repository** on GitHub
2. **Clone or download** this project
3. **Push to your repository**:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### Option 3: Deploy to Netlify (Recommended for Production)

1. **Create a Netlify account** at netlify.com
2. **Drag and drop** the project folder to Netlify dashboard
3. **OR connect your GitHub repository** for automatic deployments

**For Netlify CMS integration:**
1. Create an `admin` folder in your project root
2. Copy `cms-configs/netlify-config.yml` to `admin/config.yml`
3. Enable Netlify Identity in your site settings
4. Set up Git Gateway in Netlify Identity settings

## 📁 Project Structure

```
/
├── index.html              # Main website file
├── styles.css              # All styling
├── script.js               # JavaScript functionality
├── cms-configs/            # CMS integration files
│   ├── netlify-config.yml      # Netlify CMS setup
│   ├── strapi-models.js        # Strapi content models
│   └── contentful-models.json  # Contentful models
├── README.md               # Documentation
└── setup-instructions.md   # This file
```

## 🎨 What You'll See

✅ **Header** - Fixed navigation with logo space and menu  
✅ **Hero Section** - Full-width image with overlay text  
✅ **Gallery** - Responsive image grid (2-4 columns)  
✅ **Contact Form** - Professional form with validation  
✅ **Footer** - Clean footer with copyright  

## 🔧 Customization

### Replace Images
- **Hero Image**: Update the `src` attribute in the hero section
- **Gallery Images**: Replace URLs in the gallery items
- **Logo**: Update the logo `src` in the header

### Modify Content
- **Hero Text**: Edit title and subtitle in `index.html`
- **Gallery Items**: Update titles and descriptions
- **Contact Info**: Modify form fields as needed
- **Navigation**: Update menu items and links

### Change Colors
Edit these CSS variables in `styles.css`:
- Primary Blue: `#1e40af`
- Secondary Blue: `#3b82f6`
- Accent Orange: `#f97316`

## 🌐 CMS Integration

### Netlify CMS
1. Copy `cms-configs/netlify-config.yml` to `admin/config.yml`
2. Set up Netlify Identity
3. Deploy to Netlify

### Strapi
1. Use schemas from `cms-configs/strapi-models.js`
2. Create content types in Strapi admin
3. Configure API permissions

### Contentful
1. Import models from `cms-configs/contentful-models.json`
2. Create content entries
3. Use Contentful API to populate website

## 📱 Features

- **Fully Responsive** - Works on all devices
- **Form Validation** - Client-side validation with error messages
- **Smooth Scrolling** - Navigation with smooth scroll
- **Mobile Menu** - Hamburger menu for mobile devices
- **Loading Animations** - Scroll-triggered animations
- **SEO Ready** - Semantic HTML structure
- **Accessibility** - ARIA labels and proper markup

## 🆘 Troubleshooting

**Website not loading?**
- Make sure you're running a local server (not just opening the HTML file)
- Check that you're using the correct port (8080)
- Verify all files are in the same directory

**Images not showing?**
- Some external image URLs might be blocked by browsers
- Replace with your own images for production use

**Form not working?**
- Form is set up for Netlify Forms by default
- For other platforms, modify the form action and method

**CSS/JS not loading?**
- Ensure `styles.css` and `script.js` are in the same directory as `index.html`
- Check browser console for error messages

## 🚀 Ready to Deploy!

Your professional business website is ready to go live! Choose your preferred hosting platform and deploy.

**Need help?** Check the main README.md for detailed documentation.