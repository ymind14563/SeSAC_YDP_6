const http = require(`http`);

http.createServer((req, res) =>  {
    var _url = req.url;
    res.writeHead(200, {'Content-Type' : `text/html; charset=utf-8`});
    res.write(`<h2> Hello2 World2 </h2>`);
    res.end(`<p> ${_url} </p>`);    
}).listen(3000,()=>{
    console.log(`3000 포트에서 실행 중`)});