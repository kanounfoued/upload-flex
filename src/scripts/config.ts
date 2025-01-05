import { UploaderConfig } from 'src/types/Uploader.types';

export const defaultConfig: UploaderConfig = {
  trigger: 'onClick',
  file_split_type: 'regular',
  multiple: false,
  accepts: ['*'],
  max_concurrent_uploads: 3,
  max_chunk_size: 1 * 1024 * 1024,
};

export let config = defaultConfig;

export const setUploaderConfig = (custom_config: UploaderConfig) => {
  config = {
    ...config,
    ...custom_config,
  };
};
