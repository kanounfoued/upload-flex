export default class FlexQueue<T> {
  limit: number;
  queue: Array<T>;

  constructor(limit: number = 2) {
    this.queue = [];
    this.limit = limit;
  }

  enqueue(item: T): boolean {
    if (this.isFull()) {
      return false;
    }

    this.queue.push(item);
    return true;
  }

  dequeue(): T | undefined {
    if (this.isEmpty()) {
      return;
    }

    return this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  isFull() {
    return this.queue.length === this.limit;
  }
}
