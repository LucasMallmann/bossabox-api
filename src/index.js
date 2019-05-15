const server = require('./server')
const port = process.env.PORT || 3000
console.log(`Server is listening on http://localhost:${port}`)
server.listen(port)
