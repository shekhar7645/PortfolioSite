# GitHub Deployment Guide for Your Portfolio

## Files Ready for GitHub Deployment:

✓ **index.html** - Main portfolio page
✓ **style.css** - All styling and responsive design
✓ **script.js** - Interactive functionality
✓ **profile-image.jpg** - Your professional photo
✓ **README.md** - Project documentation
✓ **.gitignore** - Git ignore file

## Step-by-Step GitHub Deployment:

### 1. Create a New Repository on GitHub
- Go to https://github.com/shekhar7645
- Click "New repository" (green button)
- Repository name: `portfolio-website` or `shekhar-portfolio`
- Description: "Personal Portfolio Website - Shekhar Kumar Pandey"
- Make it **Public**
- ✓ Check "Add a README file" (we'll replace it)
- Click "Create repository"

### 2. Upload Your Files
**Option A: GitHub Web Interface (Easiest)**
- In your new repository, click "uploading an existing file"
- Drag and drop ALL these files:
  - index.html
  - style.css
  - script.js
  - profile-image.jpg
  - README.md
  - .gitignore
- Commit message: "Add portfolio website files"
- Click "Commit changes"

**Option B: Git Commands (If you have Git installed locally)**
```bash
git clone https://github.com/shekhar7645/your-repo-name.git
# Copy all files to the cloned folder
git add .
git commit -m "Add portfolio website"
git push origin main
```

### 3. Enable GitHub Pages
- Go to your repository settings
- Scroll down to "Pages" section
- Source: Select "Deploy from a branch"
- Branch: Select "main" 
- Folder: Select "/ (root)"
- Click "Save"

### 4. Your Website Will Be Live At:
```
https://shekhar7645.github.io/your-repo-name/
```

## Important Notes:
- It may take 5-10 minutes for GitHub Pages to deploy
- Make sure index.html is in the root directory
- Your portfolio is already mobile-responsive and ready to go!
- The contact form will work for display but won't send emails (you'd need a backend service for that)

## Future Updates:
- Edit files directly on GitHub or upload new versions
- Changes will automatically update your live website

Your portfolio includes:
✓ Professional design with your photo
✓ All sections (Home, About, Projects, Contact)
✓ Responsive mobile design
✓ Smooth animations and interactions