import { config, MAX_CHUNK_SIZE } from 'src/scripts/config';

type FlexFileStatus = 'pending' | 'processing' | 'completed';

export class FlexFile {
  status: FlexFileStatus;
  total_chunks: number;
  id: string;
  file: File;

  constructor(file: File) {
    this.id = new Date().getTime().toString();
    this.status = 'pending';
    this.file = file;
    const chunk_size = config.max_chunk_size ?? MAX_CHUNK_SIZE;
    this.total_chunks = this.file.size / chunk_size;
  }
}
