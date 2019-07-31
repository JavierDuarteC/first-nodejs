var express = require('express')
var path = require('path')
var React = require('react')
var ReactDOM = require('react-dom')
var Clock = require('./reloj.js')

var app = express()
app.use(express.static('/'))
app.listen(3000, function () {
    console.log('Servicio iniciado en el puerto 3000!')
})

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'))
})
app.get('/bundle.js', function (req, res) {
    res.sendFile(path.join(__dirname, 'bundle.js'))
})

const element = (
    <div>
        <h1>Hola, mundo cruel!</h1>
        <h2>It is {Clock.render()}.</h2>
    </div>
)
ReactDOM.render(element,
    document.getElementById('main')
)