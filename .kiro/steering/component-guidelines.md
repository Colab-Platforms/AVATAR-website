---
inclusion: auto
---

# Ed-Tech Landing Page Component Guidelines

## Styling Approach

- **Always use global CSS variables and utility classes** defined in `app/globals.css`
- Use Tailwind CSS classes for layout and spacing
- Reference CSS variables for colors, spacing, shadows, and typography
- Apply custom utility classes from globals.css (e.g., `.btn`, `.card`, `.heading-1`)

## Component Structure Pattern

All components should follow this structure:

```tsx
"use client";

import { motion } from "framer-motion";
import { IconName } from "lucide-react";

export default function ComponentName() {
  return (
    <section id="section-id" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Component content */}
      </div>
    </section>
  );
}
```

## Key Patterns

1. **Section Layout**
   - Use `<section>` with unique `id` for navigation
   - Standard padding: `py-20`
   - Container: `container mx-auto px-6`

2. **Animations**
   - Use `framer-motion` for animations
   - Common pattern: `initial={{ opacity: 0, y: 30 }}` → `animate={{ opacity: 1, y: 0 }}`
   - Use `whileInView` with `viewport={{ once: true }}` for scroll animations
   - Stagger animations with `delay: index * 0.1`

3. **Typography**
   - Headings: Use utility classes like `text-4xl md:text-5xl font-extrabold text-gray-900`
   - Body text: `text-gray-600 leading-relaxed`
   - Small text: `text-sm` or `text-xs`

4. **Colors**
   - Primary: Emerald shades (`emerald-500`, `emerald-600`)
   - Accent: Indigo, purple, orange for variety
   - Text: Gray scale (`gray-900` for headings, `gray-600` for body)
   - Backgrounds: `bg-white`, `bg-gray-50`, or custom like `#e8f5f0`

5. **Cards**
   - Rounded corners: `rounded-2xl` or `rounded-3xl`
   - Padding: `p-8` or `px-4 py-3` for smaller cards
   - Shadow: `shadow-xl`
   - Hover effect: `hover:shadow-xl transition-shadow duration-300`

6. **Icons**
   - Use `lucide-react` icons
   - Icon containers: Colored background with rounded corners
   - Example: `bg-emerald-100 w-16 h-16 rounded-2xl flex items-center justify-center`

7. **Buttons**
   - Rounded full: `rounded-full`
   - Primary: `bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-3`
   - With icon: `flex items-center gap-2`
   - Motion: `whileHover={{ scale: 1.05 }}` and `whileTap={{ scale: 0.95 }}`

8. **Responsive Design**
   - Mobile-first approach
   - Use responsive classes: `md:grid-cols-2`, `sm:text-lg`, etc.
   - Grid layouts: `grid md:grid-cols-2 gap-8`

## Example Component Template

```tsx
"use client";

import { motion } from "framer-motion";
import { Icon } from "lucide-react";

export default function NewComponent() {
  return (
    <section id="new-section" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-emerald-600 font-semibold text-sm mb-3">
            Section Label
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Section Title
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-3xl p-8 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Card content */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

## Don't Forget

- Import `"use client"` at the top for client-side features
- Use semantic HTML (`<section>`, `<article>`, etc.)
- Add proper `alt` text for images
- Keep animations subtle and performant
- Test responsive behavior across breakpoints
