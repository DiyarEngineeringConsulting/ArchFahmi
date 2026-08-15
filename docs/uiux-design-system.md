## Design System: archFahmi Signal Matrix

### Design Dials
- **Variance:** 8/10 — Bold / Asymmetric
- **Motion:** 5/10 — Standard
- **Density:** 4/10 — Standard

### Pattern
- **Name:** Portfolio Grid
- **Conversion Focus:** Visuals first. Filter by category. Fast loading essential.
- **CTA Placement:** Project Card Hover + Footer Contact
- **Color Strategy:** Neutral background (let work shine). Text: Black/White. Accent: Minimal.
- **Sections:** 1. Hero (Name/Role), 2. Project Grid (Masonry), 3. About/Philosophy, 4. Contact

### Style
- **Name:** Bento Grids
- **Mode Support:** Light ✓ Full | Dark ✓ Full
- **Keywords:** Apple-style, modular, cards, organized, clean, hierarchy, grid, rounded, soft
- **Best For:** Product features, dashboards, personal sites, marketing summaries, galleries
- **Performance:** ⚡ Excellent | **Accessibility:** ✓ WCAG AA

### Colors
| Role | Hex | CSS Variable |
|------|-----|--------------|
| Primary | `#18181B` | `--color-primary` |
| On Primary | `#FFFFFF` | `--color-on-primary` |
| Secondary | `#3F3F46` | `--color-secondary` |
| Accent/CTA | `#2563EB` | `--color-accent` |
| Background | `#FAFAFA` | `--color-background` |
| Foreground | `#09090B` | `--color-foreground` |
| Muted | `#E8ECF0` | `--color-muted` |
| Border | `#E4E4E7` | `--color-border` |
| Destructive | `#DC2626` | `--color-destructive` |
| Ring | `#18181B` | `--color-ring` |

*Notes: Monochrome + blue accent*

### Typography
- **Heading:** Noto Naskh Arabic
- **Body:** Noto Sans Arabic
- **Mood:** arabic, elegant, traditional, cultural, RTL, readable
- **Best For:** Arabic sites, Middle East market, Islamic content, bilingual sites
- **Google Fonts:** https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;500;600;700&family=Noto+Sans+Arabic:wght@300;400;500;700&display=swap
- **CSS Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;500;600;700&family=Noto+Sans+Arabic:wght@300;400;500;700&display=swap');
```

### Key Effects
Hover scale (1.02), soft shadow expansion, smooth layout shifts, content reveal

### Motion
**Stagger List** (Standard) — Trigger: load or scroll | Duration: 300-450ms | Easing: `back.out(1.4)`
```js
gsap.from('.grid-item', { opacity: 0, scale: 0.92, y: 16, duration: 0.4, stagger: { each: 0.06, from: 'start', grid: 'auto' }, ease: 'back.out(1.4)' });
```
*Framework notes: grid: 'auto' lets GSAP infer rows/columns from a CSS grid layout for a natural wave stagger*
- ✅ Combine with from: 'center' for a bento-grid layout to draw the eye inward first
- ❌ Don't use back.out on dense data tables; the overshoot reads as sloppy on informational UI

### Avoid (Anti-patterns)
- 2D-only layouts
- Poor image quality
- AI purple/pink gradients

### Pre-Delivery Checklist
- [ ] No emojis as icons (use SVG: Heroicons/Lucide)
- [ ] cursor-pointer on all clickable elements
- [ ] Hover states with smooth transitions (150-300ms)
- [ ] Light mode: text contrast 4.5:1 minimum
- [ ] Focus states visible for keyboard nav
- [ ] prefers-reduced-motion respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px


============================================================
✅ Design system persisted to /home/ubuntu/archfahmi-redesign/design-system/archfahmi-signal-matrix/
   📄 /home/ubuntu/archfahmi-redesign/design-system/archfahmi-signal-matrix/MASTER.md

📖 Usage: When building a page, check /home/ubuntu/archfahmi-redesign/design-system/archfahmi-signal-matrix/pages/[page].md first.
   If it exists, its rules override MASTER.md. Otherwise, use MASTER.md.
============================================================
