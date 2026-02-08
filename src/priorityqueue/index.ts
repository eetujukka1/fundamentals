interface PriorityQueueItem<T> {
  item: T;
  priority: number;
}

interface PriorityQueueOptions {
  descending?: boolean;
}

class PriorityQueue<T> {
  private items: PriorityQueueItem<T>[];
  private descending: boolean;

  constructor(options: PriorityQueueOptions = {}) {
    this.items = [];
    const { descending = false } = options;
    this.descending = descending;
  }

  enqueue(item: T, priority: number): void {
    this.items.push({ item, priority });
    this.items.sort((a, b) =>
      this.descending ? b.priority - a.priority : a.priority - b.priority,
    );
  }

  dequeue(): PriorityQueueItem<T> | undefined {
    const entry = this.items.shift();
    if (!entry) {
      return;
    }
    return entry;
  }

  peek(): PriorityQueueItem<T> | undefined {
    const entry = this.items[0];
    if (!entry) {
      return;
    }
    return entry;
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }

  toArray(): T[] {
    return this.items.map((entry) => entry.item);
  }

  changePriority(item: T, newPriority: number): void {
    const index = this.items.findIndex((i) => this.itemsEqual(i.item, item));
    if (index === -1) {
      throw new Error("Item not found");
    }
    this.items[index].priority = newPriority;
    this.items.sort((a, b) =>
      this.descending ? b.priority - a.priority : a.priority - b.priority,
    );
  }

  remove(item: T): PriorityQueueItem<T> | undefined {
    const index = this.items.findIndex((i) => this.itemsEqual(i.item, item));
    if (index === -1) {
      return undefined;
    }
    const [removed] = this.items.splice(index, 1);
    return removed;
  }

  private itemsEqual(a: T, b: T): boolean {
    if (a === b) {
      return true;
    }
    if (
      typeof a === "object" &&
      typeof b === "object" &&
      a !== null &&
      b !== null
    ) {
      return JSON.stringify(a) === JSON.stringify(b);
    }
    return false;
  }
}

export default PriorityQueue;
