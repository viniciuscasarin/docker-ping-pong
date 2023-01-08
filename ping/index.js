const http = require("http");
const fetch = require("node-fetch");

const port = 3030;

const server = http.createServer(async (req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    console.log("Ping");
    await fetch("http://pong:3033");
  }
  res.end();
});

server.listen(port, () => {
  console.log("Ping running!");
});
