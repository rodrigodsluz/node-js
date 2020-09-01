const http = require('http')

//routes
const routes = require('./routes')

const server = http.createServer(routes.handler)

console.log(routes.someText)
  
server.listen(8000)