const restify= require("restify");
const restify_plugins= require("restify").plugins;
numRPS =3;
var rateLimit = restify_plugins.throttle({burst:global.numRPS,rate:global.numRPS,ip:true});

const addTwoNumber= (n1,n2) => {
    return n1+n2;
}
var server = restify.createServer();
numRequests=0;
// setInterval(function() { 
//     console.log(global.numRequests)
//     global.numRequests=0;
    
//     }, 1000);


server.get("/",  rateLimit, (req,res, next)=>{
    console.log("ID="+req.query());
    res.send("Success")
    next();
});

server.get("/alive", (req,res, next)=>{
res.send("Alive")
});



const port=3040;
server.listen(port,()=> {
    console.log("hello i'm listening to port "+port);
})