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

  dequeue(): T | undefined {
    const entry = this.items.shift();
    return entry?.item;
  }

  peek(): T | undefined {
    return this.items[0]?.item;
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
    const index = this.items.findIndex((i) => {
      if (i.item === item) {
        return true;
      }

      if (
        typeof i.item === "object" &&
        typeof item === "object" &&
        i.item !== null &&
        item !== null
      ) {
        return JSON.stringify(i.item) === JSON.stringify(item);
      }
      return false;
    });
    if (index === -1) {
      throw new Error("Item not found");
    }
    this.items[index].priority = newPriority;
    this.items.sort((a, b) =>
      this.descending ? b.priority - a.priority : a.priority - b.priority,
    );
  }
}

export default PriorityQueue;
