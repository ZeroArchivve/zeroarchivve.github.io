# Zero:Archive Website - Deployment Guide

## 📋 Complete Setup Checklist

### Part 1: GitHub Repository Setup

1. **Create GitHub Account** (if you don't have one)
   - Go to https://github.com
   - Sign up or log in

2. **Create New Repository**
   - Click the "+" icon in top-right → "New repository"
   - Repository name: `zeroarchive-site` (or any name)
   - Description: "Zero:Archive Label Website"
   - Set to **Public** (required for free GitHub Pages)
   - Don't initialize with README (we already have one)
   - Click "Create repository"

3. **Upload Your Site**
   
   **Option A: Using Git (Recommended)**
   ```bash
   cd /path/to/zeroarchive-site
   git init
   git add .
   git commit -m "Initial commit: Zero:Archive website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/zeroarchive-site.git
   git push -u origin main
   ```
   
   **Option B: Using GitHub Web Interface**
   - On the repository page, click "uploading an existing file"
   - Drag and drop all files from the `zeroarchive-site` folder
   - Commit the changes

### Part 2: Enable GitHub Pages

1. **Go to Repository Settings**
   - Click "Settings" tab in your repository
   - Scroll down to "Pages" in the left sidebar

2. **Configure Build Source**
   - Under "Build and deployment"
   - Source: Select **GitHub Actions**
   - (The workflow we created will handle everything automatically)

3. **Wait for Deployment**
   - Go to "Actions" tab
   - Watch the "Deploy Jekyll site to GitHub Pages" workflow run
   - Should take 2-3 minutes
   - Green checkmark = success!

4. **Visit Your Site**
   - Your site will be live at: `https://YOUR_USERNAME.github.io/zeroarchive-site/`
   - (Note: If repo name is exactly your username, it'll be at `https://YOUR_USERNAME.github.io/`)

### Part 3: Custom Domain Setup (zeroarchive.org)

#### Step 1: Purchase Domain
- Buy `zeroarchive.org` from any domain registrar:
  - Namecheap (recommended)
  - Google Domains
  - GoDaddy
  - Cloudflare

#### Step 2: Configure DNS Records

Log in to your domain registrar and add these DNS records:

**For Apex Domain (zeroarchive.org):**
```
Type    Name    Value                 TTL
A       @       185.199.108.153       3600
A       @       185.199.109.153       3600
A       @       185.199.110.153       3600
A       @       185.199.111.153       3600
```

**For WWW Subdomain:**
```
Type    Name    Value                           TTL
CNAME   www     YOUR_USERNAME.github.io.        3600
```

⚠️ **Important:** 
- Replace `YOUR_USERNAME` with your actual GitHub username
- Note the trailing dot (`.`) in the CNAME value - some registrars require it
- Save/apply changes

#### Step 3: Configure GitHub Pages for Custom Domain

1. Go to repository **Settings → Pages**
2. Under "Custom domain", enter: `zeroarchive.org`
3. Click "Save"
4. Wait for DNS check (can take a few minutes)
5. Once verified, check "Enforce HTTPS"

#### Step 4: Verify CNAME File

Make sure the `CNAME` file exists in your repository root with content:
```
zeroarchive.org
```

If it's not there or gets deleted, recreate it and commit.

#### Step 5: Wait for DNS Propagation

- DNS changes can take **24-48 hours** to fully propagate worldwide
- Check propagation status: https://www.whatsmydns.net/
- Enter `zeroarchive.org` and check if A records are correct

### Part 4: Verification

#### Test Your Site:
1. Visit `https://zeroarchive.org` (after DNS propagation)
2. Try all navigation links
3. Test on mobile devices
4. Check different browsers (Chrome, Firefox, Safari)

#### Verify Features:
- ✅ Click ripple effects working
- ✅ Navigation highlighting on scroll
- ✅ Smooth scrolling to sections
- ✅ Hover effects on cards
- ✅ Audio preview animations
- ✅ Mobile responsive layout

## 🔄 Making Updates

### Method 1: Direct File Edit (Simple Changes)
1. Go to your GitHub repository
2. Navigate to the file you want to edit
3. Click the pencil icon (Edit)
4. Make your changes
5. Scroll down, add commit message
6. Click "Commit changes"
7. Site will auto-rebuild (check Actions tab)

### Method 2: Git Push (Recommended for Multiple Changes)
```bash
# Make your changes locally
git add .
git commit -m "Update artist bios"
git push origin main
```
Site will automatically rebuild and deploy!

## 🎨 Customization Quick Reference

### Change Artist Info:
- Edit: `index.html`, `artists.html`
- Find sections with `ARTIST_01`, `ARTIST_02`, etc.
- Replace with real names, roles, bios

### Change Colors:
- Edit: `assets/css/style.css`
- Look for `:root { ... }` section at the top
- Modify CSS variables

### Add Real Audio:
- Upload audio files to `assets/audio/`
- Edit: `assets/js/main.js`
- Replace placeholder audio code

### Update Social Links:
- Edit: `contact.html`, `_layouts/default.html`
- Replace `#` with actual URLs

## 🐛 Common Issues & Solutions

### Issue: Site not updating after push
**Solution:**
- Check "Actions" tab for build errors
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Wait 2-3 minutes for build to complete

### Issue: Custom domain not working
**Solution:**
- Wait 24-48 hours for DNS propagation
- Verify DNS records are correct (use whatsmydns.net)
- Make sure CNAME file exists in repository
- Check GitHub Pages settings show domain as verified

### Issue: CSS not loading
**Solution:**
- Check file paths in `_layouts/default.html`
- Verify `assets/css/style.css` exists
- Clear browser cache
- Check browser console for 404 errors

### Issue: 404 Page Not Found
**Solution:**
- Ensure `_config.yml` has correct `baseurl`
- For custom domain, `baseurl` should be empty: `baseurl: ""`
- For GitHub Pages URL, set: `baseurl: "/repository-name"`

## 📊 Analytics & Monitoring

### Add Google Analytics (Optional)
1. Get GA4 tracking code
2. Add to `_layouts/default.html` before `</head>`
3. Commit and push

### Monitor Site Performance
- Use Lighthouse in Chrome DevTools
- Check mobile responsiveness
- Test loading speed

## 🔐 Security Best Practices

- ✅ HTTPS enforced (automatic with GitHub Pages)
- ✅ No sensitive data in public repository
- ✅ Regular dependency updates (`bundle update`)
- ✅ Monitor GitHub security alerts

## 📞 Support

If you encounter issues:
1. Check the [Jekyll documentation](https://jekyllrb.com/docs/)
2. Check [GitHub Pages documentation](https://docs.github.com/en/pages)
3. Review GitHub Actions logs for build errors

---

## 🎉 You're Done!

Your Zero:Archive website should now be live with:
- Blue Archive × osu! aesthetic ✅
- Iosevka Mono font throughout ✅
- Responsive design ✅
- Interactive features ✅
- Custom domain ready ✅
- Auto-deployment on every change ✅

**Next Steps:**
1. Replace placeholder content with real artist info
2. Add actual audio files
3. Upload artist photos
4. Create social media accounts and update links
5. Share your site with the world!

---

**Built by Izumi Sonoka**  
**ZERO:ARCHIVE // 2026**
