var http = require('http')
var fs = require('fs')

var server = http.createServer()

server.on('request', function (req, res) {
    var url = req.url
    if (url === '/') {
        res.end('hello world')
    } else if (url === 'a.txt'){
        fs.readFile('path',function (err,data) {  
            if(err){
                res.end('404 not found')
                return 
            }

            //
        })
    }else {
        res.end('404 not found!')
    }
})

server.listen(3000, function (param) {
    console.log('the server listen on 3000.....')
})