import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default [
  {
    input: 'src/index.ts',
    output: {
      dir: './dist',
      format: 'cjs',
      sourcemap: true,
    },
    plugins: [
      resolve({ extensions }),
      commonjs(),
      typescript(),
      babel({ extensions, babelHelpers: 'bundled' }),
    ],
  },
  {
    input: 'src/index.ts',
    output: {
      dir: './lib',
      format: 'es',
      sourcemap: true,
    },
    plugins: [
      resolve({ extensions }),
      commonjs(),
      typescript({ compilerOptions: { outDir: './lib' } }),
      babel({ extensions, babelHelpers: 'bundled' }),
    ],
  },
];
