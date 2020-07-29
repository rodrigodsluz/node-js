const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><head><title>Hello User</title></head><body><h1>Welcome to Nodejs Page</h1><form action="/create-user" method="POST">Username<input type="text" name="username"/><button type="submit">Submit</button></form></body></html>')
    return res.end();
  }

  if (url === '/users') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><head><title>List of User</title><body><ul><li>User 1</li><li>User 2</li</ul></body></head></html>')
    return res.end();
  }

  if (url === '/create-user' && method === 'POST') {
    const body = [];

    req.on('data', (chunk) => {
      body.push(chunk)
    })

    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody.split('=')[1]); // username=whatever-the-user-entered
    });
    res.statusCode = 302;
    res.setHeader('Location', '/');
    res.end();

  }

  /* res.setHeader('Content-Type', 'text/html');
  res.write('<html><head><title>Res Page</title></head><body>Page not found</body></html>');
  res.end(); */

}

exports.handler = requestHandler;