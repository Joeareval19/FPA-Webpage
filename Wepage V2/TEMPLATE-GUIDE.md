# VCP Website Template Guide

## Overview
This guide explains the base template structure for all VCP pages to ensure consistency across the website.

---

## Template Structure

### 1. **Top Navigation Area** (Section 1)
- **Purpose**: Breadcrumbs, back buttons, or secondary navigation
- **Classes**: `pt-32 pb-8 bg-dark`
- **Location**: Immediately after `<main>` tag
- **Usage**: Always include this section, even if empty, to maintain consistent spacing

**Examples:**
```html
<!-- Back Button -->
<a href="previous-page.html" class="inline-flex items-center text-yellow-primary hover:text-yellow-dark transition-colors">
    <svg>...</svg>
    Back to Previous Page
</a>

<!-- Breadcrumbs -->
<nav class="flex" aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-2">
        <li><a href="/">Home</a></li>
        <li>Current Page</li>
    </ol>
</nav>
```

---

### 2. **Hero Section** (Section 2)
- **Purpose**: Main page title and description
- **Classes**: `pb-20 bg-dark`
- **Max Width**: `max-w-4xl` for content container
- **Components**:
  - H1: `text-5xl md:text-7xl font-extrabold`
  - Description: `text-xl text-gray-300`

**Structure:**
```html
<section class="pb-20 bg-dark">
    <div class="container mx-auto max-w-7xl px-6">
        <div class="max-w-4xl">
            <h1 class="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white">
                Page Title
            </h1>
            <p class="text-xl text-gray-300 mb-12 leading-relaxed">
                Brief description
            </p>
        </div>
    </div>
</section>
```

---

### 3. **Main Content Area** (Section 3)
- **Purpose**: Primary page content
- **Classes**: `py-20 bg-dark`
- **Max Width**: `max-w-7xl` for full-width content
- **Grid Options**:
  - 2 columns: `md:grid-cols-2`
  - 3 columns: `lg:grid-cols-3`
  - 4 columns: `lg:grid-cols-4`

---

### 4. **Call to Action (Optional)** (Section 4)
- **Purpose**: Encourage user action
- **Classes**: `py-20 bg-dark`
- **Style**: Centered glassmorphic card with button

---

## Component Library

### Glassmorphic Card
```html
<div class="relative overflow-hidden rounded-2xl backdrop-blur-xl bg-white/[0.02] border border-white/[0.05] p-8 group hover:bg-white/[0.04] hover:border-white/[0.08] transition-all duration-500">
    <div class="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <h3 class="relative text-2xl font-bold mb-4 text-white/95 group-hover:text-white transition-colors">
        Title
    </h3>
    <p class="relative text-white/60 leading-relaxed">
        Content
    </p>
</div>
```

### Primary Button
```html
<a href="#" class="inline-block bg-yellow-primary text-zinc-900 font-semibold px-8 py-4 rounded-full hover:bg-yellow-dark transition-colors text-lg">
    Button Text
</a>
```

### Back Button / Link
```html
<a href="#" class="inline-flex items-center text-yellow-primary hover:text-yellow-dark transition-colors">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 mr-2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
    </svg>
    Link Text
</a>
```

---

## Spacing Standards

### Vertical Spacing
- **Top of page** (after header): `pt-32` (clears fixed navbar)
- **Between sections**: `py-20`
- **Top navigation to hero**: `pb-8` on top nav, no padding-top on hero
- **Last section**: `py-20` (consistent with others)

### Container Widths
- **Full width content**: `max-w-7xl`
- **Text-heavy content**: `max-w-4xl`
- **Narrow content**: `max-w-2xl`

### Grid Gaps
- **Cards/Items**: `gap-6`
- **Footer columns**: `gap-12`

---

## Color Palette

### CSS Variables
```css
--primary-yellow: #fdc435;
--yellow-dark: #e5b12f;
--yellow-light: #ffd666;
--bg-dark: #0a0a0a;
```

### Common Color Classes
- **Headings**: `text-white`
- **Body text**: `text-gray-300` or `text-white/70`
- **Subtext**: `text-white/60`
- **Borders**: `border-white/[0.05]`
- **Backgrounds**: `bg-white/[0.02]`
- **Hover backgrounds**: `hover:bg-white/[0.04]`
- **Links**: `text-yellow-primary hover:text-yellow-dark`

---

## Typography Scale

### Headings
- **H1**: `text-5xl md:text-7xl font-extrabold`
- **H2**: `text-4xl font-bold`
- **H3**: `text-2xl font-bold`
- **H4**: `text-xl font-semibold`

### Body Text
- **Large**: `text-xl`
- **Regular**: `text-base` (default, no class needed)
- **Small**: `text-sm`

---

## Responsive Design

### Breakpoints (Tailwind Defaults)
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px

### Common Patterns
```html
<!-- Hide on mobile, show on desktop -->
<div class="hidden md:flex">...</div>

<!-- Show on mobile, hide on desktop -->
<div class="md:hidden">...</div>

<!-- Responsive grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">...</div>

<!-- Responsive text size -->
<h1 class="text-5xl md:text-7xl">...</h1>
```

---

## File Naming Conventions

### Pages
- Lowercase with hyphens: `what-we-do.html`, `contact-us.html`
- Service pages in `/services/` folder: `services/cloud.html`

### Assets
- Logo folder: `Assets/Logo/`
- Planet images: `assets/Planets/`

---

## Best Practices

1. **Always use the template structure** - Start with BASE-TEMPLATE.html
2. **Maintain consistent spacing** - Use the standard `py-20` between sections
3. **Use glassmorphism** - Follow the established card style
4. **Include back navigation** - Every sub-page should have a way back
5. **Test responsive design** - Check mobile, tablet, and desktop views
6. **Keep content readable** - Use `max-w-4xl` for text-heavy sections
7. **Consistent hover states** - Use group hover patterns for cards
8. **Semantic HTML** - Use proper heading hierarchy (h1 → h2 → h3)

---

## Quick Checklist for New Pages

- [ ] Copy BASE-TEMPLATE.html
- [ ] Update page title in `<title>` tag
- [ ] Add back button or breadcrumbs in Section 1
- [ ] Write page title and description in Section 2
- [ ] Add main content in Section 3
- [ ] Optional: Add CTA in Section 4
- [ ] Update navigation links if needed
- [ ] Test on mobile and desktop
- [ ] Check all links work correctly

---

## Common Modifications

### Adding a New Section
```html
<section class="py-20 bg-dark">
    <div class="container mx-auto max-w-7xl px-6">
        <!-- Content here -->
    </div>
</section>
```

### Creating a Two-Column Layout
```html
<div class="grid grid-cols-1 md:grid-cols-2 gap-12">
    <div>Left column</div>
    <div>Right column</div>
</div>
```

### Adding an Image
```html
<img src="path/to/image.jpg" alt="Description" class="w-full h-auto rounded-2xl">
```

---

## Support

For questions or issues with the template, refer to:
- BASE-TEMPLATE.html (the actual template file)
- Existing pages (what-we-do.html, service pages) for reference
- Tailwind CSS documentation: https://tailwindcss.com/docs
