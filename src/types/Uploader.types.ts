export type Trigger = 'onClick' | 'onDrop' | 'auto';
export type SplitType = 'stream' | 'regular';

export type UploaderConfig = {
  trigger: Trigger;
  multiple?: boolean;
  file_split_type: SplitType;
  accepts?: Array<string>;
  max_concurrent_uploads?: number;
  max_chunk_size?: number;
};
