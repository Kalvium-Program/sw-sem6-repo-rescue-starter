const http = require("http");

const PORT = process.env.PORT || 3000;
const notices = [
  { id: 1, club: "Coding Club", text: "Hack night on Friday, 6 PM" },
  { id: 2, club: "Music Club", text: "Open mic auditions next week" },
];

function handler(req, res) {
  if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ status: "ok" }));
  }
  if (req.url === "/notices") {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(notices));
  }
  res.writeHead(404);
  res.end("Not found");
}

if (require.main === module) {
  http.createServer(handler).listen(PORT, () => {
    console.log(`Notice board running on http://localhost:${PORT}`);
  });
}

module.exports = { handler, notices };
