const http = require('http');
const app = require('./app');
const server = http.createServer(app);
server.listen(3331, () => console.log("[dinheiros-robot running]"));