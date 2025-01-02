export type Trigger = 'onClick' | 'onDrop' | 'auto';

export type UploaderConfig = {
  trigger: Trigger;
  multiple?: boolean;
  accepts?: Array<string>;
};
