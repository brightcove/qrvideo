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
    s: 'size',
    t: 'temp',
    v: 'video',
    a: 'audio',
    ext: 'extension'
  },
  default: {
    length: 30,
    q: 1,
    size: 6,
    e: 'Q',
    f: 30,
    name: 'output',
    extension: 'mp4',
    temp: true,
    video: true,
    audio: './default_silent_audio_360s.mp3'
  }
});

qrvideo.cleanupQrs()
.then(function() {
  return qrvideo.generateQrs({
    temp: args.temp,
    framerate: args.framerate,
    qrsPerFramePeriod: args.q,
    length: args.length,
    size: args.size,
    ec_level: args.e
  })
})
.then(function() {
  if (args.video) {
    return qrvideo.generateVideo({
      temp: args.temp,
      name: args.name,
      framerate: args.framerate,
      qrsPerFramePeriod: args.q,
      length: args.length,
      audio: args.audio,
      extension: args.extension
    });
  }
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
