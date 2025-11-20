# Section Navigation Banner Guide

## Overview
The section navigation banner is a thin, sticky bar that sits below the main navbar, providing quick access to different sections of the current page. It features a gradient background and follows the navbar's scroll behavior.

---

## Visual Design

### Colors
- Gradient: `#fbf2e9` (cream) to `#f3bf2c` (golden yellow)
- Text: Dark zinc (`#18181b` / `text-zinc-900`)
- Hover: Lighter zinc (`text-zinc-600`)

### Layout
```
┌─────────────────────────────────────────────────┐
│ Page Title         Section 1  Section 2  etc... │
└─────────────────────────────────────────────────┘
```

**Left**: Page title in uppercase, bold
**Right**: 4 section links (hidden on mobile)

---

## Implementation

### 1. HTML Structure
```html
<!-- Place directly after </header> closing tag -->
<div id="sectionNav" class="fixed top-[72px] left-0 right-0 z-40 transition-all duration-500 ease-out border-b border-white/10"
     style="background: linear-gradient(90deg, #fbf2e9 0%, #f3bf2c 100%);">
    <div class="container mx-auto max-w-7xl px-6 py-3 flex justify-between items-center">
        <!-- Page Title -->
        <div class="text-zinc-900 font-bold text-sm uppercase tracking-wider">
            What We Do
        </div>

        <!-- Section Links -->
        <nav class="hidden md:flex gap-8 items-center">
            <a href="#overview" class="text-zinc-900 hover:text-zinc-600 transition-colors text-sm font-medium">Overview</a>
            <a href="#capabilities" class="text-zinc-900 hover:text-zinc-600 transition-colors text-sm font-medium">Capabilities</a>
            <a href="#services" class="text-zinc-900 hover:text-zinc-600 transition-colors text-sm font-medium">Services</a>
            <a href="#contact" class="text-zinc-900 hover:text-zinc-600 transition-colors text-sm font-medium">Contact</a>
        </nav>
    </div>
</div>
```

### 2. CSS Requirements
```css
/* Smooth scroll offset for anchor links */
.scroll-mt-32 {
    scroll-margin-top: 8rem;
}
```

### 3. Section IDs
Add IDs to your sections for navigation:
```html
<section id="overview" class="py-12 bg-dark scroll-mt-32">
    <!-- Content -->
</section>

<section id="capabilities" class="py-20 bg-dark scroll-mt-32">
    <!-- Content -->
</section>
```

**Important**: Always add the `scroll-mt-32` class to provide proper scroll offset!

### 4. Adjust Top Padding
Update the first section's top padding to account for the banner:
```html
<!-- Before: -->
<section class="pt-32 pb-8 bg-dark">

<!-- After: -->
<section class="pt-44 pb-8 bg-dark">
```

### 5. JavaScript
Add this script before `</body>`:
```javascript
<script>
    document.addEventListener('DOMContentLoaded', function() {
        let lastScrollTop = 0;
        const navbar = document.getElementById('navbar');
        const sectionNav = document.getElementById('sectionNav');
        let scrollTimeout;

        // Hide/show on scroll
        window.addEventListener('scroll', function() {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(function() {
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

                if (scrollTop > lastScrollTop && scrollTop > 100) {
                    // Scrolling down - hide navbar, move section nav to top
                    navbar.style.transform = 'translateY(-100%)';
                    sectionNav.style.top = '0';
                } else {
                    // Scrolling up - show navbar, move section nav below it
                    navbar.style.transform = 'translateY(0)';
                    sectionNav.style.top = '96px';
                }

                lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
            }, 10);
        }, false);

        // Smooth scroll for links
        const sectionLinks = document.querySelectorAll('#sectionNav a[href^="#"]');
        sectionLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    const offset = 150; // Account for navbar + banner
                    const targetPosition = targetSection.offsetTop - offset;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    });
</script>
```

---

## Key Features

### 1. Sticky Behavior
- Fixed position below navbar (`top-[96px]`)
- Z-index of 40 (navbar is 50)
- When navbar hides, banner moves to top of screen (`top: 0`)
- When navbar shows, banner returns below navbar (`top: 96px`)

### 2. Scroll Synchronization
- When scrolling down past 100px, navbar hides and banner moves to top of screen
- When scrolling up, navbar reappears and banner moves back below it
- Smooth transition (`transition-all duration-500`)

