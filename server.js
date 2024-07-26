const http = require ("http");

const port = 8081;

http.createServer((req,res)=> {
    res.writeHead(200, {"content-Type":"text/html"});
    res.write("<h2>hey server started...</h2>");
    res.end();
})
.listen(port,()=> {
    console.log(`NodeJS Server Started running on port ${port}`)
})