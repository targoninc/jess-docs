# Components

## Getting started

```bash
bun install @targoninc/jess-components
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
