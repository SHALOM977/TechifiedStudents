// console.log('Hello, World!');
// const { log } = require("console")


;
//Import a module
// const math = require("./math")

// console.log(math.add("frol"))

// this is for ES6 module
// import{add ,substract} from './math.js'

// console.log(substract(10,300))




// raw- server.js(no NPM needed)

const http = require ('http')
const server = http.createServer((req, res) =>{
    // req: Incoming request (metbod, url, headers)
    // res:Outgoing response(write, end)

    if(req.method ==='GET' && req.url ==='/'){
        // Manual route check
        res.writeHead(200,{'Content-Type': 'text/plain'})//Manual headers
        res.end('Hello from Raw Node.js')//Send body and close
    }else{
       res.writeHead(404,{'Content-Type': 'text/plain'});
        res.end('Not Found: (')//Basic error 
    }
}
);

const PORT = 5000;
server.listen(PORT,() =>{
    console.log(`Raw server running on http://local:${PORT}`)
})