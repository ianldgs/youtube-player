// import babel from 'rollup-plugin-babel';
// import babelrc from 'babelrc-rollup';

// export default {
//   entry: 'src/index.js',
//   dest: 'dist/youtube-player.js',
//   plugins: [
//     babel(babelrc())
//   ]
// };

import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babelrc from './babel.config.json';
import nodePolyfills from 'rollup-plugin-node-polyfills';

const config = {
  input: 'src/index.js',
  output: {
    dir: 'dist',
    name: 'youtube-player',
    format: 'esm'
  },
  plugins: [resolve(), babel(babelrc), commonjs(), nodePolyfills()]
};

export default config;
