# fundamentals

Small JavaScript data-structure utilities (ESM).

Currently included:

- `Queue`: FIFO queue
- `PriorityQueue`: queue ordered by numeric priority (ascending by default)

## Installation

```bash
npm i js-fundamentals
```

## Usage

This package is **ESM-only** (`"type": "module"`).

```js
import { Queue, PriorityQueue } from "js-fundamentals";
```

### Queue

```js
import { Queue } from "js-fundamentals";

const q = new Queue();
q.enqueue("a");
q.enqueue("b");

q.peek(); // "a"
q.dequeue(); // "a"
q.size(); // 1
q.toArray(); // ["b"]
```

### PriorityQueue

`PriorityQueue` stores `(item, priority)` pairs internally and always dequeues the next item based on priority.

By default it is **ascending** (lower numbers come out first). Pass `{ descending: true }` to the constructor for **descending** order.

```js
import { PriorityQueue } from "js-fundamentals";

const pq = new PriorityQueue(); // ascending
pq.enqueue("low", 10);
pq.enqueue("high", 1);

pq.dequeue(); // "high"
pq.toArray(); // ["low"]
```

Descending order:

```js
const pq = new PriorityQueue({ descending: true }); // descending
pq.enqueue("low", 1);
pq.enqueue("high", 10);

pq.dequeue(); // "high"
```

## API

### `new Queue()`

- `enqueue(item): void`
- `dequeue(): any | undefined` (returns `undefined` if empty)
- `peek(): any | undefined` (returns `undefined` if empty)
- `isEmpty(): boolean`
- `size(): number`
- `toArray(): any[]` (returns the internal backing array)

### `new PriorityQueue(options?)`

Extends `Queue`.

- `options.descending?: boolean` (default: `false`)
- `enqueue(item, priority): void` (`priority` should be a number)
- `dequeue(): any | undefined` (returns `undefined` if empty)
- `peek(): any | undefined` (returns `undefined` if empty)
- `isEmpty(): boolean`
- `size(): number`
- `toArray(): any[]` (returns only items, not priorities)
- `changePriority(item, newPriority): void`
  - Finds an existing item and updates its priority, then re-sorts the queue.
  - Matching rules:
    - Uses strict equality (`===`) for non-objects
    - For non-null objects, falls back to `JSON.stringify` comparison
  - Throws `Error("Item not found")` if no match is found.

## Development

```bash
npm test
npm run lint
npm run format
```
