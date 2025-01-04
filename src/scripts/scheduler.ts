import FlexQueue from './queue';

type FnCallback<A, R> = (args: A) => Promise<R>;

type QueueRow<A, R> = {
  cb: FnCallback<A, R>;
  args: A;
};

function Task<A, R>(cb: FnCallback<A, R>, args: A) {
  return () => cb(args);
}

export default class FlexScheduler<A, R> {
  source: QueueRow<A, R>[];
  queue: FlexQueue<() => Promise<R>>;
  limit: number;

  constructor(source: QueueRow<A, R>[], limit: number = 2) {
    this.source = source;
    this.queue = new FlexQueue<() => Promise<R>>(limit);
    this.limit = limit;
  }

  setSource(source: QueueRow<A, R>[]) {
    this.source = [...this.source, ...source];
  }

  // The queue and the task running can be created using event instead.
  schedule() {
    while (!this.queue.isFull()) {
      const sourceItem = this.source.shift();

      if (!sourceItem) {
        return;
      }

      const task = Task(sourceItem.cb, sourceItem.args);

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

const source: QueueRow<Array<string>, void>[] = new Array(100000)
  .fill(0)
  .map((_, index) => {
    return {
      cb: () => {
        console.log(`Task ${index}`);
        return Promise.resolve();
      },
      args: [],
    };
  });

const scheduler = new FlexScheduler(source, 2);

scheduler.schedule();
