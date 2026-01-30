# Copilot Instructions — Post Clarity EPK

## Project Overview

**Post Clarity EPK** is an Electronic Press Kit (EPK) web application for the band Post Clarity. An EPK is a digital promotional package used by musicians to showcase their music, biography, photos, videos, press releases, and contact information to venues, promoters, journalists, and industry professionals.

This is a modern, responsive single-page application built with Angular 21.


---

## Technology Stack

### Frontend
- **Angular 21** - Latest version of Angular framework
- **Angular Signals** - Modern reactive state management (preferred over RxJS for local state)
- **Angular Router** - Client-side routing
- **Vitest** - Modern, fast unit testing framework
- **TypeScript 5.9** - Static typing and modern JavaScript features
- **Standalone Components** - Modern Angular architecture (no NgModules)
- **Responsive Design** - Mobile-first, works seamlessly on all devices

### Development
- **Angular CLI 21.1.2** - Project scaffolding and build tooling
- **npm 11.8.0** - Package management
- Development server: http://localhost:4200
- Hot reload enabled for rapid development

---

## Architectural Principles

### Modern Angular Patterns
- Use **standalone components** (default in Angular 21)
- Prefer **signals** over traditional RxJS subjects for component state
- Use `computed()` for derived state
- Use `effect()` sparingly for side effects
- Keep components focused and single-purpose

### Component Structure
```typescript
@Component({
  selector: 'app-feature',
  imports: [CommonModule, RouterModule],
  templateUrl: './feature.html',
  styleUrl: './feature.scss'
})
export class FeatureComponent {
  // Signals for reactive state
  protected readonly data = signal<Data[]>([]);
  protected readonly loading = signal(false);
  
  // Computed for derived state
  protected readonly hasData = computed(() => this.data().length > 0);
}
```

### Naming Conventions
- Component files: `feature.ts`, `feature.html`, `feature.scss`
- Component classes: `FeatureComponent` (but exported as just `Feature` for brevity)
- Signal properties: `camelCase` with `signal()` or `computed()`
- Protected members for template-only access
- Private members for internal-only access

### File Organization
- Keep related files together (component, template, styles, tests)
- Use feature folders for logical grouping
- Shared utilities in dedicated directories
- Assets organized by type (images, fonts, etc.)

---

## Development Guidelines

### Component Development
- Components should be **standalone** by default
- Import only what you need in each component
- Use modern control flow syntax (`@if`, `@for`, `@switch`)
- Avoid using deprecated NgModule patterns
- Keep templates clean and readable

### State Management
- Use **Angular Signals** for component and service state
- Pattern for mutable state: `signal(initialValue)`
- Pattern for derived state: `computed(() => expression)`
- Update signals: `mySignal.set(newValue)` or `mySignal.update(prev => newValue)`
- For async data, consider `toSignal()` from `@angular/core/rxjs-interop`

### Styling
- Use component-scoped SCSS files
- Follow mobile-first responsive design principles
- Ensure all UI works on desktop, tablet, and mobile
- Keep styles modular and maintainable
- Use CSS custom properties for theming when appropriate

### Testing
- Write tests using **Vitest**
- Test components in isolation
- Focus on user behavior and outcomes
- Mock external dependencies
- Run tests: `npm test`

---

## Common Tasks

### Starting Development
```bash
npm start
# or
ng serve
```
Open http://localhost:4200

### Generating Components
```bash
ng generate component feature-name
# or shorthand
ng g c feature-name
```

### Building for Production
```bash
npm run build
# or
ng build
```
Output in `dist/` directory

### Running Tests
```bash
npm test
# or
ng test
```

---

## Project-Specific Guidelines

### EPK Content Structure
An EPK typically includes:
- **Biography** - Band history, members, background
- **Music/Audio** - Links to streaming services, embedded players
- **Photos** - High-quality press photos, live performance images
- **Videos** - Music videos, live performances, interviews
- **Press** - Reviews, articles, press releases
- **Contact** - Booking info, management, social media links
- **Tour Dates** - Upcoming shows and events (if applicable)
- **Press Kit Download** - Downloadable PDF or ZIP

### Design Considerations
- Professional presentation for industry professionals
- Easy navigation and information access
- Fast loading times
- High-quality media presentation
- Clear calls-to-action for booking/contact
- Print-friendly press materials

---

## Brand Identity

