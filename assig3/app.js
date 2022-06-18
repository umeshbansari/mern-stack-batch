const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express()
// conn to mongodb 
mongoose.connect("mongodb://localhost/todo_express" ,{ 
useNweUrlParser: true, 
useUnifiedTopology: true});
// middle wares
ap.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
app.set("view engine ,ejs ");
//routes

// server config 
app.listen(3000 , () => console.log("server started listening on port") );
