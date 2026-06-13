# Visual Design Specifications for Gum Swamp Software Website

**Document Version:** 1.0  
**Created:** 2026-04-14  
**Designer:** c1486860-8dae-4e74-b0c4-6aaef277b5d4  
**Project:** Company Website (GUM-18)

---

## Executive Summary

This document provides comprehensive visual design specifications for the Gum Swamp Software company website. The design establishes a cohesive visual identity that communicates the company's unique brand while maintaining professional quality and technical excellence.

---

## 1. Brand Identity

### 1.1 Brand Name
**Gum Swamp Software**

### 1.2 Brand Positioning
An independent software company based in the coastal lowlands of South Carolina, building open-source tools and generating sustainable revenue through software products, donations, and licensing.

### 1.3 Brand Personality
- **Professional but approachable** - Technical expertise without pretension
- **Dark mode friendly** - Optimized for extended coding sessions
- **Responsive** - Works seamlessly across all device sizes

---

## 2. Color Palette

### 2.1 Primary Colors

| Color Name | Hex | Usage |
|------------|-----|-------|
| Swamp Green | `#2d5a40` | Primary brand color, buttons, accents |
| Deep Swamp | `#1a3526` | Dark backgrounds, headers |
| Muddy Brown | `#5c4033` | Secondary elements, borders |
| Fog Light | `#e8dcc5` | Light text on dark backgrounds |

### 2.2 Accent Colors

| Color Name | Hex | Usage |
|------------|-----|-------|
| Swamp Glow | `#4ade80` | Highlights, links, interactive elements |
| Midnight | `#0f172a` | Primary dark background |
| Slate | `#334155` | Secondary backgrounds |

### 2.3 Light Mode Palette

| Element | Color |
|---------|-------|
| Background | `#f8f5f0` (Parchment) |
| Surface | `#ffffff` |
| Text Primary | `#1e293b` |
| Text Secondary | `#64748b` |
| Link | `#2d5a40` |
| Border | `#d6d3d1` |

### 2.4 Dark Mode Palette (Default)

| Element | Color |
|---------|-------|
| Background | `#0f172a` (Midnight) |
| Surface | `#1e293b` |
| Text Primary | `#f1f5f9` |
| Text Secondary | `#94a3b8` |
| Link | `#4ade80` (Swamp Glow) |
| Border | `#334155` |

---

## 3. Typography

### 3.1 Font Family

```
System Font Stack:
- Inter (fallback to system sans-serif)
- -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu
```

### 3.2 Type Scale

| Level | Font Size | Line Height | Usage |
|-------|-----------|-------------|-------|
| Display Large | 3rem (48px) | 1.1 | Hero headlines |
| Display Medium | 2.25rem (36px) | 1.2 | Section headers |
| Display Small | 1.75rem (28px) | 1.3 | Subsection headers |
| Title Large | 1.5rem (24px) | 1.4 | Card titles |
| Title Medium | 1.25rem (20px) | 1.5 | Sidebar headers |
| Body Large | 1.125rem (18px) | 1.6 | Lead paragraphs |
| Body Default | 1rem (16px) | 1.6 | Body text |
| Body Small | 0.875rem (14px) | 1.6 | Captions, metadata |
| Caption Small | 0.75rem (12px) | 1.6 | Footer links |

### 3.3 Font Weights

| Weight | Usage |
|--------|-------|
| 400 | Body text, regular elements |
| 500 | Emphasis, navigation |
| 600 | Headings |
| 700 | Primary headings |
| 800 | Display headings |

### 3.4 Text Spacing

- **Paragraph margin:** 1.5rem bottom
- **Heading margin:** 2rem top, 1rem bottom
- **Line spacing:** 1.6x font size

---

## 4. Component Specifications

### 4.1 Header/Navigation

```
┌─────────────────────────────────────────────────────────────┐
│ [Logo]  Gum Swamp Software                                [ ] │
│           - About                                         [X] │
│           - Projects                                      [ ] │
│           - Support                                       [ ] │
└─────────────────────────────────────────────────────────────┘
```

**Height:** 72px  
**Background:** `#1a3526` (Deep Swamp) with 95% opacity  
**Sticky:** Yes (with fade effect on scroll)  

**Navigation Items:**
- About
- Projects
- Support

### 4.2 Hero Section

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│         [Main Site Banner: Swamp at night with shack]       │
│                                                             │
│        GUM SWAMP SOFTWARE                                   │
│        Building Open Source Tools                           │
│        from the Coastal Lowlands                            │
│                                                             │
│        [Learn More]  [View Projects]                        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Height:** 80vh minimum  
**Background:** Full-width banner image with overlay gradient  
**Overlay Gradient:** Linear, top to bottom: `rgba(26, 53, 38, 0.9)` to `rgba(15, 23, 42, 0.7)`

### 4.3 Button Styles

