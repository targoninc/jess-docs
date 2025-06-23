# Signals

Signals in Jess are simple: They hold a value internally and notify subscribers when it changes.

## Simple counting example

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
```
