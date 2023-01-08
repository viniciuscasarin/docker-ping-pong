const http = require("http");
const fetch = require("node-fetch");

const port = 3000;

const server = http.createServer(async (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  if (req.url === "/start" && req.method === "GET") {
    await fetch("http://ping:3030");
  }
  res.end();
});

server.listen(port, () => {
  console.log(`Server running!`);
});
