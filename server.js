const http = require("node:http");

const server =  http.createServer(function(req,res){

    //replai with hello
    if(req.url === "/getsecret")
    {
        res.end("there is no secret data");
    }
    res.end("heloo duniya");
});

server.listen(7777);

// express is used to make http server it is a frame work 


