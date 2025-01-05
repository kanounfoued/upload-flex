import FlexQueue, { FlexQueueTask } from './queue';
import { TaskParams, Task } from './task';

export default class FlexScheduler<A, R> {
  source: TaskParams<A, R>[];
  queue: FlexQueue<FlexQueueTask<R>>;
  limit: number;

  constructor(source: TaskParams<A, R>[], limit: number = 2) {
    this.source = source;
    this.queue = new FlexQueue<FlexQueueTask<R>>(limit);
    this.limit = limit;
  }

  setSource(source: TaskParams<A, R>[]) {
    this.source = [...this.source, ...source];
  }

  schedule() {
    while (!this.queue.isFull()) {
      const sourceItem = this.source.shift();

      if (!sourceItem) {
        return;
      }

      const task = Task(sourceItem.cb, sourceItem?.args);

      // NOTE: with settimeout the input was fully interactive to user input.
      //  TODO: setTimeout should replace with something more efficient like IdleCallback API
      // TODO: check the performance of the setTimeout vs IdleCallback API
      setTimeout(() => {
        task().then(() => {
          this.queue.dequeue();
          this.schedule();
        });
      }, 1);

      this.queue.enqueue(task);
    }
  }
}

// const source: TaskParams<Array<string>, void>[] = new Array(100000)
//   .fill(0)
//   .map((_, index) => {
//     return {
//       cb: () => {
//         console.log(`Task ${index}`);
//         return Promise.resolve();
//       },
//       args: [],
//     };
//   });

// const scheduler = new FlexScheduler(source, 2);

// scheduler.schedule();
