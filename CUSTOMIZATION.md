# Zero:Archive - Quick Customization Guide

## 🎯 5-Minute Customization Checklist

### 1. Update Site Title & Description
**File:** `_config.yml`
```yaml
title: "Zero:Archive"           # Change if needed
description: "Your tagline"     # Update this
url: "https://zeroarchive.org"  # Your domain
```

### 2. Replace Artist Names (Homepage)
**File:** `index.html`
- Search for: `ARTIST_01`, `ARTIST_02`, etc.
- Replace with: Real artist names
- Update: `artist-role` and `artist-bio` paragraphs

### 3. Replace Artist Names (Artists Page)
**File:** `artists.html`
- Same process as homepage
- Add more detailed bios here

### 4. Update Social Media Links
**File:** `contact.html`
```html
<!-- Find these lines and replace # with real URLs -->
<a href="https://twitter.com/zeroarchive">TWITTER</a>
<a href="https://instagram.com/zeroarchive">INSTAGRAM</a>
<a href="https://soundcloud.com/zeroarchive">SOUNDCLOUD</a>
<a href="https://zeroarchive.bandcamp.com">BANDCAMP</a>
```

### 5. Update Email Addresses
**File:** `contact.html`
```html
<!-- Replace these placeholder emails -->
contact@zeroarchive.org
bookings@zeroarchive.org
press@zeroarchive.org
```

---

## 🎨 Design Customization

### Change Main Colors
**File:** `assets/css/style.css`
```css
:root {
  --primary-blue: #2B9FE8;     /* Main brand color */
  --deep-blue: #1A5F8F;        /* Darker variant */
  --accent-cyan: #00D9FF;      /* Highlights/links */
  --accent-pink: #FF6B9D;      /* Secondary accent */
  --dark-bg: #0A1628;          /* Card backgrounds */
  --darker-bg: #050B14;        /* Page background */
}
```

### Change Typography Size
**File:** `assets/css/style.css`
```css
/* Find these lines to adjust font sizes */
h1 { font-size: 4rem; }        /* Hero title */
h2 { font-size: 2.5rem; }      /* Section headers */
body { font-size: 16px; }      /* Base text size */
```

---

## 📸 Adding Images

### Artist Photos
1. Add images to: `assets/images/artists/`
2. Name them: `artist-01.jpg`, `artist-02.jpg`, etc.
3. Update artist cards:
```html
<div class="artist-card">
  <img src="/assets/images/artists/artist-01.jpg" alt="Artist Name">
  <h3 class="artist-name">ARTIST NAME</h3>
  ...
</div>
```

### Release Cover Art
1. Add covers to: `assets/images/releases/`
2. Update in `releases.html`:
```html
<div style="aspect-ratio: 1; background: url('/assets/images/releases/cover-01.jpg'); background-size: cover;">
```

### Logo & Favicon
- Logo: Save to `assets/images/logo.png`
- Favicon: Save to `assets/images/favicon.png`
- Update reference in `_layouts/default.html`

---

## 🎵 Adding Real Audio

### Step 1: Upload Audio Files
```
assets/
└── audio/
    ├── artist-01-preview.mp3
    ├── artist-02-preview.mp3
    └── ...
```

### Step 2: Update JavaScript
**File:** `assets/js/main.js`
```javascript
// Find the audio preview section and replace with:
document.querySelectorAll('.audio-preview').forEach(preview => {
  const trackFile = preview.dataset.track; // Add data-track attribute to HTML
  const audio = new Audio(`/assets/audio/${trackFile}`);
  
  preview.addEventListener('click', function() {
    if (audio.paused) {
      audio.play();
      this.style.borderColor = '#00D9FF';
    } else {
      audio.pause();
      this.style.borderColor = '';
    }
  });
});
```

### Step 3: Update HTML
**File:** `index.html`, `artists.html`
```html
<div class="audio-preview" data-track="artist-01-preview.mp3">
  <div class="audio-bars">...</div>
  <span>PREVIEW_TRACK.MP3</span>
</div>
```

