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

