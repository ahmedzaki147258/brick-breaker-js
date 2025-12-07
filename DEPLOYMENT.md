# Deployment Guide - Brick Breaker Game

This guide will help you deploy your Brick Breaker game to GitHub Pages so you can add it to your CV.

## Step-by-Step Deployment Instructions

### Option 1: GitHub Pages (Recommended - Free & Easy)

#### Step 1: Ensure Your Code is Pushed to GitHub
```bash
# Make sure all changes are committed
git add .
git commit -m "Ready for deployment"
git push origin features/bricks
```

#### Step 2: Enable GitHub Pages
1. Go to your GitHub repository: https://github.com/ahmedzaki147258/brick-breaker-js
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select:
   - Branch: `main` (or `features/bricks` if you want to deploy from that branch)
   - Folder: `/ (root)`
5. Click **Save**
6. Wait 1-2 minutes for GitHub to build your site

#### Step 3: Access Your Deployed Site
Your game will be available at:
```
https://ahmedzaki147258.github.io/brick-breaker-js/
```

**Note:** If you deploy from a branch other than `main`, you may need to merge your changes to `main` first, or update the Pages source to your branch.

---

### Option 2: Netlify (Alternative - Also Free)

1. Go to https://www.netlify.com/
2. Sign up/Login with your GitHub account
3. Click **Add new site** → **Import an existing project**
4. Select your GitHub repository: `brick-breaker-js`
5. Build settings:
   - Build command: (leave empty - it's a static site)
   - Publish directory: `/` (root)
6. Click **Deploy site**
7. Your site will be live at: `https://random-name.netlify.app`
8. You can customize the domain name in site settings

---

### Option 3: Vercel (Alternative - Also Free)

1. Go to https://vercel.com/
2. Sign up/Login with your GitHub account
3. Click **Add New Project**
4. Import your `brick-breaker-js` repository
5. Click **Deploy** (no build settings needed for static sites)
6. Your site will be live immediately

---

## Quick Deployment Checklist

- [ ] All files are committed and pushed to GitHub
- [ ] GitHub Pages is enabled in repository settings
- [ ] Site is accessible at the provided URL
- [ ] Test the game to ensure it works correctly
- [ ] Add the link to your CV/resume

## Troubleshooting

### If GitHub Pages shows 404:
- Make sure `index.html` is in the root directory (✓ it is)
- Wait a few minutes for GitHub to process
- Check that the branch you selected has your files

### If assets don't load:
- Make sure all asset paths are relative (starting with `./` or `/`)
- Check browser console for 404 errors
- Verify all files are committed to the repository

### If the game doesn't work:
- Open browser DevTools (F12) and check the Console tab for errors
- Make sure all JavaScript modules are properly imported
- Test locally first before deploying

---

## For Your CV

Once deployed, you can add this to your CV:

**Project:** Brick Breaker Game  
**Live Demo:** [Your GitHub Pages URL]  
**Repository:** https://github.com/ahmedzaki147258/brick-breaker-js  
**Technologies:** HTML5, CSS3, JavaScript (ES6 Modules), Canvas API

---

## Need Help?

If you encounter any issues, check:
- GitHub Pages documentation: https://docs.github.com/en/pages
- Your repository's Pages settings
- Browser console for JavaScript errors





