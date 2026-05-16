/*
 * DESIGN PHILOSOPHY: Dark Authority
 * Movement: Dark Premium / High-Stakes Legal Service
 * Colors: #0D0D0D base, #F5C518 action/accent, #1C1C1C cards, #FFFFFF text, #A0A0A0 secondary
 * Typography: Montserrat (700/800) headlines, Roboto (400/500) body
 * Signature: Yellow left-border cards, yellow section line dividers, badge elements
 */

@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
}

:root {
  --radius: 0.5rem;

  /* Dark Authority Palette */
  --background: oklch(0.08 0 0);           /* #0D0D0D */
  --foreground: oklch(0.97 0 0);           /* #F7F7F7 */
  --card: oklch(0.13 0 0);                 /* #1C1C1C */
  --card-foreground: oklch(0.97 0 0);
  --popover: oklch(0.13 0 0);
  --popover-foreground: oklch(0.97 0 0);
  --primary: oklch(0.82 0.18 85);          /* #F5C518 yellow */
  --primary-foreground: oklch(0.08 0 0);   /* black on yellow */
  --secondary: oklch(0.18 0 0);            /* #2A2A2A */
  --secondary-foreground: oklch(0.97 0 0);
  --muted: oklch(0.18 0 0);
  --muted-foreground: oklch(0.62 0 0);     /* #9A9A9A */
  --accent: oklch(0.82 0.18 85);
  --accent-foreground: oklch(0.08 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --destructive-foreground: oklch(0.985 0 0);
  --border: oklch(0.22 0 0);              /* #333333 */
  --input: oklch(0.18 0 0);
  --ring: oklch(0.82 0.18 85);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', sans-serif;
  }
  button:not(:disabled),
  [role="button"]:not([aria-disabled="true"]),
  [type="button"]:not(:disabled),
  [type="submit"]:not(:disabled),
  a[href],
  select:not(:disabled) {
    @apply cursor-pointer;
  }
}

@layer components {
  .container {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .flex {
    min-height: 0;
    min-width: 0;
  }
  @media (min-width: 640px) {
    .container {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
  }
  @media (min-width: 1024px) {
    .container {
      padding-left: 2rem;
      padding-right: 2rem;
      max-width: 1200px;
    }
  }

  /* Yellow accent line before section titles */
  .section-label {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 0.75rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: oklch(0.82 0.18 85);
    margin-bottom: 1rem;
  }
  .section-label::before {
    content: '';
    display: block;
    width: 2.5rem;
    height: 3px;
    background: oklch(0.82 0.18 85);
    border-radius: 2px;
  }

  /* Card with yellow left border */
  .card-accent {
    border-left: 4px solid oklch(0.82 0.18 85);
    background: oklch(0.13 0 0);
    transition: all 0.3s ease;
  }
  .card-accent:hover {
    background: oklch(0.16 0 0);
    box-shadow: 0 8px 32px oklch(0.82 0.18 85 / 0.12);
    transform: translateY(-2px);
  }

  /* WhatsApp button pulse */
  .btn-whatsapp {
    background: #25D366;
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.875rem 1.75rem;
    border-radius: 0.5rem;
    transition: all 0.3s ease;
    text-decoration: none;
    font-size: 1rem;
  }
  .btn-whatsapp:hover {
    background: #1ebe5d;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(37, 211, 102, 0.35);
  }

  /* Primary CTA button */
  .btn-primary {
    background: oklch(0.82 0.18 85);
    color: oklch(0.08 0 0);
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.875rem 1.75rem;
    border-radius: 0.5rem;
    transition: all 0.3s ease;
    text-decoration: none;
    font-size: 1rem;
  }
  .btn-primary:hover {
    background: oklch(0.75 0.18 85);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px oklch(0.82 0.18 85 / 0.35);
  }

  /* Outline button */
  .btn-outline {
    background: transparent;
    color: oklch(0.97 0 0);
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.875rem 1.75rem;
    border-radius: 0.5rem;
    border: 2px solid oklch(0.35 0 0);
    transition: all 0.3s ease;
    text-decoration: none;
    font-size: 1rem;
  }
  .btn-outline:hover {
    border-color: oklch(0.82 0.18 85);
    color: oklch(0.82 0.18 85);
    transform: translateY(-2px);
  }

  /* Floating WhatsApp */
  .floating-whatsapp {
    position: fixed;
    bottom: 1.5rem;
    right: 1.5rem;
    z-index: 9999;
    width: 3.5rem;
    height: 3.5rem;
    background: #25D366;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 20px rgba(37, 211, 102, 0.5);
    animation: pulse-green 2.5s infinite;
    transition: transform 0.3s ease;
    text-decoration: none;
  }
  .floating-whatsapp:hover {
    transform: scale(1.1);
  }

  @keyframes pulse-green {
    0%, 100% { box-shadow: 0 4px 20px rgba(37, 211, 102, 0.5); }
    50% { box-shadow: 0 4px 32px rgba(37, 211, 102, 0.8), 0 0 0 8px rgba(37, 211, 102, 0.15); }
  }

  /* Stat number */
  .stat-number {
    font-family: 'Montserrat', sans-serif;
    font-weight: 900;
    font-size: 3rem;
    color: oklch(0.82 0.18 85);
    line-height: 1;
  }

  /* Section divider */
  .section-divider {
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, transparent, oklch(0.82 0.18 85 / 0.3), transparent);
    margin: 0;
  }

  /* Noise texture overlay */
  .noise-bg {
    position: relative;
  }
  .noise-bg::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 0;
  }

  /* Animate on scroll */
  .fade-up {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  .fade-up.visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* Star rating */
  .stars {
    color: oklch(0.82 0.18 85);
    font-size: 1.1rem;
    letter-spacing: 2px;
  }
}
