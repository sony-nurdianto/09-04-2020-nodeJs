const http = require ('http');
const hostname = '127.0.0.1';
const port = 3000;


const server = http.createServer((request,response) =>{
    response.statusCode = 200;
    response.setHeader ('Content-type','text/plain');
    response.end('hi i can node.js');

});

server.listen(port,hostname, () => {
    console.log(`server is runing at ${hostname}:${port}`)
});