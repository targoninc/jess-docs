# Components

## Getting started

```bash
bun install @targoninc/jess-components
```

### Styles

```html
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/targoninc/jess-components@0.0.17/src/src/jess-components.css"/>
```

All components have a single configuration object as a parameter. All configs extend the following `BaseComponentConfig`:

```typescript
export interface BaseComponentConfig {
    classes?: StringOrSignal[];
    attributes?: StringOrSignal[];
    styles?: StringOrSignal[];
    id?: HtmlPropertyValue;
    title?: HtmlPropertyValue;
    tabindex?: HtmlPropertyValue;
    role?: HtmlPropertyValue;
    ariaLabel?: HtmlPropertyValue;
    css?: CssClass;
}
```

## List of available elements

- [Button](/Components/button)
