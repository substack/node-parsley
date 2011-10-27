var parsley = require('../');
var net = require('net');

net.createServer(function (stream) {
    parsley(stream, function (req) {
        req.on('headers', function (headers) {
            stream.write([
                '200 HTTP/1.1 OK',
                'Connection: close',
                'Content-Type: text/plain',
                '',
                '',
                'pow',
                '',
            ].join('\r\n'));
            stream.end();
        });
    });
}).listen(7000);

console.log('ab -n 1000 -c 10 http://localhost:7000/');
