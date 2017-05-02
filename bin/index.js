var qr = require("qr-image");
var fs = require('fs');
var path = require('path');

for (var i = 0; i < 100; i++) {
  qr.image(i, {
    ec_level: 'Q',
    size: 6
  }).pipe(fs.createWriteStream(path.join('qrs', 'img' + i + '.png')));
}
