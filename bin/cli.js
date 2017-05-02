#!/usr/bin/env node

var qrvideo = require('./index.js');

qrvideo.generateQrs({})
.then(function() {
  return qrvideo.generateVideo({name: 'foo.mp4'});
})
.then(qrvideo.cleanupQrs, qrvideo.cleanupQrs)
.then(function() {
  console.log('done!');
});
