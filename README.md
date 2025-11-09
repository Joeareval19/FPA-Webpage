# Vegas Consulting Partners - Landing Page

A sophisticated, finance-tech oriented landing page featuring black and gold theme with productivity-focused design elements.

## Features

### Design Elements
- **Black & Gold Theme**: Professional color scheme with gold accents (#d4af37)
- **Animated Finance Icons**: Three floating icons showcasing:
  - Revenue Growth (upward trend chart)
  - Cost Reduction (downward trend chart)
  - Productivity Increase (bar chart with checkmark)
- **Apple-Inspired Minimalism**: Clean, professional design with minimal copy
- **Smooth Animations**: Fade-in effects, parallax mouse interactions, floating elements

### Sections

1. **Hero Section**
   - Firm logo placeholder (VCP with restaurant icon)
   - Company name with gold glow effect
   - Clear mission statement
   - Interactive floating finance/tech icons
   - Gold CTA button
   - Scroll indicator

2. **Problems We Solve**
   - Four problem cards with gold gradient icons:
     - Inefficient Operations
     - Staff Management
     - Low Profit Margins
     - Customer Experience
   - Dark background with gold borders
   - Scroll-triggered animations

3. **Clientele Showcase**
   - Auto-playing carousel with 6 client logo placeholders
   - Manual navigation controls (prev/next)
   - Dot indicators
   - Responsive design (3 slides desktop, 2 tablet, 1 mobile)

### Technical Stack
- Pure HTML5, CSS3, JavaScript (no frameworks)
- Responsive design
- SVG icons and graphics
- CSS animations and transitions
- Intersection Observer API for scroll effects

## File Structure
```
C:\Dev\FPA Webpage\
├── index.html              # Main HTML structure
├── styles.css              # Black & gold styling
├── script.js               # Animations & interactions
├── README.md               # This file
└── assets/
    ├── logo-placeholder.svg    # Firm logo (VCP)
    └── icons/
        ├── operations.svg      # Operations icon
        ├── staff.svg           # Staff management icon
        ├── profit.svg          # Profit icon
        └── experience.svg      # Customer experience icon
```

## Running Locally

The site is currently running on:
```
http://localhost:8000
```

To start the server:
```bash
python -m http.server 8000
```

## Customization

### Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #0a0a0a;    /* Black */
    --gold: #d4af37;             /* Gold */
    --dark-gold: #b8960f;        /* Dark gold */
    --light-gold: #f4d03f;       /* Light gold */
}
```

### Replace Logo
Replace `assets/logo-placeholder.svg` with your actual logo file.

### Add Client Logos
Replace the placeholder divs in the carousel section with actual client logos.

### Update Content
Edit text in `index.html` for mission statement, problem descriptions, etc.

## Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance
- No external dependencies
- Optimized animations
- Lazy-loaded images
- Minimal JavaScript

---

**© 2024 Vegas Consulting Partners. Excellence in Restaurant Consulting.**