| State | Background | Text | Border |
|-------|-----------|------|--------|
| Primary | `#2d5a40` | `#f8f5f0` | None |
| Primary Hover | `#3b7a55` | `#f8f5f0` | None |
| Secondary | Transparent | `#4ade80` | `1px solid #4ade80` |
| Secondary Hover | `rgba(74, 222, 128, 0.1)` | `#66f294` | `1px solid #66f294` |
| Outline | Transparent | `#f1f5f9` | `1px solid #f1f5f9` |

### 4.4 Project Cards

```
┌─────────────────────────────────────┐
│ [Project Icon]                      │
│                                     │
│ Llamaste                            │
│ Next-Generation ML Framework        │
│                                     │
│ Not Ready for Release               │
│ [GitHub] [Learn More]               │
└─────────────────────────────────────┘
```

**Card Dimensions:** 300px × 380px  
**Border Radius:** 12px  
**Hover Effect:** Scale 1.05, shadow `0 10px 40px rgba(0,0,0,0.3)`

### 4.5 Footer

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  Gum Swamp Software                                         │
│  Building open source tools from South Carolina             │
│                                                             │
│  Projects:  Llamaste | Lazarus                                   │
│  Resources: GitHub | Documentation | Support                │
│                                                             │
│  © 2026 Gum Swamp Software. All rights reserved.            │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Background:** `#1a3526`  
**Text Color:** `#94a3b8`

---

## 5. Layout Specifications

### 5.1 Grid System

- **Columns:** 12
- **Gutter:** 2rem
- **Container Max Width:** 1280px
- **Container Padding:** 2rem

### 5.2 Section Spacing

| Section Type | Top Margin | Bottom Margin |
|--------------|------------|---------------|
| Hero | 0 | 4rem |
| Content | 6rem | 4rem |
| Content (nested) | 4rem | 3rem |
| Footer | 6rem | 0 |

### 5.3 Responsive Breakpoints

| Breakpoint | Width | Layout Changes |
|------------|-------|----------------|
| Mobile | < 768px | Single column, hamburger menu |
| Tablet | 768px - 1024px | 2-column grid, expanded nav |
| Desktop | > 1024px | Full layout, sticky header |

---

## 6. Visual Assets

### 6.1 Main Site Banner Specification

**Dimensions:** 1920px × 800px (minimum)  
**Format:** PNG with transparency or JPG  
**Style Description:**

```
Scene: Swamp at night
- Dark, misty swamp water in foreground
- Wooden shack on stilts centered in composition
- Green light glowing from within the shack (window/door)
- Small satellite dish mounted on roof of shack
- Cypress trees with Spanish moss in background
- Star-filled sky above
- Subtle fog/mist layer throughout
```

**Color Palette for Banner:**
- Water: `#0f172a` to `#1e293b` gradient
- Shack: `#5c4033` (Muddy Brown) wood texture
- Green Light: `#4ade80` with bloom effect
- Sky: `#020617` with white star dots

### 6.2 Lazarus Page Banner Specification

**Dimensions:** 1920px × 600px (minimum)  
**Format:** PNG with transparency or JPG  
**Style Description:**

```
Scene: Swamp graveyard at night
- Foggy swamp graveyard setting
- Various tombstones scattered across scene
- Names on tombstones are popular Python packages:
  * numpy
  * pandas
  * matplotlib
  * requests
  * django
  * flask
  * tensorflow
  * pytorch
- Zombies (abstract silhouettes) rising from graves
- Green atmospheric lighting
- Dark, moody color scheme
```

**Package Tombstone Examples:**
```
    Numpy       Pandas     Matplotlib
  ┌─────┐     ┌──────┐    ┌─────────┐
  │     │     │      │    │         │
  │     │     │      │    │         │
  │     │     │      │    │         │
  └─────┘     └──────┘    └─────────┘
```

### 6.3 Logo Specifications

**Primary Logo:** Text-based "Gum Swamp Software"  
**Icon Element:** Shack icon with green glow  
**Minimum Size:** 32px × 32px  
**Transparent Background:** Required  

---

## 7. Component Library

### 7.1 Color Utility Classes

```css
/* Primary Colors */
.gss-green { color: #2d5a40; }
.gss-dark-green { color: #1a3526; }
.gss-muddy { color: #5c4033; }
.gss-fog { color: #e8dcc5; }

/* Accent Colors */
.gss-glow { color: #4ade80; }
.gss-midnight { color: #0f172a; }
.gss-slate { color: #334155; }

/* Background Utilities */
.bg-green { background-color: #2d5a40; }
.bg-dark { background-color: #1a3526; }
.bg-midnight { background-color: #0f172a; }
```

### 7.2 Typography Utility Classes

```css
/* Headings */
.h1 { font-size: 3rem; line-height: 1.1; font-weight: 700; }
.h2 { font-size: 2.25rem; line-height: 1.2; font-weight: 600; }
.h3 { font-size: 1.75rem; line-height: 1.3; font-weight: 600; }

/* Body Text */
.body-lg { font-size: 1.125rem; line-height: 1.6; }
.body-default { font-size: 1rem; line-height: 1.6; }
.body-sm { font-size: 0.875rem; line-height: 1.6; }

/* Text Utilities */
.text-light { color: #f1f5f9; }
.text-muted { color: #94a3b8; }
```

