const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    if(req.url === '/'){
        res.statusCode = 200;
        res.end('Welcome to our homepage');
    }else if(req.url === '/about'){
        res.statusCode = 200;
    res.end('this is about page');
    }else{
        res.statusCode = 404;
        res.end('404 page not found');
    }
});

server.listen(port, () => {
    console.log(`Server running at port ${port}`);
});