const express=require("express");
const app=express();
const path=require('path')

app.set('view engine','ejs');
app.use(express.json())
app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/login.html',(req,res)=>{
    res.render('login')
})

app.get('/about.html',(req,res)=>{
    res.render('about')
})

app.listen(3000)
