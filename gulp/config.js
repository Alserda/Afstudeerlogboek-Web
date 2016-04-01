historyApiFallback = require('connect-history-api-fallback');

var dest = './build',
    src = './src';

module.exports = {
  browserSync: {
    server: {
      // We're serving the src folder as well
      // for sass sourcemap linking
      baseDir: [dest, src],
      middleware: [ historyApiFallback() ] // no 404s anymore on non-existing files/paths
    },
    files: [
      dest + '/**'
    ]
  },
  markup: {
    src: src + "/www/**",
    dest: dest
  },
  less: {
    src: src + "/less/**/*.less",
    dest: dest + "/css"
  },
  browserify: {
    // Enable source maps
    debug: true,
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: src + '/app.jsx',
      dest: dest,
      outputName: 'app.js'
    }]
  }
};
