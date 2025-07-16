# Thesis Landing Page

A Next.js landing page showcasing digital image animation research using optical flow and CIP advection methods.

## Features

- Video comparisons showing original vs animated results
- Responsive design with Tailwind CSS
- Static export for GitHub Pages deployment

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Steps:

1. **Enable GitHub Pages** in your repository settings:
   - Go to Settings → Pages
   - Source: "GitHub Actions"

2. **Push your code** to the `main` branch - the GitHub Action will automatically build and deploy

3. **Your site will be available at**: `https://[your-username].github.io/thesis-landing/`

### Manual Deployment:

If you prefer manual deployment:

```bash
# Build the project
npm run build

# The static files will be in the `dist` folder
# Upload the contents of `dist` to your GitHub Pages branch
```

## Configuration

The project uses the following Next.js configuration for GitHub Pages:

- `output: "export"` - Creates static files
- `basePath: "/thesis-landing"` - Matches repository name
- `trailingSlash: true` - Required for GitHub Pages routing
- `distDir: "dist"` - Custom output directory

## Video Files

Videos are stored in the `public/` directory and referenced with absolute paths:
- `/test-1/` - First test videos
- `/test-2/` - Second test videos  
- `/test-3/` - Third test videos
- `/test-4/` - Fourth test videos

Make sure all video files are committed to the repository for them to be available on GitHub Pages.
