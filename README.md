# Zero:Archive Website

Official website for **Zero:Archive**, a complex sound design collective. Built with Jekyll and designed with Blue Archive × osu! aesthetic using Iosevka Mono throughout.

## 🎨 Design Philosophy

- **Blue Archive UI**: Clean geometric patterns, hexagonal elements, signature blue color palette
- **osu! Influence**: Snappy interactions, click feedback, responsive animations
- **Typography**: Iosevka Mono for that technical, monospace aesthetic
- **Colors**: Deep blues (#1A5F8F, #2B9FE8), accent cyan (#00D9FF), accent pink (#FF6B9D)

## 🚀 Quick Start

### Prerequisites
- Ruby 3.x
- Bundler
- Git

### Local Development

1. Clone this repository:
```bash
git clone https://github.com/YOUR_USERNAME/zeroarchive-site.git
cd zeroarchive-site
```

2. Install dependencies:
```bash
bundle install
```

3. Run the development server:
```bash
bundle exec jekyll serve
```

4. Open your browser to `http://localhost:4000`

### Building for Production

```bash
bundle exec jekyll build
```

The built site will be in the `_site` directory.

## 📦 Deployment to GitHub Pages

### Method 1: Automatic (Recommended)

1. Create a new repository on GitHub named `zeroarchive-site` (or any name)
2. Push this code to the repository
3. Go to **Settings → Pages**
4. Under "Build and deployment", select **GitHub Actions** as source
5. The site will automatically build and deploy on every push to `main`

### Method 2: Custom Domain Setup (zeroarchive.org)

1. In your repository, go to **Settings → Pages**
2. Under "Custom domain", enter: `zeroarchive.org`
3. Wait for DNS check to complete
4. Enable "Enforce HTTPS"

**DNS Configuration at your domain registrar:**

Add these DNS records:

```
Type    Name    Value
A       @       185.199.108.153
A       @       185.199.109.153
A       @       185.199.110.153
A       @       185.199.111.153
CNAME   www     YOUR_USERNAME.github.io
```

Replace `YOUR_USERNAME` with your actual GitHub username.

5. Create a file named `CNAME` in the root directory:
```bash
echo "zeroarchive.org" > CNAME
```

6. Commit and push:
```bash
git add CNAME
git commit -m "Add custom domain"
git push
```

DNS propagation can take 24-48 hours.

## 📁 Project Structure

```
zeroarchive-site/
├── _config.yml              # Jekyll configuration
├── _layouts/                # HTML templates
│   └── default.html         # Main layout
├── assets/
│   ├── css/
│   │   └── style.css        # Main stylesheet (Blue Archive × osu!)
│   ├── js/
│   │   └── main.js          # Interactive features
│   └── images/              # Images and assets
├── index.html               # Homepage
├── artists.html             # Artists roster page
├── releases.html            # Discography page
├── about.html               # About page
├── contact.html             # Contact page
├── .github/
│   └── workflows/
│       └── jekyll.yml       # GitHub Actions deployment
├── Gemfile                  # Ruby dependencies
└── README.md                # This file
```

## 🎯 Customization Guide

### 1. Update Artist Information

Edit `index.html` and `artists.html` to replace placeholder artist info:

```html
<h3 class="artist-name">YOUR_ARTIST_NAME</h3>
<p class="artist-role">YOUR ROLE</p>
<p class="artist-bio">Your bio here...</p>
```

### 2. Add Real Audio Previews

Replace the placeholder audio visualizers in `assets/js/main.js`:

```javascript
// Find this section and add real audio functionality
document.querySelectorAll('.audio-preview').forEach(preview => {
  const audio = new Audio('/assets/audio/track.mp3');
  preview.addEventListener('click', () => {
    audio.paused ? audio.play() : audio.pause();
  });
});
```

### 3. Customize Colors

Edit CSS variables in `assets/css/style.css`:

```css
:root {
  --primary-blue: #2B9FE8;      /* Main brand color */
  --accent-cyan: #00D9FF;        /* Highlights */
  --accent-pink: #FF6B9D;        /* Secondary accent */
  /* ... modify as needed */
}
```

### 4. Update Social Links

Edit `contact.html` and `_layouts/default.html` to add your actual social media links.

### 5. Add Logo/Favicon

Replace placeholder assets:
- Logo: Add to `assets/images/logo.png`
- Favicon: Add to `assets/images/favicon.png`

Update references in `_layouts/default.html`.

## 🎨 Features

- ✅ Fully responsive design
- ✅ osu!-style click ripple effects
- ✅ Smooth scroll navigation
- ✅ Active nav highlighting
- ✅ Animated hero section
- ✅ Audio preview placeholders (ready for real audio)
- ✅ Parallax background effects
- ✅ Konami code easter egg
- ✅ Custom scrollbar styling
- ✅ Optimized for performance

## 🛠️ Tech Stack

- **Framework**: Jekyll 4.3
- **CSS**: Custom CSS (no frameworks)
- **JavaScript**: Vanilla JS (no dependencies)
- **Fonts**: Iosevka Mono (via jsDelivr CDN)
- **Hosting**: GitHub Pages
- **CI/CD**: GitHub Actions

## 📝 Content Management

### Adding New Artists

Create files in `_artists/` directory (you'll need to create this):

```markdown
---
layout: artist
name: Artist Name
role: Sound Designer
bio: Artist bio here...
---

Extended content here...
```

### Adding New Releases

Create files in `_releases/` directory:

```markdown
---
layout: release
title: Release Title
artist: Artist Name
year: 2026
---

Release description here...
```

## 🎭 Interactive Features

- **Click Feedback**: Every click creates a ripple effect (osu! tribute)
- **Smooth Scrolling**: Navigation links smoothly scroll to sections
- **Hover Effects**: Cards have elevation and color transitions
- **Audio Previews**: Placeholder animation (ready for real audio integration)
- **Parallax**: Hero background moves on scroll
- **Easter Egg**: Try the Konami code (↑↑↓↓←→←→BA)

## 🔧 Troubleshooting

### Site not building?
- Check GitHub Actions tab for error logs
- Ensure `_config.yml` is valid YAML
- Verify all file paths are correct

### Custom domain not working?
- Wait 24-48 hours for DNS propagation
- Verify DNS records are correct
- Check GitHub Pages settings

### Styling issues?
- Clear browser cache
- Check browser console for errors
- Verify CSS file path in `_layouts/default.html`

## 📄 License

All rights reserved to Zero:Archive collective. This code is provided for the label's use.

## 👤 Built By

**Izumi Sonoka** (Haziqrm57's OC)  
*Programming Language Polyglot & Custom Language Creator*

---

**ZERO:ARCHIVE** // COMPLEX SOUND DESIGN COLLECTIVE // 2026