### Logo Analysis
The Post Clarity logo features a dual-tone neon sign aesthetic with specific color palettes and typography.

#### Color Palette

**Teal / Cyan** (used in "POST" letters)
- Core stroke (brightest): `#BFF6F3` - Very light aqua "tube" color
- Mid glow: `#6FD6D2` - Good for gradients or softer glow layers
- Outer glow: `#2BB3B0` - Deeper teal in the far glow

**Warm Gold** (used in acorn icon and "Clarity" text)
- Core stroke: `#FFF1C9` - Near-white warm yellow
- Mid glow: `#F4D58A` - Warm amber tone
- Outer glow: `#E2A93B` - Amber/orange tone in the halo

#### Typography

**"POST"** - Rounded Geometric Sans
- Characteristics: Thick uniform stroke, rounded corners, wide friendly shapes, modern tech-style
- Best match: **Poppins ExtraBold**
- Alternatives: Montserrat Rounded, Nunito ExtraBold

**"Clarity"** - Script / Sign-Painter Style
- Characteristics: Smooth connected script, slight retro sign-painting vibe, rounded terminals
- Best match: **Pacifico** (Google Fonts)
- Alternatives: Allura, SignPainter, Great Vibes

*Note: Logo fonts likely have custom tweaks, adjusted kerning, and outline/stroke effects.*

#### Neon Glow Effect
The logo uses a "neon sign" treatment with layered glow effects. To replicate in CSS:

**Teal Neon (POST - Hollow/Outlined):**
```css
.neon-teal-outlined {
  font-family: 'Poppins', sans-serif;
  font-weight: 800;
  font-size: 120px;
  letter-spacing: 8px;
  color: transparent;
  -webkit-text-stroke: 4px #BFF6F3;
  paint-order: stroke fill;
  filter:
    drop-shadow(0 0 3px #BFF6F3)
    drop-shadow(0 0 6px #6FD6D2)
    drop-shadow(0 0 12px #2BB3B0);
}
```

**Gold Neon (Clarity - Filled Script):**
```css
.neon-gold {
  font-family: 'Pacifico', cursive;
  font-size: 80px;
  color: #FFF1C9;
  text-shadow:
    0 0 4px #FFF1C9,
    0 0 8px #F4D58A,
    0 0 16px #F4D58A,
    0 0 32px #E2A93B,
    0 0 48px #E2A93B;
}
```

**Glow Technique:**
- For hollow/outlined text: Use `color: transparent`, `-webkit-text-stroke`, and `drop-shadow` filter
- For filled text: Use solid color with layered `text-shadow`
- Blur values grow exponentially (3px → 6px → 12px) for subtle effect, or (4px → 8px → 16px → 32px) for stronger glow
- Core stroke color + inner glow + outer glow using the same hue at different brightness/opacity
- Dark backgrounds (#111, #1a1a1a, #000) make neon effects pop most effectively

**Optional Flicker Animation:**
```css
@keyframes flicker {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.92; }
}

.neon {
  animation: flicker 3s infinite;
}
```

**Recommended Google Fonts Import:**
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@800&family=Pacifico&display=swap" rel="stylesheet">
```

**Design Language:** "Dual-tone neon glow with a bright inner stroke, soft mid-glow, and wide diffused outer halo. Warm gold and cool teal neon tubing effect."

---

## Best Practices

### Code Quality
- Write clean, readable, self-documenting code
- Use TypeScript's type system effectively
- Follow Angular style guide conventions
- Keep functions and methods focused and small
- Comment complex logic, not obvious code

### Performance
- Lazy load routes when appropriate
- Optimize images and media files
- Use `OnPush` change detection when beneficial
- Minimize bundle size
- Leverage Angular's built-in optimizations

### Accessibility
- Use semantic HTML elements
- Provide proper ARIA labels when needed
- Ensure keyboard navigation works
- Maintain proper heading hierarchy
- Test with screen readers

### Responsive Design
- Mobile-first approach
- Test on multiple device sizes
- Use flexible layouts (flexbox, grid)
- Touch-friendly interactive elements
- Consider various screen orientations

---

## General Guidance for Copilot

- Follow modern Angular 21 patterns and best practices
- Use signals for state management
- Write standalone components
- Keep code clean and maintainable
- Prioritize user experience and performance
- Ensure responsive, mobile-friendly design
- Write meaningful tests
- When in doubt, follow Angular documentation at https://angular.dev

