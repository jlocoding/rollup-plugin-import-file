import { readFileSync, createReadStream, createWriteStream } from 'fs';
import { extname, basename, relative  } from 'path';
import { createFilter } from 'rollup-pluginutils';
import mkdirp from 'mkdirp';
import hasha from 'hasha';

const files = (options = {}) => {
	const extensions = options.extensions;
	const filter = createFilter(options.include, options.exclude);

	return {
		name: 'files',
		load(filePath) {
      if (!filter(filePath)) return null;
      if (!extensions) return null;

			const ext = extname(filePath);
      if (!extensions.test(ext)) return null;

      const outputDir = relative('./', options.output) || '';
      mkdirp.sync(outputDir);

      let fileName = basename(filePath);

      if (options.hash) {
        const hash = hasha(readFileSync(filePath).toString(), { algorithm: 'md5' });
        fileName = `${basename(filePath, ext)}-${hash}${ext}`;
      }

      const outputFilePath = `${outputDir}/${fileName}`;
      createReadStream(filePath).pipe(createWriteStream(outputFilePath));
      return `export default "${outputFilePath.split('/').splice(1).join('/')}"`;
		}
	};
}

export default files;
