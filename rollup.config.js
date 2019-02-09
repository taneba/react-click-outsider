import typescript from 'rollup-plugin-typescript2'
import commonjs from 'rollup-plugin-commonjs'

export default {
  input: 'src/index.tsx',
  output: {
    file: 'dist/index.js',
    format: 'umd',
    name: 'ReactClickOutsider',
  },
  plugins: [
    typescript({
      rollupCommonJSResolveHack: true,
      exclude: ['*.d.ts', '**/*.d.ts'],
    }),
    commonjs(),
  ],
  external: ['react', 'react-dom'],
  sourcemap: true,
}
