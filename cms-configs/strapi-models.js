// Strapi Content Type Schema for Home Page
// File: api/home-page/models/home-page.settings.json
const homePageSchema = {
  "kind": "singleType",
  "collectionName": "home_pages",
  "info": {
    "name": "Home Page",
    "description": "Home page content and settings"
  },
  "options": {
    "increments": true,
    "timestamps": true,
    "draftAndPublish": true
  },
  "attributes": {
    "hero_title": {
      "type": "string",
      "required": true
    },
    "hero_subtitle": {
      "type": "text",
      "required": true
    },
    "hero_image": {
      "model": "file",
      "via": "related",
      "allowedTypes": ["images"],
      "plugin": "upload",
      "required": true
    },
    "gallery": {
      "type": "component",
      "repeatable": true,
      "component": "gallery.gallery-item"
    }
  }
};

// Strapi Component Schema for Gallery Items
// File: components/gallery/gallery-item.json
const galleryItemSchema = {
  "collectionName": "components_gallery_gallery_items",
  "info": {
    "name": "Gallery Item",
    "icon": "image"
  },
  "options": {},
  "attributes": {
    "title": {
      "type": "string",
      "required": true
    },
    "description": {
      "type": "string",
      "required": true
    },
    "image": {
      "model": "file",
      "via": "related",
      "allowedTypes": ["images"],
      "plugin": "upload",
      "required": true
    }
  }
};

// Strapi Content Type Schema for Contact Submissions
// File: api/contact-submission/models/contact-submission.settings.json
const contactSubmissionSchema = {
  "kind": "collectionType",
  "collectionName": "contact_submissions",
  "info": {
    "name": "Contact Submission",
    "description": "Contact form submissions from website visitors"
  },
  "options": {
    "increments": true,
    "timestamps": true,
    "draftAndPublish": false
  },
  "attributes": {
    "first_name": {
      "type": "string",
      "required": true
    },
    "last_name": {
      "type": "string",
      "required": true
    },
    "email": {
      "type": "email",
      "required": true
    },
    "phone": {
      "type": "string",
      "required": false
    },
    "comments": {
      "type": "text",
      "required": true
    }
  }
};

// Strapi Content Type Schema for Site Settings
// File: api/site-setting/models/site-setting.settings.json
const siteSettingSchema = {
  "kind": "singleType",
  "collectionName": "site_settings",
  "info": {
    "name": "Site Settings",
    "description": "Global site settings and configuration"
  },
  "options": {
    "increments": true,
    "timestamps": true,
    "draftAndPublish": true
  },
  "attributes": {
    "site_title": {
      "type": "string",
      "required": true
    },
    "logo": {
      "model": "file",
      "via": "related",
      "allowedTypes": ["images"],
      "plugin": "upload",
      "required": false
    },
    "footer_text": {
      "type": "string",
      "required": true
    },
    "navigation": {
      "type": "component",
      "repeatable": true,
      "component": "navigation.nav-item"
    }
  }
};

// Strapi Component Schema for Navigation Items
// File: components/navigation/nav-item.json
const navigationItemSchema = {
  "collectionName": "components_navigation_nav_items",
  "info": {
    "name": "Navigation Item",
    "icon": "link"
  },
  "options": {},
  "attributes": {
    "label": {
      "type": "string",
      "required": true
    },
    "url": {
      "type": "string",
      "required": true
    }
  }
};

module.exports = {
  homePageSchema,
  galleryItemSchema,
  contactSubmissionSchema,
  siteSettingSchema,
  navigationItemSchema
};