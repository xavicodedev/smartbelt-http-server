var http = require('http');
var server = http.createServer ( 
    
function(request,response){
    response.writeHead(200,{"Content-Type":"application/json"});
    if(request.method == "GET")
        {
            response.end("received GET request.")
        }
    else if(request.method == "POST")
        {
            //response.send("received POST request.");
            response.end(request.body);
        }
    else
        {
            response.end("Undefined request .");
        }

    
}





);

server.listen(process.env.PORT || 5000)
console.log("Server running...");