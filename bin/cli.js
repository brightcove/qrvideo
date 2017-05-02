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
  },
  default: {
    length: 30,
    q: 1,
    size: 6,
    e: 'Q',
    f: 30,
    name: 'out.mp4'
  }
});

console.log(args);

qrvideo.cleanupQrs()
.then(function() {
  return qrvideo.generateQrs({
    framerate: args.framerate,
    qrsPerFramePeriod: args.q,
    length: args.length,
    size: args.size,
    ec_level: args.e
  })
})
.then(function() {
  return qrvideo.generateVideo({
    name: args.name,
    framerate: args.framerate,
    qrsPerFramePeriod: args.q,
    length: args.length
  });
})
.then(function() {
  if (!args.k) {
    return qrvideo.cleanupQrs();
  }

  return qrvideo.moveQrs();
}, qrvideo.cleanupQrs)
.then(function() {
  console.log('done!');
});
