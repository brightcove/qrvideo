var qrvideo = require('../');
var Promise = require('bluebird');

var video;

window.qrvideo = qrvideo;

QUnit.module('QRVideo Example test', {
  beforeEach: function() {
    video = document.createElement('video');
    video.src = '../out4.mp4';
    video.controls = true;
    video.setAttribute('controls', 'controls');
    document.querySelector('#qunit-fixture').appendChild(video);
  },
  afterEach: function() {
    video = null;
  }
});

QUnit.test('verify that qrvideo works', function(assert) {
  var done = assert.async();

  video.addEventListener('canplay', function() {
    qrvideo.check(video)
    .then(function(result) {
      assert.equal(result, 0, 'we start at 0');
      console.log(result, 0, 'we start at 0');
    })
    .then(function() {
      video.play();
      return Promise.delay(5000);
    })
    .then(function() {
      video.pause();
      return qrvideo.check(video);
    })
    .then(function(result) {
      assert.equal(result, 5, 'after 5 seconds, we are at 5');
      console.log(result, 5, 'after 5 seconds, we are at 5');
    })
    .then(done);
  });
});
