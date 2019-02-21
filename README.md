# rollup-plugin-import-file

A rollup plugin that allows you to import any file type in your project


## Installation

    npm install --save-dev rollup-plugin-import-file

## Usage

Add plugin to your rollup.config.js:

```JavaScript
import files from 'rollup-plugin-import-file';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    name: 'bundle.js',
    format: 'umd',
  },
  plugins: [
    files({
      output: 'dist/assets/files',
      extensions: /\.(wav|doc)$/,
      hash: true,
    }),
  ]
};
```

## Options

Here are the options:

- output: Required. The destination path of the output files.
- extensions: Required. Accepted extensions. E.g. /\.(wav|docx)$/
- hash: Optional. Default as false. If it sets to true, a generated hash key will append to the original file name.

## License

MIT