type FlexFileStatus = 'pending' | 'processing' | 'completed';

export type FlexFile = File & {
  id: string;
  total_chunks: number;
  status: FlexFileStatus;
};
