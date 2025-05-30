# Professional Business Website Generator

A clean, semantic, and mobile-responsive HTML/CSS website template designed for easy integration with headless CMS platforms like Netlify CMS, Contentful, and Strapi.

## 🌟 Features

- **Semantic HTML5** structure with intuitive CSS classes
- **Mobile-responsive** design with modern Tailwind-inspired styling
- **Hero section** with full-width background image and overlay text
- **Responsive image gallery** (2-4 columns based on screen size)
- **Contact form** with client-side validation
- **CMS-ready** configuration files for popular platforms
- **Accessibility** features and proper ARIA labels
- **Modern design** with professional color scheme

## 📁 Project Structure

```
/app/
├── index.html              # Main HTML file
├── styles.css             # Complete CSS styling
├── script.js              # JavaScript functionality
├── cms-configs/            # CMS configuration files
│   ├── netlify-config.yml      # Netlify CMS configuration
│   ├── strapi-models.js        # Strapi content type models
│   └── contentful-models.json  # Contentful content model definitions
└── README.md               # This file
```

## 🎨 Design Features

### Color Scheme
- **Primary Blue**: `#1e40af` (Deep blue for headers and primary elements)
- **Secondary Blue**: `#3b82f6` (Light blue for accents)
- **Accent Orange**: `#f97316` (Call-to-action buttons and highlights)
- **Neutral Grays**: Various shades for text and backgrounds
- **Clean Background**: White and light gray sections

### Layout Sections
1. **Header**: Fixed navigation with logo space and menu
2. **Hero Section**: Full-width image with overlay text
3. **Gallery Section**: Responsive grid layout for showcasing work
4. **Contact Section**: Professional contact form with validation
5. **Footer**: Simple footer with copyright and links

## 🚀 Quick Start

### Option 1: Static Deployment
1. Upload `index.html`, `styles.css`, and `script.js` to your web server
2. Customize content directly in the HTML file
3. Replace placeholder images with your own

### Option 2: CMS Integration

#### Netlify CMS
1. Copy `cms-configs/netlify-config.yml` to your project root as `admin/config.yml`
2. Set up Netlify Identity for authentication
3. Deploy to Netlify with Git Gateway enabled

#### Strapi
1. Use the schemas in `cms-configs/strapi-models.js` to create content types
2. Import the component definitions
3. Configure API endpoints and permissions

#### Contentful
1. Import the content models from `cms-configs/contentful-models.json`
2. Create content entries based on the defined fields
3. Use Contentful's API to populate the website

## 📝 Contact Form Integration

### Netlify Forms
The contact form is already configured for Netlify Forms with:
- `data-netlify="true"` attribute
- Hidden form-name field
- Honeypot spam protection

### Custom Backend Integration
To integrate with other form processors:

1. **Formspree**: Change form action to your Formspree endpoint
2. **Custom API**: Modify the JavaScript to POST to your API endpoint
3. **CMS Built-in**: Use your CMS's form handling mechanism

## 🎯 Customization Guide

### Content Updates
- **Hero Section**: Update title, subtitle, and background image
- **Gallery**: Replace images and descriptions
- **Contact Form**: Modify fields as needed
- **Navigation**: Update menu items and links

### Styling Updates
- **Colors**: Modify CSS custom properties for brand colors
- **Typography**: Change font families in the CSS
- **Layout**: Adjust grid systems and spacing
- **Components**: Customize individual section styles

### Image Requirements
- **Hero Image**: Recommended size 1920x1080px
- **Gallery Images**: Recommended size 400x300px
- **Logo**: Recommended size 150x50px (or adjust CSS accordingly)

## 📱 Responsive Breakpoints

- **Mobile**: 480px and below
- **Tablet**: 768px and below
- **Desktop**: 1024px and above
- **Large Desktop**: 1200px container max-width

## ✅ Form Validation Features

- **Client-side validation** for all form fields
- **Real-time error messaging**
- **Email format validation**
- **Phone number format checking**
- **Required field validation**
- **Minimum length requirements**

## 🔧 JavaScript Features

- **Smooth scrolling** navigation
- **Mobile menu toggle**
- **Form validation and handling**
- **Scroll animations**
- **Header scroll effects**
- **Image lazy loading**

## 🎨 CMS Content Structure

### Home Page Content
- Hero title and subtitle
- Hero background image
- Gallery items (title, description, image)

### Site Settings
- Site title and logo
- Navigation menu items
- Footer text

### Contact Submissions
- First name, last name, email, phone
- Comments/message
- Submission timestamp

## 🌐 Browser Support

- **Chrome**: Latest 2 versions
- **Firefox**: Latest 2 versions
- **Safari**: Latest 2 versions
- **Edge**: Latest 2 versions
- **Mobile browsers**: iOS Safari, Chrome Mobile

## 📄 License

This template is provided as-is for use in personal and commercial projects. Feel free to modify and customize according to your needs.

## 🤝 Contributing

To improve this template:
1. Test thoroughly across different devices
2. Ensure accessibility compliance
3. Validate HTML/CSS
4. Test form functionality
5. Document any changes

---

**Ready to deploy!** This template is designed to work out-of-the-box with most CMS platforms and can be easily customized for any business or professional website.