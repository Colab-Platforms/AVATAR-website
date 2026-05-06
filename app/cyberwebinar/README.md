# Cyberwebinar Landing Page

This is a Next.js conversion of the Cyberwebinar.html landing page. The page has been modularized into separate components for better maintainability.

## Structure

```
cyberwebinar/
├── page.tsx                    # Main page component
├── layout.tsx                  # Layout with fonts and metadata
├── styles.css                  # Custom CSS styles
└── components/
    ├── CyberNavbar.tsx         # Navigation header
    ├── CyberHero.tsx           # Hero section with main CTA
    ├── CyberProblem.tsx        # Problem statement section
    ├── CyberCurriculum.tsx     # Course curriculum grid
    ├── CyberComparison.tsx     # YouTube vs Session comparison
    ├── CyberDeliverables.tsx   # What attendees receive
    ├── CyberAudience.tsx       # Target audience section
    ├── CyberSessionDetails.tsx # Session date, time, format details
    ├── CyberTestimonials.tsx   # Customer testimonials
    ├── CyberFAQ.tsx            # Frequently asked questions
    ├── CyberCTA.tsx            # Final call-to-action section
    ├── CyberFooter.tsx         # Footer with links
    ├── CyberCountdownBar.tsx   # Sticky countdown timer bar
    └── CyberBookingModal.tsx   # Booking form modal
```

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Custom Typography**: Uses Fraunces (serif), Inter (sans-serif), and JetBrains Mono (monospace)
- **Interactive Elements**:
  - Sticky countdown timer that appears on scroll
  - Booking modal with EmailJS integration
  - Animated FAQ accordion
  - Hover effects on cards and links
- **Custom Color Palette**: Ink, paper, and amber theme inspired by late-night monitor glow
- **Grain Texture**: Subtle noise overlay for visual depth

## Usage

Access the page at `/cyberwebinar` route.

## EmailJS Configuration

The booking modal uses EmailJS for form submissions. Update the credentials in `CyberBookingModal.tsx`:

```typescript
const serviceID = 'YOUR_SERVICE_ID';
const templateID = 'YOUR_TEMPLATE_ID';
const publicKey = 'YOUR_PUBLIC_KEY';
```

## Customization

- **Colors**: Edit CSS variables in `styles.css`
- **Content**: Update data arrays in each component
- **Countdown Date**: Change target date in `CyberCountdownBar.tsx`
- **Session Details**: Modify details in `CyberSessionDetails.tsx`
