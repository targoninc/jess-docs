# Jess component - Button

## Example Usage

```typescript
import {button} from "@targoninc/jess-components";

const disabled = signal(false);

button({
    text: "Info",
    disabled: disabled,
    icon: {
        icon: "/assets/buttonIcon.svg",
        adaptive: true,
        isUrl: true
    },
    onclick: () => {
        console.log("button clicked");
        disabled.value = true;
    },
})
```

## Configuration

```typescript
export interface ButtonConfig extends BaseComponentConfig {
    text?: StringOrSignal;
    onclick: EventHandler<MouseEvent>;
    icon?: IconConfig;
    disabled?: TypeOrSignal<boolean>;
}
```