---

## 📝 Adding New Pages

### Create New Page File
**Example:** `news.html`
```html
---
layout: default
title: News - Zero:Archive
---

<div class="container" style="margin-top: 120px;">
  <div class="section-header">
    <h2>// NEWS</h2>
  </div>
  
  <!-- Your content here -->
  
</div>
```

### Add to Navigation
**File:** `_layouts/default.html`
```html
<ul class="nav-links">
  <li><a href="/">HOME</a></li>
  <li><a href="/artists">ARTISTS</a></li>
  <li><a href="/releases">RELEASES</a></li>
  <li><a href="/news">NEWS</a></li>  <!-- Add this -->
  <li><a href="/about">ABOUT</a></li>
  <li><a href="/contact">CONTACT</a></li>
</ul>
```

---

## 🔧 Common Tweaks

### Remove Hexagonal Cards
If you want regular rectangular cards instead:
**File:** `assets/css/style.css`
```css
.hex-card {
  clip-path: none;  /* Remove this line or set to 'none' */
}
```

### Change Animation Speed
**File:** `assets/css/style.css`
```css
:root {
  --transition-fast: 0.15s ease;    /* Make faster: 0.1s */
  --transition-normal: 0.3s ease;   /* Make faster: 0.2s */
}
```

### Disable Click Ripple Effect
**File:** `assets/js/main.js`
```javascript
// Comment out or remove this entire section:
/*
document.addEventListener('click', (e) => {
  const ripple = document.createElement('div');
  ...
});
*/
```

### Change Grid Layout
**File:** `assets/css/style.css`
```css
.artist-grid {
  /* Change this line to adjust number of columns */
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  /* For 2 columns: repeat(2, 1fr) */
  /* For 3 columns: repeat(3, 1fr) */
}
```

---

## 📱 Mobile Customization

### Adjust Mobile Font Sizes
**File:** `assets/css/style.css`
```css
@media (max-width: 768px) {
  h1 { font-size: 2.5rem; }     /* Adjust as needed */
  h2 { font-size: 1.8rem; }
  body { font-size: 14px; }
}
```

---

## 🚀 Performance Optimization

### Compress Images
Before uploading images:
1. Use TinyPNG.com or similar
2. Keep JPGs under 200KB
3. Keep PNGs under 100KB
4. Consider WebP format for better compression

### Lazy Load Images
**File:** HTML files
```html
<img src="placeholder.jpg" data-src="actual-image.jpg" loading="lazy">
```

---

## ✅ Final Checklist Before Launch

- [ ] All artist names updated
- [ ] All placeholder emails replaced
- [ ] Social media links added
- [ ] Logo and favicon uploaded
- [ ] Audio previews working (if applicable)
- [ ] All pages load correctly
- [ ] Mobile responsive tested
- [ ] Links all working
- [ ] Contact form/info tested
- [ ] DNS configured (if using custom domain)
- [ ] HTTPS enabled
- [ ] Google Analytics added (optional)

---

## 🆘 Need Help?

### File Structure Reference
```
zeroarchive-site/
├── _config.yml          ← Site settings
├── _layouts/
│   └── default.html     ← Main template (navigation, footer)
├── index.html           ← Homepage
├── artists.html         ← Artist roster
├── releases.html        ← Discography
├── about.html          ← About page
├── contact.html        ← Contact page
├── assets/
│   ├── css/
│   │   └── style.css   ← All styles
│   ├── js/
│   │   └── main.js     ← All JavaScript
│   ├── images/         ← Images
│   └── audio/          ← Audio files
```

### Priority Order for Customization
1. **Must do first:** Artist info, emails, social links
2. **Should do:** Colors, images, audio
3. **Nice to have:** Additional pages, advanced features
4. **Optional:** Animations, easter eggs, analytics

---

**Remember:** Test locally first with `bundle exec jekyll serve` before pushing to GitHub!

**Built by Izumi Sonoka for Zero:Archive**
