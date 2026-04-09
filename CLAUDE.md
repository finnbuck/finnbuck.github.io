# Personal Website — CLAUDE.md

## Project Overview
A static HTML/CSS website hosted on GitHub Pages. Showcases art and technology projects in a scrolling single-page layout.

## Stack
- Pure HTML + CSS + minimal vanilla JavaScript (no frameworks, no build step)
- Hosted on GitHub Pages

## Layout
- Single scrolling page (`index.html`)
- Header: site title + intro text
- Projects listed below, one after another (infinite scroll feel)
- Desktop: narrow centered column (~750px) with a background image/texture filling the sides
- Mobile: full-width, mobile-first styling preferred

## Project Section Structure
Each project contains:
1. Project title (`<h2>`)
2. Primary hero image — rectangular, large, full column width
3. Explanatory text
4. Secondary gallery images — displayed as squares (cropped), click opens full image in a lightbox modal

Image counts vary per project. The structure must be flexible — some projects have 1 secondary image, some have many.

## File Structure
```
Personal-Website/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js        # lightbox only
└── images/            # to be populated later
    └── ...
```

## Adding New Projects
Copy the project `<article>` block template from the comment in `index.html` and fill in the title, images, and text. No JavaScript changes needed to add a project.

## Image Notes
- Hero images: rectangular, displayed at full column width
- Gallery thumbnails: cropped to square via CSS `object-fit: cover`, click reveals full image in lightbox
- Actual image files to be added later by user
