import { FlexFile } from 'src/types/File.types';
import { setFileMetaData } from './file';
import { UploaderConfig } from 'src/types/Uploader.types';
import { setUploaderConfig } from './config';

// Queue
// File Processor
// Chunk Processor

export const init = (custom_config: UploaderConfig) => {
  setUploaderConfig(custom_config);
};

export const onUpload = (_files: FileList) => {
  const files: Array<FlexFile> = [];

  for (const file of _files) {
    const f = setFileMetaData(file);
    files.push(f);
  }

  // sort the files by size.
  // in order to improve performance by starting by the light files.
  files.sort((f1, f2) => f1.size - f2.size);
};

/**
 * I have the list of files.
 *
 * each file needs to be chunked into smaller chunks of 1 MB.
 * put the chunks into the queue.
 * extract from the queue the chunk to be uploaded.
 *  need to check with MAX_CONCURRENT_UPLOADS (browser limitation).
 * Upload the chunk.
 *
 *
 */

/**
 *
 * The package should:
 *  - control the way the files are split.
 *  - control the way the chunks are queued.
 *  - control the way the user can pause/resume/cancel the upload.
 *  - control the flow of the upload (how many chunks are extracted from the queue to go for upload).
 *
 *
 *
 */
