import { FlexFile } from 'src/types/File.types';
import { SplitType } from 'src/types/Uploader.types';

export interface Processor {
  processing: (args: { file: FlexFile; chunkIndex?: number }) => unknown;
}

export class StreamProcessor implements Processor {
  constructor() {}

  processing(args: { file: FlexFile }) {
    const { file } = args;
    console.log('file', file);
  }
}

export class RegularProcessor implements Processor {
  chunkSize: number;
  chunks: Array<Blob>;

  constructor(chunkSize: number = 1) {
    this.chunkSize = chunkSize * 1024 * 1024;
    this.chunks = [];
  }

  // TODO: this processing can be improved by using setTimeout to deprioritize the chuning process. same as I did for the scheduler.
  processing(args: { file: FlexFile; chunkIndex?: number }) {
    const { file } = args;
    let start = 0;
    console.log('file', file.size);

    while (start < file.size) {
      const end = Math.min(start + this.chunkSize, file.size);
      const chunk = file.slice(start, end);
      start += this.chunkSize;
      console.log('chunk', chunk);

      this.chunks.push(chunk);
    }
  }
}

export class ProcessorFactory {
  static getProcessor(splitType: SplitType) {
    switch (splitType) {
      case 'regular':
        return (chunkSize: number) => new RegularProcessor(chunkSize);
      case 'stream':
        return () => new StreamProcessor();

      default: {
        const _no_more_options: never = splitType;
        return _no_more_options;
      }
    }
  }
}

const fileInput = document.getElementById('fileInput');
let files: FileList;

// Add an event listener to capture when files are selected
fileInput?.addEventListener('change', (event) => {
  // Get the FileList object
  // @ts-expect-error asdfmslfkm
  files = event?.target?.files as FileList;
  console.log('files', files);

  const processor = new RegularProcessor(1);

  for (const file of files) {
    const f = {
      ...file,
      status: 'pending',
      total_chunks: file.size / (1 * 1024 * 1024),
      id: new Date().getTime(),
    } as unknown as FlexFile;

    processor.processing({ file: f, chunkIndex: 0 });
  }

  console.log('queue', processor.chunks);
});
