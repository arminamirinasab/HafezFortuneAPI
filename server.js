const http = require("http");
const fs = require("fs");
let fal;

try {
  fal = JSON.parse(fs.readFileSync("horescope.json"));
} catch (err) {
  console.error("Error reading horescope.json:", error);
}

http
  .createServer((req, res) => {
    if (req.url === "/all" || (req.url === "/all/" && req.method == "GET")) {
      res.writeHead(200, { "Content-type": "application/json" });
      res.end(JSON.stringify(fal));
    } else if (req.url === "/fal" || (req.url === "/fal/" && req.method == "GET")) {
      res.writeHead(200, { "Content-type": "application/json" });
      res.end(JSON.stringify(fal[Math.floor(Math.random() * 200) - 1]));
    } else {
      res.writeHead(400);
      res.end("Bad Request");
    }
  })
  .listen(process.env.PORT || 3000, () => {
    console.log("Server is running successfuly ...");
  });
