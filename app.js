const express = require('express')
const app = express()
var path = require('path');
app.use(express.static('public'))

var __dirname = 'public';
app.get('/', function (req, res) {
    res.sendFile('public/index.html');
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
