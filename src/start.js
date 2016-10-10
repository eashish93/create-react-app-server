require('babel-register')({
    "presets": ["react-app"]
})

const hook = require('css-modules-require-hook');

hook({
  generateScopedName: '[name]__[local]___[hash:base64:5]',
});

// add as many you want
require('asset-require-hook')({
  extensions: ['svg', 'png', 'jpeg', 'jpg', 'gif', 'eot', 'webp', 'ttf', 'woff', 'woff2']
})


require('./server');
