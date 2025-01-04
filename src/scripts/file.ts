import { FlexFile } from 'src/types/File.types';
import { defaultConfig } from './config';

export const setFileMetaData = (file: File): FlexFile => {
  return {
    ...file,
    id: new Date().getTime().toString(),
    total_chunks: Math.ceil(file.size / (defaultConfig.max_chunk_size || 1)),
  };
};
