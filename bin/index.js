var fs = require('fs-extra')
var qr = require("qr-image");
var path = require('path');
var spawn = require('child_process').spawn;
var Promise = require('bluebird');
var streamToPromise = require('stream-to-promise');
var os = require('os');
var osTmp = os.tmpdir();
var qrsDir = path.join(osTmp, 'qrs');

function generateQrs(options) {
  var ec_level = options.ec_level || 'Q';
  var size = options.size || 6;
  var num = options.length || 100;

  function generateQr(i) {
    return qr.image(i, {
      ec_level: ec_level,
      size: size
    }).pipe(fs.createWriteStream(path.join(qrsDir, 'img' + i + '.png')));
  }

  return fs.ensureDir(qrsDir).then(function() {
    var promises = [];

    for (var i = 0; i < num; i++) {
      var promise = streamToPromise(generateQr(i));
      promises.push(promise);
    }
    return Promise.all(promises);
  });
};

function cleanupQrs() {
  return fs.remove(qrsDir);
}

function generateVideo(options) {
  var framerate = options.framerate || 30;
  var qrsPerFramePeriod = options.qrsPerFramePeriod || 1;
  var name = options.name || out.mp4;

  var settings = [
    '-framerate', qrsPerFramePeriod,
    '-i', 'qrs/img%d.png',
    '-c:v', 'libx264',
    '-r', framerate,
    '-pix_fmt', 'yuv420p',
    name
  ];
  var ffmpeg = spawn('ffmpeg', settings, {
    stdio: 'inherit'
  });

  return new Promise(function(resolve, reject) {
    ffmpeg.on('error', reject);
    ffmpeg.on('close', resolve);
    ffmpeg.on('exit', function() {
      ffmpeg.kill();
    });
  });
};

module.exports = {
  generateQrs: generateQrs,
  generateVideo: generateVideo,
  cleanupQrs: cleanupQrs
};
