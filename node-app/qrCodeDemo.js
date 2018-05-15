var qr=require('qr-image');
var fs=require('fs');

var code=qr.image('https://developer.mozilla.org/en-US/',
    {type : 'svg'});

    var output=fs.createWriteStream('fmQrcode.svg');
    code.pipe(output);
