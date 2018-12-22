const express = require('express');
const path = require('path');
const open = require('open');

let port = 3000;
let app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'../src/index.html'));
})

app.listen(port, err => {
    if(err){
        console.log(err);
    }else{
        open('http://localhost:' + port);
    }   
})