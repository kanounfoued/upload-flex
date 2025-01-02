import { UploaderConfig } from 'src/types/Uploader.types';

export default class Uploader {
  files: File[] = [];

  config: UploaderConfig;

  constructor(config: UploaderConfig) {
    this.config = config;
  }

  onChange(files: File[]) {
    this.files = files;
  }
}

/**
 *
 * Uploader
 *
 * Processor
 *  File
 *  Chunk
 *
 *
 *
 * Queue
 *
 *
 *
 *
 */
