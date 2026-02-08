import { PriorityQueue } from "../src/index.js";
import { describe, it, expect } from "@jest/globals";

describe("PriorityQueue", () => {
  it("should create a priority queue", () => {
    const queue = new PriorityQueue();
    expect(queue).toBeDefined();
  });

  it("should enqueue an item", () => {
    const queue = new PriorityQueue();
    queue.enqueue(1, 1);
    expect(queue.size()).toBe(1);
    expect(queue.isEmpty()).toBe(false);
  });

  it("should dequeue an item", () => {
    const queue = new PriorityQueue();
    queue.enqueue(3, 3);
    queue.enqueue(2, 2);
    queue.enqueue(1, 1);
    expect(queue.dequeue()).toStrictEqual({ item: 1, priority: 1 });
    expect(queue.isEmpty()).toBe(false);
  });

  it("should dequeue an item with descending priority", () => {
    const queue = new PriorityQueue({ descending: true });
    queue.enqueue(1, 1);
    queue.enqueue(2, 2);
    queue.enqueue(3, 3);
    expect(queue.dequeue()).toStrictEqual({ item: 3, priority: 3 });
    expect(queue.isEmpty()).toBe(false);
  });

  it("should peek at the front item", () => {
    const queue = new PriorityQueue();
    queue.enqueue(3, 3);
    queue.enqueue(2, 2);
    queue.enqueue(1, 1);
    expect(queue.peek()).toStrictEqual({ item: 1, priority: 1 });
  });

  it("should check if queue is empty", () => {
    const queue = new PriorityQueue();
    expect(queue.isEmpty()).toBe(true);
  });

  it("should check if queue is not empty", () => {
    const queue = new PriorityQueue();
    queue.enqueue(1, 1);
    expect(queue.isEmpty()).toBe(false);
  });

  it("should return the size of the queue", () => {
    const queue = new PriorityQueue();
    queue.enqueue(1, 1);
    expect(queue.size()).toBe(1);
  });

  it("should return an array of items", () => {
    const queue = new PriorityQueue();
    queue.enqueue(3, 3);
    queue.enqueue(2, 2);
    queue.enqueue(1, 1);
    expect(queue.toArray()).toEqual([1, 2, 3]);
  });

  it("should change the priority of an item", () => {
    const queue = new PriorityQueue();
    queue.enqueue({ id: 1 }, 1);
    queue.enqueue({ id: 2 }, 2);
    queue.enqueue({ id: 3 }, 3);
    queue.changePriority({ id: 2 }, 4);
    expect(queue.toArray()).toEqual([{ id: 1 }, { id: 3 }, { id: 2 }]);
  });

  it("should remove an item from the queue", () => {
    const queue = new PriorityQueue();
    queue.enqueue({ id: 1 }, 1);
    queue.enqueue({ id: 2 }, 2);
    queue.enqueue({ id: 3 }, 3);
    queue.remove({ id: 2 });
    expect(queue.toArray()).toEqual([{ id: 1 }, { id: 3 }]);
  });
});
