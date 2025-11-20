# Overview Page Template Guide

## Purpose
This template is for pages that present multiple options, services, or items in a directory/catalog format. The "What We Do" page is the primary example of this template.

---

## Template Structure

### Section Breakdown

```
1. TOP NAVIGATION AREA (pt-44 pb-8)
   ↓ Back button or breadcrumbs

2. HERO SECTION (pb-12)
   ↓ Page title and brief description

3. OVERVIEW/INTRODUCTION (py-12)
   ↓ Detailed explanation (max-w-4xl)

4. MAIN CONTENT GRID (py-20)
   ↓ Section heading + grid of cards/items

5. CALL TO ACTION (py-20)
   ↓ Encourage next steps
```

---

## Detailed Section Guide

### 1. Top Navigation Area
```html
<section class="pt-44 pb-8 bg-dark">
    <div class="container mx-auto max-w-7xl px-6">
        <a href="previous-page.html" class="inline-flex items-center text-yellow-primary hover:text-yellow-dark transition-colors">
            <svg>...</svg>
            Back to [Previous Page]
        </a>
    </div>
</section>
```

**Purpose**: Navigation aid
**Spacing**: `pt-44` (clears navbar + section nav banner), `pb-8` (space before hero)
**Note**: Use `pt-32` if not using section nav banner

---

### 2. Hero Section
```html
<section class="pb-12 bg-dark">
    <div class="container mx-auto max-w-7xl px-6">
        <div class="max-w-4xl">
            <h1 class="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white">
                Page Title
            </h1>
            <p class="text-xl text-white/70 mb-8 leading-relaxed">
                Brief one-sentence description of what this page offers.
            </p>
        </div>
    </div>
</section>
```

**Purpose**: Main page title and quick summary
**Spacing**: `pb-12` (moderate space to overview)
**Content Width**: `max-w-4xl` for readability

---

### 3. Overview/Introduction Section
```html
<section class="py-12 bg-dark">
    <div class="container mx-auto max-w-4xl px-6">
        <div class="space-y-6 text-white/70 text-lg leading-relaxed">
            <p>
                First paragraph - explain the purpose and value proposition.
            </p>
            <p>
                Second paragraph - provide additional context or benefits.
            </p>
        </div>
    </div>
</section>
```

**Purpose**: Detailed context before showing options
**Spacing**: `py-12` (moderate vertical spacing)
**Content Width**: `max-w-4xl` for text readability
**Typography**:
- Text size: `text-lg`
- Line height: `leading-relaxed`
- Color: `text-white/70`
- Paragraph spacing: `space-y-6`

---

### 4. Main Content Grid
```html
<section class="py-20 bg-dark">
    <div class="container mx-auto max-w-7xl px-6">
        <!-- Section Heading -->
        <div class="mb-16">
            <h2 class="text-4xl font-bold mb-4 text-white">Section Title</h2>
            <p class="text-white/60 text-lg max-w-3xl">
                Brief description of what's displayed below.
            </p>
        </div>

        <!-- Grid of Items -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            <!-- Card Item (Clickable) -->
            <a href="link-to-page.html" class="group block">
                <div class="relative h-full overflow-hidden rounded-2xl backdrop-blur-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/[0.08] transition-all duration-500 p-8">
                    <div class="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <h3 class="relative text-2xl font-bold mb-3 text-white/95 group-hover:text-white transition-colors">
                        Item Title
                    </h3>
                    <p class="relative text-white/60 text-sm leading-relaxed">
                        Brief description of this item.
                    </p>
                </div>
            </a>

            <!-- Repeat for all items -->

        </div>
    </div>
</section>
```

**Purpose**: Display all options in an organized grid
**Spacing**: `py-20` (standard section spacing)
**Content Width**: `max-w-7xl` (full width for grid)
**Grid Configuration**:
- Mobile: 1 column (`grid-cols-1`)
- Tablet: 2 columns (`md:grid-cols-2`)
- Desktop: 3 columns (`lg:grid-cols-3`)
- Gap: `gap-6`

**Card Styling**:
- Glassmorphism: `backdrop-blur-xl bg-white/[0.02]`
- Border: `border-white/[0.05]`
- Hover: `hover:bg-white/[0.04] hover:border-white/[0.08]`
- Transition: `transition-all duration-500`
- Padding: `p-8`

---

