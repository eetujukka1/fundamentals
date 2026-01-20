import Queue from "../src/queue";
import { describe, it, expect } from "@jest/globals";

describe("Queue", () => {
    it("should create a queue", () => {
        const queue = new Queue();
        expect(queue).toBeDefined();
    });
    
    it("should enqueue an item", () => {
        const queue = new Queue();
        queue.enqueue(1);
        expect(queue.size()).toBe(1);
        expect(queue.isEmpty()).toBe(false);
    });
    
    it("should dequeue an item", () => {
        const queue = new Queue();
        queue.enqueue(1);
        expect(queue.dequeue()).toBe(1);
        expect(queue.isEmpty()).toBe(true);
    });
    
    it("should peek at the front item", () => {
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.peek()).toBe(1);
    });
    
    it("should check if queue is empty", () => {
        const queue = new Queue();
        expect(queue.isEmpty()).toBe(true);
    });
    
    it("should check if queue is not empty", () => {
        const queue = new Queue();
        queue.enqueue(1);
        expect(queue.isEmpty()).toBe(false);
    });
    
    it("should return the size of the queue", () => {
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.size()).toBe(2);
    });
    
    it("should return an array of items", () => {
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        expect(queue.toArray()).toEqual([1, 2, 3]);
    });
});