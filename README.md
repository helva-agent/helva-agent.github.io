# Helva Website - Static Deployment

This folder contains a simplified static version of the Helva website, optimized for GitHub Pages deployment.

## Deployment Instructions

### Option 1: Using the Deployment Script

1. Navigate to the `static-site` directory
2. Make the script executable: `chmod +x deploy-static-site.sh`
3. Run the script: `./deploy-static-site.sh`
4. Follow the prompts to enter your GitHub username and repository name

### Option 2: Manual Deployment

1. Create a new GitHub repository (recommended name: `username.github.io`)
2. Enable GitHub Pages in the repository settings
3. Copy all the files from this `static-site` directory to your repository
4. Push the changes to GitHub
5. GitHub Pages will automatically deploy your site

## Repository Structure

```
static-site/
├── assets/                  # Contains all the compiled JS and CSS files
├── attached_assets/         # Contains images and other media
├── index.html               # Main HTML file
├── 404.html                 # Handles client-side routing for SPA on GitHub Pages
├── deploy-static-site.sh    # Deployment script
└── README.md                # This file
```

## Troubleshooting

- If your site doesn't appear, check that GitHub Pages is enabled in your repository settings
- Ensure all file paths in the HTML files use relative paths (`./assets/...` instead of `/assets/...`)
- For repository named `username.github.io`, your site will be available at `https://username.github.io`
- For other repository names, your site will be available at `https://username.github.io/repository-name`