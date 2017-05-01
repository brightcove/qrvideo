var kxing = require('kxing');
window.kxing = kxing;

var canvas = document.createElement('canvas');
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

  video.addEventListener('canplay', function testing() {
    video.play();
    testHarness();
    video.removeEventListener('canplay', testing);
  });
};

let i = 0;
function testHarness() {
  const result = test();

  console.log(result.text);

  if (!video.ended) {
    setTimeout(testHarness, 1000);
  }
}

function test() {
  ctx.drawImage(video, 0, 0);
  let result;
  try {
    result = kxing.KXing.getReader().decode(ctx.getImageData(0, 0, canvas.width, canvas.height));
  } catch (e) {
    console.log(e);
    result = {text: null};
  }

  return result;
};

window.test = test;
