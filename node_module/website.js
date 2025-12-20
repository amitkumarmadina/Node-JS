const http = require("http");
const fs = require("fs");
const path = require("path");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  console.log(req.url);

  if (req.url === "/") {
    const filePath = path.join(__dirname, "index.html");
    const data = fs.readFileSync(filePath);
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);

  } else if (req.url == "/about") {
    const filePath = path.join(__dirname, "index.html");
    const data = fs.readFileSync(filePath);
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);

  } else if (req.url == "/link") {
    const filePath = path.join(__dirname, "Link.html");
    const data = fs.readFileSync(filePath);
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);

  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 Not Found</h1>");
  }
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
