const
  express = require('express'),
  port = process.env.PORT || 3000,
  path = require('path')

const app = express()

app.use(history())
app.use(serveStatic(path.join(__dirname, '/dist/pwa')))
app.listen(port)