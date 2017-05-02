#!/usr/bin/env node

var qrvideo = require('./index.js');
var args = require('minimist')(process.argv.slice(2), {
  string: ['name', 'ec-level'],
  boolean: ['keep-qrs'],
  alias: {
    n: 'name',
    l: 'length',
    e: 'ec-level',
    k: 'keep-qrs',
    f: 'framerate',
    q: 'qrs-per-period',
    s: 'size'
  }
});

console.log(args);

qrvideo.generateQrs({
  framerate: args.framerate,
  qrsPerFramePeriod: args.q,
  length: args.length,
  size: args.size,
  ec_level: args.e
})
.then(function() {
  return qrvideo.generateVideo({
    name: args.name,
    framerate: args.framerate,
    qrsPerFramePeriod: args.q,
    length: args.length
  });
})
.then(qrvideo.cleanupQrs, qrvideo.cleanupQrs)
.then(function() {
  console.log('done!');
});
