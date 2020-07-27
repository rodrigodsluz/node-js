const http = require('http')

const server = http.createServer((req, res) => {
  //console.log(req)
  //process.exit()

  console.log(req.url, req.method, req.headers)
  res.setHeader('Content-Type', 'text/html')
  res.write('<html>')
  res.write('<head><title>Node.JS</title></head>')
  res.write('<body><h1>Hello from my Node.JS server!</h1></body>')
  res.write('</html>')
  res.end()
})

server.listen(8000)