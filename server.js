var express = require('express')
var app = express();

var fs = require('fs');
var path = require('path');

var port = process.env.PORT || 3000;
var cmaccApi = require('cmacc-api');

app.get("/cmacc/*", function (req, res, next) {
    var file = path.join(__dirname, req.url);
    fs.readFile(file, function (err, data) {
        res.send(data);
    })

});

app.use('/node_modules', express.static('node_modules'))

var cmaccDir = path.join(__dirname, "/cmacc");
app.use("/api", cmaccApi(cmaccDir));

app.use(express.static(__dirname));

app.listen(port, function () {
    console.log('Example app listening on port 3000!');
});