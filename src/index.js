var qrcode = require('qrstuv');

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.id = 'qr-canvas';
canvas.style.position = 'absolute';
canvas.style.left = '-9999px';
canvas.style.top = '-9999px';

document.body.appendChild(canvas);

exports.check = function(video) {
  if (!document.body.contains(canvas)) {
    document.body.appendChild(canvas);
  }

  var vidComputedStyle = getComputedStyle(video);
  var width = parseInt(vidComputedStyle.width, 10);
  var height = parseInt(vidComputedStyle.height, 10);

  canvas.width = width;
  canvas.height = height;

  ctx.drawImage(video, 0, 0);

  return qrcode.decode().then(function(result) {
    return Number(result);
  });
};
