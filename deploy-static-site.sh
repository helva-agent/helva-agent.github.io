#!/bin/bash

# Colors for better output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}Starting GitHub Pages deployment script...${NC}"

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo -e "${RED}Git is not installed. Please install git and try again.${NC}"
    exit 1
fi

# Make script executable
chmod +x deploy-static-site.sh

# Get username and repo name
echo -e "${YELLOW}Please enter your GitHub username:${NC}"
read username

echo -e "${YELLOW}Please enter the repository name (typically your-username.github.io):${NC}"
read repo_name

# Create a temporary directory
echo -e "${BLUE}Creating temporary directory...${NC}"
mkdir -p /tmp/gh-pages-deploy

# Copy all files from the static-site directory to the temp directory
echo -e "${BLUE}Copying files to temporary directory...${NC}"
cp -r * /tmp/gh-pages-deploy/

# Go to the temp directory
cd /tmp/gh-pages-deploy

# Initialize git repository
echo -e "${BLUE}Initializing git repository...${NC}"
git init

# Configure git
echo -e "${BLUE}Configuring git...${NC}"
git config user.name "${username}"
git config user.email "${username}@users.noreply.github.com"

# Add all files
echo -e "${BLUE}Adding files to git...${NC}"
git add .

# Commit
echo -e "${BLUE}Committing files...${NC}"
git commit -m "Deploy Helva website to GitHub Pages"

# Create branch (default is main for GitHub Pages)
echo -e "${BLUE}Creating branch...${NC}"
git branch -M main

# Add remote repository
echo -e "${BLUE}Adding remote repository...${NC}"
git remote add origin https://github.com/${username}/${repo_name}.git

# Push to github
echo -e "${BLUE}Pushing to GitHub...${NC}"
git push -f origin main

echo -e "${GREEN}Deployment complete! Your website should be available at https://${username}.github.io/${repo_name} shortly.${NC}"
echo -e "${YELLOW}Note: If you used your-username.github.io as the repository name, the site will be available at https://${username}.github.io${NC}"

# Clean up
echo -e "${BLUE}Cleaning up...${NC}"
cd -
rm -rf /tmp/gh-pages-deploy

echo -e "${GREEN}All done! 🎉${NC}"