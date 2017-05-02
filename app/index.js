var qrcode = require('qrstuv');

var canvas = document.createElement('canvas');
canvas.id = 'qr-canvas';
var ctx;
var video = document.querySelector('video');

if (video.readyState > 1) {
  init();
} else {
  video.addEventListener('loadedmetadata', init);
}

function init() {
  var vidComputedStyle = getComputedStyle(video);

  canvas.width = parseInt(vidComputedStyle.width, 10);
  canvas.height = parseInt(vidComputedStyle.height, 10);

  document.body.appendChild(canvas);
  ctx = canvas.getContext('2d');
  window.ctx = ctx;
};

let i = -1;
let timeout;
function testHarness() {
  i++;
  ctx.drawImage(video, 0, 0);
  var newDiv = document.createElement('div');
  var canvas = document.createElement('canvas');
  newDiv.appendChild(document.createTextNode(i));
  newDiv.appendChild(canvas);
  canvas.getContext('2d').drawImage(video, 0, 0);
  document.body.appendChild(newDiv);
    qrcode.decode().then(function(result) {
      const ct = video.currentTime;
      const to = 1000 - ((ct - Math.floor(ct)) - 0.25) * 1000;
      const eq = Number(result) === Math.floor(ct);
      if (eq) {
        console.log("EQUAL", result, i, ct.toFixed(2), to.toFixed(2));
      } else {
        console.error("NOT EQUAL", result, i, ct.toFixed(2), to.toFixed(2));
      }

      if (!video.ended) {
        timeout = setTimeout(testHarness, to);
      }
    }).catch(function(e) {
      const ct = video.currentTime;
      const to = 1000 - ((ct - Math.floor(ct)) - 0.25) * 1000;
      console.error(e, ct.toFixed(2), video.currentTime.toFixed(2), to.toFixed(2));

    });
}

function test() {
  ctx.drawImage(video, 0, 0);
  return qrcode.decode();
}

window.test = test;
window.start = function() {
  video.play();
  setTimeout(testHarness, 250);
};
window.qrcode = qrcode;
window.stop = () => {
  clearTimeout(timeout);
  video.pause();
}
