import { setupCounter } from './counter';
import './style.css';
import typescriptLogo from './typescript.svg';
import viteLogo from '/vite.svg';

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

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
