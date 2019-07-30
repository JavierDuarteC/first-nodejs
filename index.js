var express = require('express')
var path = require('path')

var app = express()
app.use(express.static('/'))
app.listen(3000,function(){
    console.log('Servicio iniciado en el puerto 3000!')
})

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname,'index.html'))
})
