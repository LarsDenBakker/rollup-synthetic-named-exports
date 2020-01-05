export default {
  input: './src/input.js',
  output: {
    file: 'dist/output.js',
  },
  plugins: [
    {
      resolveId(id) {
        if (id === './dep.js') {
          return { id: require.resolve('./src/dep.js'), syntheticNamedExports: true };
        }
        return null;
      }
    }
  ]
}