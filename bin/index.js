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
  var ec_level = options.ec_level;
  var size = options.size;
  var len = options.length;
  var qrsPerFrame = options.qrsPerFramePeriod;

  var num = len * qrsPerFrame;

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

function moveQrs() {
  return fs.move(qrsDir, process.cwd());
}

function generateVideo(options) {
  var framerate = options.framerate;
  var qrsPerFramePeriod = options.qrsPerFramePeriod;
  var name = options.name;
  var audio = options.audio;

  var settings = [
    '-framerate', qrsPerFramePeriod,
    '-i', path.join(qrsDir, 'img%d.png'),
    '-i', audio,
    '-vcodec', 'libx264',
    '-r', framerate,
    '-pix_fmt', 'yuv420p',
    name + '.mp4'
  ];
  console.log(settings);
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
  cleanupQrs: cleanupQrs,
  moveQrs: moveQrs
};