### 5. Call to Action Section
```html
<section class="py-20 bg-dark">
    <div class="container mx-auto max-w-4xl px-6">
        <div class="relative overflow-hidden rounded-3xl backdrop-blur-xl bg-white/[0.02] border border-white/[0.05] p-12 text-center">
            <div class="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent"></div>
            <h3 class="relative text-3xl font-bold mb-4 text-white">CTA Heading</h3>
            <p class="relative text-white/70 mb-8 max-w-2xl mx-auto">
                Compelling description that encourages action.
            </p>
            <a href="contact.html" class="relative inline-block bg-yellow-primary text-zinc-900 font-semibold px-8 py-4 rounded-full hover:bg-yellow-dark transition-colors text-lg">
                Button Text
            </a>
        </div>
    </div>
</section>
```

**Purpose**: Encourage visitor to take next step
**Spacing**: `py-20` (standard section spacing)
**Style**: Centered content in glassmorphic card
**Button**: Yellow primary color with dark text

---

## When to Use This Template

Use this overview page template when you need to:
- **Display a catalog/directory** of related items
- **Organize multiple options** for users to choose from
- **Create a hub page** that links to detail pages
- **Show service offerings**, product categories, or feature lists

**Examples**:
- What We Do page (services overview)
- Product catalog pages
- Resource directories
- Feature showcases
- Portfolio galleries

---

## Customization Options

### Grid Layout Variations

**2 Columns:**
```html
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
```

**4 Columns:**
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
```

**Auto-fit (responsive):**
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
```

### Card Variations

**With Icon:**
```html
<div class="relative h-full ... p-8">
    <div class="w-12 h-1 bg-yellow-primary mb-6"></div>
    <h3 class="...">Title</h3>
    <p class="...">Description</p>
</div>
```

**With Arrow:**
```html
<div class="relative h-full ... p-8">
    <h3 class="flex items-center justify-between ...">
        <span>Title</span>
        <svg class="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity">
            <!-- Arrow icon -->
        </svg>
    </h3>
    <p class="...">Description</p>
</div>
```

---

## Content Guidelines

### Hero Section
- **H1**: Keep it short and descriptive (2-5 words)
- **Description**: One sentence that explains the page's purpose
- **Goal**: Get visitors oriented quickly

### Overview Section
- **Length**: 2-3 paragraphs
- **Tone**: Professional and informative
- **Content**: Explain value proposition and what to expect

### Grid Items
- **Title**: Clear and concise (1-4 words)
- **Description**: One short sentence (8-15 words)
- **Consistency**: Keep all descriptions similar in length

### CTA Section
- **Heading**: Action-oriented question or statement
- **Description**: 1-2 sentences explaining the benefit
- **Button**: Clear action verb (Get Started, Contact Us, Learn More)

---

## Spacing Reference

| Section | Top Padding | Bottom Padding |
|---------|------------|----------------|
| Top Nav | `pt-44` (with section nav) or `pt-32` (without) | `pb-8` |
| Hero | none | `pb-12` |
| Overview | `py-12` | `py-12` |
| Grid | `py-20` | `py-20` |
| CTA | `py-20` | `py-20` |

---

## Complete Example

See `what-we-do.html` for a complete working example of this template in action.

### File Structure:
```
what-we-do.html (overview page)
├── services/
│   ├── cloud.html (detail page)
│   ├── cybersecurity.html (detail page)
│   └── ... (more detail pages)
```

---

## Checklist for New Overview Pages

- [ ] Copy structure from what-we-do.html
- [ ] Update page title in `<title>` tag
- [ ] Update back button link and text
- [ ] Write compelling hero title and description
- [ ] Add 2-3 paragraphs in overview section
- [ ] Create all grid item cards with links
- [ ] Customize CTA section heading and description
- [ ] Test all links work correctly
- [ ] Verify responsive layout on mobile
- [ ] Check glassmorphism effects are working
- [ ] Ensure consistent card heights in grid

---

## Tips for Success

1. **Maintain visual consistency** - All cards should look similar
2. **Keep descriptions brief** - Users should scan quickly
3. **Use clear hierarchy** - H1 → H2 → H3 progression
4. **Test hover states** - Ensure interactive feedback works
5. **Optimize for scanning** - Users often browse, not read
6. **Link logically** - Each card should lead somewhere relevant
7. **Balance content** - Don't overwhelm with too many options

---

## Related Templates

- **BASE-TEMPLATE.html** - General page structure
- **Service Detail Pages** - For individual service pages (services/*.html)
- **TEMPLATE-GUIDE.md** - Complete template documentation
