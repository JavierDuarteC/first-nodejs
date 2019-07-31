var express = require('express')
var path = require('path')
var mongodb = require('mongodb')

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

app.get('/dataFromDB', function (req, res) {
    mongoURL = 'mongodb://localhost:27017/database_first_node';
    mongodb.connect(mongoURL, function (err, db) {
        db.collection('example').find().toArray(function (err, doc) {
            if(err) throw err;  
            res.json(doc);
            db.close();
        });
    });
})