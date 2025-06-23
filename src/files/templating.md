# Templating

Templating in Jess does not require a new language. Instead, it builds on a factory syntax to create elements.

## Create your first template

```typescript
import {create} from "@targoninc/jess";

const node = create("div")
    .classes("my-container", "red")
    .text("Some text")
    .build(); // Returns an HTMLElement

document.body.appendChild(node);
```

## Nested templates

```typescript
import {create} from "@targoninc/jess";

const node = create("div")
    .children(
        // Pass in multiple parameters to .children() to nest elements
        create("span")
            .text("Span text"),
        create("span")
            .text("Second span text"),
    ).build();

document.body.appendChild(node);
```

## Recommended way of structuring

It is recommended to encapsulate your templates/components into single functions. That way, the scope for each component tends to stay as small as needed.

```typescript
import {create} from "@targoninc/jess";

function myTemplate(text1: string, text2: string) {
    // You can run code here that will execute each time your component gets rendered
    
    return create("div")
        .children(
            create("span").text(text1),
            create("span").text(text2),
        ).build();
}

document.body.appendChild(myTemplate("some", "text"));
```

## Reactive templates

By using [signals](/signals), you can easily create reactive templates. Jess automatically updates only the changed element attributes.

```typescript
import {create, Signal} from "@targoninc/jess";

const counter = signal(0);

function myTemplate(sig: Signal<number>) {
    return create("span")
        .text(sig) // This will automatically update when sig changes
        .build();
}

document.body.appendChild(myTemplate(counter));

setTimeout(() => {
    counter.value = counter.value + 1;
}, 1000);
```
