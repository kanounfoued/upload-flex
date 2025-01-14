import { UploaderConfig } from 'src/types/Uploader.types';

export const MAX_CHUNK_SIZE = 1 * 1024 * 1024;

export const defaultConfig: UploaderConfig = {
  trigger: 'onClick',
  file_split_type: 'regular',
  multiple: false,
  accepts: ['*'],
  max_concurrent_uploads: 3,
  max_chunk_size: MAX_CHUNK_SIZE,
};

export let config = defaultConfig;

export const setUploaderConfig = (custom_config: UploaderConfig) => {
  config = {
    ...config,
    ...custom_config,
  };
};
