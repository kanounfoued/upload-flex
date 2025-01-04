import { FlexQueueTask } from './queue';

export type TaskCallback<A, R> = (args: A) => Promise<R>;

export type TaskParams<A, R> = {
  cb: TaskCallback<A, R>;
  args: A;
};

export function Task<A, R>(cb: TaskCallback<A, R>, args: A): FlexQueueTask<R> {
  return () => cb(args);
}
