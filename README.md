# Next.js Static Site

This project includes a simple Next.js setup to generate a static website with the dashboard template.

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

This installs Next.js 15 and the SVGR webpack loader for SVG handling.

### 2. Run Development Server

```bash
npm run next:dev
```

Open [http://localhost:3000](http://localhost:3000) to see the dashboard.

### 3. Build Static Site

To generate a static export:

```bash
npm run next:build
```

This will create an `out/` directory with the static files that can be deployed to any static hosting service.

## Project Structure

### Next.js Files

- `pages/index.tsx` - Main dashboard page with the same content as `dashboard.stories.tsx`
- `pages/_app.tsx` - Next.js app wrapper that imports all global CSS (tokens)
- `next.config.js` - Next.js configuration for static export
- `tsconfig.next.json` - TypeScript configuration for Next.js

### Components & Styles

The dashboard uses all the existing components from `src/components/`:
- Header with Logo, Menubar, and Avatar
- Layout wrapper
- Tabs for navigation
- Table for data display
- Badge for status indicators

All components use CSS modules (`*.module.css`) and share design tokens from `src/tokens/`:
- `colors.css` - Color system
- `typography.css` - Typography tokens
- `space.css` - Spacing system
- `radii.css` - Border radius tokens
- `components.css` - Component-specific CSS variables

### Data

The dashboard loads data from JSON files in the `data/` directory:
- `list-of-pages.data.json` - Table data
- `menubar.data.json` - Menu structure

## Key Configuration

### Static Export

The site is configured for static export in `next.config.js`:
- `output: 'export'` - Enables static HTML export
- `distDir: 'out'` - Output directory
- `images: { unoptimized: true }` - Disables image optimization for static export

### CSS Modules

All component styles use CSS modules which are automatically scoped by Next.js. Global CSS variables are imported in `_app.tsx` to ensure they're available throughout the app.

### SVG Handling

SVGs are handled via `@svgr/webpack` configured in `next.config.js`, allowing them to be imported as React components.

## Deployment

The generated `out/` directory contains a fully static site that can be deployed to:

### Vercel (Recommended)
```bash
# Deploy via Vercel CLI
npx vercel --prod
```

### Netlify
```bash
# Deploy via Netlify CLI
npx netlify deploy --prod --dir=out
```

### GitHub Pages
1. Push the `out/` directory contents to a `gh-pages` branch
2. Enable GitHub Pages in repository settings

### Any Static Hosting
Simply upload the contents of the `out/` directory to your static hosting service (S3, Firebase Hosting, etc.).

## Notes

- The site uses React 19 and Next.js 15
- All components are from the existing design system
- No changes were made to the original component library
- Global CSS imports are centralized in `_app.tsx` per Next.js requirements

