import { type File } from './types/File.types';

/**
 *
 * Create a solution that does not rely on any external libraries.
 *
 * Upload use cases:
 * - upload one file smaller than the MAX_CHUNK_SIZE
 * - upload multuple small files
 * - upload large file
 * - upload multiple large files.
 *
 *
 *
 * use cases
 * what if the file has failed  to upload?
 * what if the the chunk has failed to upload?
 *
 *
 * what if the user cancel a chunk upload?
 * what if the user cancel a file upload?
 * what if the user has paused the uplaod of a file ?
 * what if the user has paused the uplaod of a chunk ?
 * what if the user has resume the paused file upload?
 * what if the user has resume the paused chunk upload?
 *
 *
 *
 */

export { File };
