# Stylesheet Structure

## File responsibilities
- `index.css`: single entrypoint imported by `src/main.tsx`.
- `base.css`: shared primitives only (reset, typography, shared button, grid, utility classes, font variables).
- `layout-global.css`: global layout styles for currently rendered non-module sections.
- `responsive-global.css`: responsive rules for global layout selectors.
- `legacy-sections.css`: unused section styles kept for future reactivation (`#contact`, `#testimonials`, `#call-to-action`). Not imported by default.
- `*.module.css`: component-scoped styles. Prefer this for component-specific styling.

## Rules
- New component-specific styles should go to `*.module.css`.
- Keep global selectors in `layout-global.css`/`responsive-global.css` minimal.
- If a section is not currently rendered, move its global styles into `legacy-sections.css`.
- To re-enable legacy sections, uncomment the `legacy-sections.css` import in `index.css`.