### 7.3 Spacing Utility Classes

```css
/* Padding */
.p-1 { padding: 1rem; }
.p-2 { padding: 2rem; }
.p-3 { padding: 3rem; }
.py-2 { padding-top: 2rem; padding-bottom: 2rem; }
.px-4 { padding-left: 4rem; padding-right: 4rem; }

/* Margin */
.m-1 { margin: 1rem; }
.m-2 { margin: 2rem; }
.mt-4 { margin-top: 4rem; }
.mb-6 { margin-bottom: 6rem; }
```

---

## 8. Implementation Guidelines

### 8.1 Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern CSS with Flexbox/Grid
- **Vanilla JavaScript** - No framework dependencies
- **Optional:** Tailwind CSS for rapid development

### 8.2 File Structure

```
website/
├── index.html              # Main entry point
├── llamaste/               # Llamaste landing page
│   └── index.html
├── Lazarus/                # Lazarus landing page
│   └── index.html
├── css/
│   ├── styles.css          # Main stylesheet
│   ├── components.css      # Component styles
│   └── utilities.css       # Utility classes
├── js/
│   ├── main.js             # Core functionality
│   └── nav.js              # Navigation logic
└── assets/
    ├── images/
    │   ├── banner-main.png
    │   ├── banner-lazarus.png
    │   └── logo.svg
    └── icons/
        └── github.svg
```

### 8.3 Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari, Chrome Mobile

---

## 9. Mockup References

### 9.1 Main Site Structure

```
+--------------------------------------------------+
| HEADER (72px)                                    |
+--------------------------------------------------+
| HERO SECTION (80vh min)                          |
| - Main Banner Image                              |
| - Company Name & Tagline                         |
| - CTA Buttons                                    |
+--------------------------------------------------+
| ABOUT SECTION                                    |
| - Mission Statement                              |
| - Company Background                             |
| - Team Introduction                              |
+--------------------------------------------------+
| PROJECTS SECTION                                 |
| - Llamaste Card                                  |
| - Lazarus Card                                   |
| - OpenClaw Trader Card                           |
+--------------------------------------------------+
| DONATION SECTION                                 |
| - Support Options                                |
| - GitHub Sponsors                                |
| - Open Collective                                |
+--------------------------------------------------+
| FOOTER                                           |
| - Company Info                                   |
| - Project Links                                  |
| - Social Links                                   |
+--------------------------------------------------+
```

### 9.2 Responsive Behavior

**Mobile (< 768px):**
- Single column layout
- Hamburger menu icon
- Stacked buttons
- Reduced font sizes (0.875x)

**Tablet (768px - 1024px):**
- 2-column grid for projects
- Expanded navigation
- Medium font sizes (1x)

**Desktop (> 1024px):**
- Full 3-column layout
- Sticky header
- Maximum content width: 1280px

---

## 10. Design Principles

### 10.1 Consistency
- Use established color palette consistently
- Maintain consistent spacing throughout
- Reuse component styles

### 10.2 Accessibility
- Minimum contrast ratio: 4.5:1 for text
- Keyboard navigation support
- Semantic HTML structure

### 10.3 Performance
- Optimize images (WebP format when possible)
- Minify CSS/JS
- Use system fonts where available

### 10.4 Responsiveness
- Mobile-first approach
- Test on multiple devices
- Graceful degradation

---

## 11. Implementation Status

The website has been implemented per these visual design specifications by WebsitePM (514d3fda-362d-41a5-9ded-76822d0e3bc5).

**Completed:**
- Visual design specifications created
- Frontend implementation complete
- OpenClaw Trader removed per board guidance

**Next Steps:**
1. **Review** - Board review of implementation
2. **Testing** - Cross-browser and device testing
3. **Launch** - Deploy to hosting platform

---

## Appendix A: Asset Checklist

- [ ] Main site banner (1920px × 800px)
- [ ] Lazarus page banner (1920px × 600px)
- [ ] Logo SVG (transparent background)
- [ ] Favicon (32px × 32px)
- [ ] GitHub icon SVG
- [ ] Social media preview images

---

## Appendix B: Color Palette Files

### Figma Color Palette (for reference)

```
Primary Colors:
- Swamp Green: #2d5a40
- Deep Swamp: #1a3526
- Muddy Brown: #5c4033
- Fog Light: #e8dcc5

Accent Colors:
- Swamp Glow: #4ade80
- Midnight: #0f172a
- Slate: #334155

Light Mode:
- Background: #f8f5f0
- Surface: #ffffff
- Text Primary: #1e293b
- Text Secondary: #64748b
- Link: #2d5a40
- Border: #d6d3d1

Dark Mode:
- Background: #0f172a
- Surface: #1e293b
- Text Primary: #f1f5f9
- Text Secondary: #94a3b8
- Link: #4ade80
- Border: #334155
```

---

*End of Document*
