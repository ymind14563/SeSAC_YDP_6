var http = require(`http`);
var url = require(`url`);
var fs = require(`fs`);

http.createServer((req, res) => {
    var q = url.parse(req.url, true);
    var filename = '.' + q.pathname;

    fs.readFile(filename, (err, data)=> {
        if(err) {
            res.writeHead(404, {'Content-Type' : 'text/html'});
            return res.end(`404 Not found`);
        }
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write(data);
        return res.end(`file access sucsess`);
    })

}).listen(3000, ()=>{
    console.log(`3000 port conneted`);
});
