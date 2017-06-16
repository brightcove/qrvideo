var Canvas = require('canvas');
var Image = Canvas.Image;
var fs = require('fs-extra');
var timecodes = require('node-timecodes');


function drawBorder(ctx, width, offset, color) {
  var prevWidth = ctx.lineWidth;
  var prevColor = ctx.fillStyle;

  ctx.lineWidth = width;
  ctx.strokeStyle = color || prevColor;

  ctx.beginPath();
  ctx.moveTo(offset, offset);
  ctx.lineTo(1280-offset, offset);
  ctx.lineTo(1280-offset, 720-offset);
  ctx.lineTo(offset, 720-offset);
  ctx.lineTo(offset, offset-width/2);
  ctx.stroke();
  ctx.closePath();

  ctx.lineWidth = prevWidth;
  ctx.strokeStyle = prevColor;
}

function drawPattern(path, x, y) {
  return function(canvas) {
    return fs.readFile(path)
    .then(function(buffer) {
      var ctx = canvas.getContext('2d');
      var img = new Image();
      img.src = buffer;

      console.log('????', path, x, y);

      ctx.drawImage(img, x, y);

      return canvas;
    });
  };
}

fs.readFile('qrs/img0.png')
.then(function(buffer) {
  var canvas = new Canvas(1280, 720);
  var ctx = canvas.getContext('2d');

  // fill background
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, 1280, 720);

  // draw qrcode
  var img = new Image();
  img.src = buffer;
  ctx.drawImage(img, 1280/(4/3)-174/2, 720/2-174/2);

  // draw timestamp
  ctx.fillStyle = '#a4a4a4';
  ctx.font = "30px san-serif";
  ctx.fillText(timecodes.fromSeconds(0, {
    frameRate: 30
  }), 1280/2-160/2, 720/2+28/2);

  // drawBorder(ctx, 1, 0);
  // drawBorder(ctx, 1, 50, 'red');
  drawBorder(ctx, 10, 5, 'red');
  drawBorder(ctx, 10, 15, 'green');
  drawBorder(ctx, 10, 25, 'blue');

  return canvas;
})
.then(function(canvas) {
  var ctx = canvas.getContext('2d');

  return fs.readFile('./bc-logo-stacked-ondark.png')
  .then(function(buffer) {
    var img = new Image();
    img.src = buffer;
    ctx.drawImage(img, 1280/4-176/2, 720/2-163/2);

    return canvas;
  })
})
.then(function(canvas) {
  var ctx = canvas.getContext('2d');

  return fs.readFile('./img_208x176_3x16bit_RGB_color_SMPTE_RP_219_2002.png')
  .then(function(buffer) {
    var img = new Image();
    img.src = buffer;
    ctx.drawImage(img, 1280/2-208/2, 720-50-176);

    return canvas;
  })
})
.then(drawPattern('patterns/img_100x100_3x16bit_RGB_bars_horizontal_square_0002_0xhalfPI.png', 45+100*0, 45))
.then(drawPattern('patterns/img_100x100_3x16bit_RGB_bars_horizontal_square_0004_0xhalfPI.png', 45+100*1, 45))
.then(drawPattern('patterns/img_100x100_3x16bit_RGB_bars_horizontal_square_0008_0xhalfPI.png', 45+100*2, 45))
.then(drawPattern('patterns/img_100x100_3x16bit_RGB_bars_horizontal_square_0016_0xhalfPI.png', 45+100*3, 45))
.then(drawPattern('patterns/img_100x100_3x16bit_RGB_bars_horizontal_square_0032_0xhalfPI.png', 45+100*4, 45))
.then(drawPattern('patterns/img_100x100_3x16bit_RGB_bars_horizontal_square_0064_0xhalfPI.png', 45+100*5, 45))
.then(drawPattern('patterns/img_100x100_3x16bit_RGB_bars_vertical_square_0002_0xhalfPI.png', 45+100*6, 45))
.then(drawPattern('patterns/img_100x100_3x16bit_RGB_bars_vertical_square_0004_0xhalfPI.png', 45+100*7, 45))
.then(drawPattern('patterns/img_100x100_3x16bit_RGB_bars_vertical_square_0008_0xhalfPI.png', 45+100*8, 45))
.then(drawPattern('patterns/img_100x100_3x16bit_RGB_bars_vertical_square_0016_0xhalfPI.png', 45+100*9, 45))
.then(drawPattern('patterns/img_100x100_3x16bit_RGB_bars_vertical_square_0032_0xhalfPI.png', 45+100*10, 45))
.then(drawPattern('patterns/img_100x100_3x16bit_RGB_bars_vertical_square_0064_0xhalfPI.png', 45+100*11, 45))
.then(function(canvas) {
  var img = fs.createWriteStream('./testcard.png');
  var stream = canvas.pngStream();

  stream.on('data', function(chunk) {
    img.write(chunk);
  });

  stream.on('end', function() {
    console.log('saved png');
  });

})
