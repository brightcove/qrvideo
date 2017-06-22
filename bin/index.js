var fs = require('fs-extra')
var qr = require("qr-image");
var path = require('path');
var spawn = require('child_process').spawn;
var Promise = require('bluebird');
var streamToPromise = require('stream-to-promise');
var os = require('os');
var osTmp = os.tmpdir();
var qrsDir = path.join(osTmp, 'qrs');
var handlebars = require('handlebars');
var timecodes = require('node-timecodes');

function getDir(temp) {
  return temp ? qrsDir : path.join(process.cwd(), 'qrs');
}

function generateQrs(options) {
  var ec_level = options.ec_level;
  var size = options.size;
  var len = options.length;
  var qrsPerFrame = options.qrsPerFramePeriod;
  var temp = options.temp;
  var json = function (opts) { return opts.frame; };

  if (options.json) {
    json = handlebars.compile(fs.readFileSync(path.join(process.cwd(), options.json), 'utf8'));
  }

  var num = len * qrsPerFrame;

  function generateQr(i) {
    var j = json({
      frame: i,
      timestamp: timecodes.fromSeconds(i, {
        frameRate: 30
      })
    });
    return qr.image(j, {
      ec_level: ec_level,
      size: size
    }).pipe(fs.createWriteStream(path.join(getDir(temp), 'img' + i + '.png')));
  }

  return fs.ensureDir(qrsDir).then(function () {
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
  console.log(process.cwd(), qrsDir);
  return fs.move(qrsDir, process.cwd());
}

function generateVideo(options) {
  var framerate = options.framerate;
  var qrsPerFramePeriod = options.qrsPerFramePeriod;
  var name = options.name;
  var audio = options.audio;
  var ext = options.extension;

  let audioOpt = []
  if (audio) {
    audioOpt.push('-i', audio === 'default' ? './default_silent_audio_360s.mp3' : audio)
  }
  var settings = [
    '-framerate', qrsPerFramePeriod,
    '-i', path.join(getDir(options.temp), 'img%d.png'),
    ...audioOpt,
    '-c:v', 'libx264',
    '-pix_fmt', 'yuv420p',
    '-r', framerate,
    '-shortest', '-y',
    name + '.' + ext
  ];

  console.log(settings);
  var ffmpeg = spawn('ffmpeg', settings, {
    stdio: 'inherit'
  });

  return new Promise(function (resolve, reject) {
    ffmpeg.on('error', reject);
    ffmpeg.on('close', resolve);
    ffmpeg.on('exit', function () {
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
