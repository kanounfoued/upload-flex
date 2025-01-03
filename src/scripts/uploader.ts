import { UploadFlex } from 'src/types/File.types';
import { UploaderConfig } from 'src/types/Uploader.types';

export const defaultConfig: UploaderConfig = {
  trigger: 'onClick',
  multiple: false,
  accepts: ['*'],
};

// Queue
// File Processor
// Chunk Processor

const MAX_CHUNK_SIZE = 1 * 1024 * 1024; // 1MB

const setFileMetaData = (file: File): UploadFlex.FlexFile => {
  return {
    ...file,
    id: new Date().getTime().toString(),
    total_chunks: Math.ceil(file.size / MAX_CHUNK_SIZE),
  };
};

export const onUpload = (_files: FileList) => {
  const files: Array<UploadFlex.FlexFile> = [];

  for (const file of _files) {
    const f = setFileMetaData(file);
    files.push(f);
  }

  files.sort((f1, f2) => f1.size - f2.size);
};
