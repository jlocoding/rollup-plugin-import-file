import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import buble from 'rollup-plugin-buble';
const pkg = require('./package.json');

export default {
  entry: 'index.js',
  targets: [
    { format: 'cjs', dest: pkg.main },
    { format: 'es', dest: pkg.module }
  ],
  external: ['fs', 'path', 'rollup-pluginutils', 'crypto'],
  plugins: [
    resolve(),
    commonjs(),
    buble()
  ]
};
