const http = require('http');
const lodash = require('lodash');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    console.log('request made');

    res.setHeader('Content-Type','text/html');

    const num = lodash.random(0,20);
    console.log(num);

    
    let path = './views/';

    switch(req.url){
    case '/':
        path += 'homepage.html';
        res.statusCode = 200;
        break;
    case '/about':
        path += 'about.html';
        res.statusCode = 200;
        break;
    case '/about-us':
        res.statusCode = 301;
        res.setHeader('Location', '/about');
        res.end();
        break;
    default:
        path += '404.html';
        res.statusCode = 404;
        break;

}
    // res.writeHead(200, {'Content-Type': 'text/html'});
    // res.write('Hello world!')
    // res.end();
    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err);
            res.end();
        }else{
            // res.write(data);
            res.end(data);
        }
    })
});


////---------Routing------////



// local host

server.listen(8080, 'localhost',() => {
    console.log('listening to port 8080');
});