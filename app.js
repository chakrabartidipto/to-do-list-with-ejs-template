//jshint esversion:6

const express= require("express");
const bodyParser=require("body-parser");
const date= require(__dirname+"/date.js");
const app= express();

const items=["Eat", "Code", "Sleep"];
const workItems=[];

app.set('view engine', 'ejs');


app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));



app.get("/", function(req,res){
    
    const day= date.getDay();
    res.render('list', {listTitle:day , addedList:items});

});

app.get("/work", function(req,res){

    res.render("list", {listTitle: "Work-List" , addedList:workItems});

})

app.get("/about", function(req,res){
    res.render ("about");
})




app.post("/work", function(req,res){

})

app.post("/", function(req,res){
   
    let item= req.body.newItem;

    if (req.body.list==="Work-List"){

        workItems.push(item);
        res.redirect("/work");

    } else {
        
        items.push(item);
        res.redirect("/");

    }

});


app.listen(3000, function(){
    console.log("Server running at Port 3000");
});