var express = require("express");
var app = express(); 
var bodyparser = require("body-parser"); 

const dotenv =  require('dotenv') 
dotenv.config()


app.set("view engine" , "ejs");
app.use(express.static(__dirname + '/public'));

app.get("/" , function(req , res){
    res.render("index");
});

app.get("/articles/topfive_array" , function(req,res){
    res.render("articles/topfive_array");
});

app.get("/array/array1", function(re,res){
    res.render("array/array1");
});
app.get("/array/array2", function(re,res){
    res.render("array/array2");
});
app.get("/array/array3", function(re,res){
    res.render("array/array3");
});
app.get("/array/array4", function(re,res){
    res.render("array/array4");
});
app.get("/array/array5", function(re,res){
    res.render("array/array5");
});

app.get("/articles/topfive_strings" , function(req,res){
    res.render("articles/topfive_strings");
});
app.get("/articles/topfive_strings_2" , function(req,res){
    res.render("articles/topfive_strings_2");
});

app.get("/strings/string1", function(re,res){
    res.render("strings/string1");
});
app.get("/strings/string2", function(re,res){
    res.render("strings/string2");
});
app.get("/strings/string3", function(re,res){
    res.render("strings/string3");
});
app.get("/strings/string4", function(re,res){
    res.render("strings/string4");
});
app.get("/strings/string5", function(re,res){
    res.render("strings/string5");
});
app.get("/strings/string6", function(re,res){
    res.render("strings/string6");
});
app.get("/strings/string7", function(re,res){
    res.render("strings/string7");
});
app.get("/strings/string8", function(re,res){
    res.render("strings/string8");
});
app.get("/strings/string9", function(re,res){
    res.render("strings/string9");
});
app.get("/strings/string10", function(re,res){
    res.render("strings/string10");
});


app.get("/articles/topfive_matrix" , function(req,res){
    res.render("articles/topfive_matrix");
}); 

app.get("/matrix/matrix1", function(re,res){
    res.render("matrix/matrix1");
});

app.get("/matrix/matrix2", function(re,res){
    res.render("matrix/matrix2");
});

app.get("/matrix/matrix3", function(re,res){
    res.render("matrix/matrix3");
});

app.get("/matrix/matrix4", function(re,res){
    res.render("matrix/matrix4");
});

app.get("/matrix/matrix5", function(re,res){
    res.render("matrix/matrix5");
});

app.listen(process.env.PORT || 3000 , function(){
    console.log("server started"); 
});