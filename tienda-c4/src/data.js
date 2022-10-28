import MongoClient  from 'MongoClient ';

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27018/";

/*

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbo = db.db("tienda");
    dbo.createCollection("clientes",function(err,res){
        if (err) throw err;
        console.log("Colection created!");
        db.close();
    });
});

/*
var mongo= require('mongodv');
var MongoClient= require('mongodb').MongoClient;
var url= "mongodb://localhost:27017/mydb";
MongoClient.connect(url, function(err, db) {
if(err) throw err;
console.log("Databasecreated!");
db.close();
});


*/