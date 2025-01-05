import FlexQueue, { FlexQueueTask } from './queue';
import { TaskParams } from './task';

export default class FlexRunner<A, R> {
  source: TaskParams<A, R>[];
  chunk_task_queue: FlexQueue<FlexQueueTask<R>>;
  limit: number;

  constructor(limit: number = 2) {
    this.limit = limit;
    this.chunk_task_queue = new FlexQueue(limit);
    this.source = [];
  }
}

const runner = new FlexRunner(2);
console.log('runner', runner);
