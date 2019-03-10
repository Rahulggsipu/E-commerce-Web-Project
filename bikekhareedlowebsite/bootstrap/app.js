var express=require('express');
path=require('path');
var app=express();
app.use(express.static(path.join(__dirname,'views')));
app.use(express.static(path.join(__dirname,'css')));
app.use(express.static(path.join(__dirname,'js')));
app.use(express.static(path.join(__dirname,'images')));
app.use(express.static(path.join(__dirname,'fonts')));
//app.use(express.static(path.join(__dirname,'views')));
app.listen(3000);
console.log()