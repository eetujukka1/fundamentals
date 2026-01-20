import Queue from "../queue";

class PriorityQueue extends Queue {
    constructor(descending = false) {
        super();
        this.descending = descending;
    }
    
    enqueue(item, priority) {
        this.items.push({ item, priority });
        this.items.sort((a, b) => this.descending ? b.priority - a.priority : a.priority - b.priority);
    }
    
    dequeue() {
        return this.items.shift().item;
    }
    
    peek() {
        return this.items[0].item;
    }
    
    isEmpty() {
        return this.items.length === 0;
    }
    
    size() {
        return this.items.length;
    }
    
    toArray() {
        return this.items.map(item => item.item);
    }
}

export default PriorityQueue;