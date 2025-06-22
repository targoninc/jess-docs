# Jess Documentation

Jess is a framework to make templating and state management on web platforms easier.

## Create your first template

```typescript
import {create} from "@targoninc/jess";

const container = document.body;

const node = create("div")
    .classes("my-container", "red")
    .text("Some text")
    .build(); // Returns an HTMLElement

container.appendChild(node);
```

## Nested templates

```typescript
import {create} from "@targoninc/jess";

const container = document.body;

const node = create("div")
    .children(
        // Just pass in multiple parameters
        create("span")
            .text("Span text"),
        create("span")
            .text("Second span text"),
    ).build();

container.appendChild(node);
```

## Signals

```typescript
import {create, signal, compute} from "@targoninc/jess";

const counter = signal(0); // Will be of type Signal<number>

// You can use compute(valueFunction, ...inputSignals) to chain signals
const counterText = compute(c => `Counter is at ${c}`, counter);

// Subscribe to trigger side effects
counter.subscribe((newCounter, hasChanged) => {
    if (hasChanged) {
        console.log(`Counter changed to ${newCounter}`);
    }
});

// Set values
counter.value = 1;
counter.value = 1; // the .subscribe() function above will not log, because the value is the same

const container = document.body;
container.appendChild(create("span").text(counterText).build());
```

## Testing

This project uses Vitest for testing. Here's how to run the tests:

```bash
# Run tests once
bun test

# Run tests in watch mode (rerun on file changes)
bun test:watch

# Run tests with UI
bun test:ui
```

To create a new test, add a file with the `.test.ts` or `.spec.ts` extension next to the file you want to test.

Example:
```typescript
import { describe, it, expect } from 'vitest';
import { signal } from '@targoninc/jess';

describe('Signal', () => {
  it('should create a signal with initial value', () => {
    const count = signal(0);
    expect(count.value).toBe(0);
  });
});
```
