const http = require("http");
const fetch = require("node-fetch");

const port = 3033;

const server = http.createServer(async (req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    console.log("Pong");
    await fetch("http://ping:3030");
  }
  res.end();
});

server.listen(port, () => {
  console.log("Pong running!");
});