### 3. Smooth Scrolling
- Clicking section links smoothly scrolls to target
- Automatically accounts for fixed header height
- Proper offset prevents content from hiding under banner

### 4. Responsive Design
- Section links hidden on mobile (`hidden md:flex`)
- Page title always visible
- Full-width gradient background

---

## Customization

### Changing Colors
```html
<!-- Modify the inline style: -->
style="background: linear-gradient(90deg, #YOURCOLOR1 0%, #YOURCOLOR2 100%);"
```

### Adjusting Height
```html
<!-- Change py-3 to your desired padding: -->
<div class="... py-3 ...">  <!-- py-2 (smaller) or py-4 (larger) -->
```

### Different Number of Links
The banner works with 2-6 section links. Adjust the gap if needed:
```html
<nav class="hidden md:flex gap-8 items-center">  <!-- Change gap-8 to gap-6, gap-10, etc. -->
```

### Positioning Below Navbar
If your navbar has a different height, adjust `top-[96px]`:
```html
<!-- Calculate: navbar height in pixels -->
<div id="sectionNav" class="fixed top-[YOUR_NAVBAR_HEIGHT_px] ...">
```

---

## Common Section Names

### Generic Pages
- Overview
- Details
- Features
- Contact

### Service/Product Pages
- Overview
- Benefits
- Features
- Pricing

### About Pages
- Story
- Team
- Values
- Contact

### Documentation Pages
- Introduction
- Getting Started
- Examples
- Reference

---

## When to Use

✅ **Use section nav banner when:**
- Page has 3-5 distinct sections
- Users benefit from quick navigation
- Page content is lengthy
- Sections have clear boundaries

❌ **Don't use section nav banner when:**
- Page is short (fits on one screen)
- Only 1-2 sections exist
- Page flow is linear/story-like
- Mobile experience is priority

---

## Troubleshooting

### Banner doesn't hide with navbar
**Problem**: JavaScript not running or IDs mismatch
**Solution**: Verify `id="navbar"` and `id="sectionNav"` match in HTML and JS

### Scroll jumps too far
**Problem**: Offset calculation incorrect
**Solution**: Adjust the `offset` value in JavaScript (line with `const offset = 150;`)

### Links don't work
**Problem**: Section IDs missing or misspelled
**Solution**: Ensure all `href="#section"` values match actual `id="section"` on page

### Banner overlaps content
**Problem**: Top padding insufficient
**Solution**: Increase `pt-44` to `pt-48` or `pt-52` on first section

### Gradient looks wrong
**Problem**: Color values incorrect or order reversed
**Solution**: Check hex values and ensure lighter color comes first in gradient

---

## Example Pages Using This Feature

### What We Do (Overview Page)
```
Page Title: "What We Do"
Sections: Overview | Capabilities | Services | Contact
```

### About Us
```
Page Title: "About Us"
Sections: Story | Mission | Team | Contact
```

### Service Detail Page
```
Page Title: "Cloud Solutions"
Sections: Overview | Benefits | Capabilities | Contact
```

---

## Complete Checklist

When adding section nav banner to a new page:

- [ ] Add banner HTML after `</header>`
- [ ] Update page title in banner
- [ ] Customize 4 section links
- [ ] Add `scroll-mt-32` CSS class
- [ ] Add IDs to all sections
- [ ] Add `scroll-mt-32` class to sections
- [ ] Change first section padding from `pt-32` to `pt-44`
- [ ] Add JavaScript before `</body>`
- [ ] Test scroll behavior
- [ ] Test smooth scrolling links
- [ ] Verify mobile view (links hidden)
- [ ] Check all sections are reachable

---

## Best Practices

1. **Keep section names short** - One or two words max
2. **Be consistent** - Use similar names across similar pages
3. **Logical order** - Match the visual order of content
4. **Always include "Contact"** - Last link should drive action
5. **Test on mobile** - Ensure page title is readable
6. **Verify contrast** - Dark text must be legible on gradient
7. **Smooth transitions** - Don't change scroll behavior suddenly

---

## Related Documentation

- **BASE-TEMPLATE.html** - Includes this banner as optional feature
- **TEMPLATE-GUIDE.md** - General template documentation
- **OVERVIEW-PAGE-TEMPLATE.md** - Specific guide for overview pages
- **what-we-do.html** - Working example of section nav banner
