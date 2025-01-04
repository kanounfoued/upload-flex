export type Trigger = 'onClick' | 'onDrop' | 'auto';

export type UploaderConfig = {
  trigger: Trigger;
  multiple?: boolean;
  accepts?: Array<string>;
  max_concurrent_uploads?: number;
  max_chunk_size?: number;
};
