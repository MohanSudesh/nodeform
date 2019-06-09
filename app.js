const express = require('express')
const bodyParser=require('body-parser')
// const cors = require('cors');
const _=require('lodash');
const mongoose = require('mongoose')
mongoose.Promise=global.Promise

let {form}=require('./app2')

// const formRoutes=express.Router();
const port =4000;

const app=express();
// app.use(cors())
app.use(bodyParser.json())

mongoose.connect(("mongodb://localhost:27017/mongoform"));
const connection=mongoose.connection
connection.once('open',()=>{console.log('Connection Succesful')})

app.post('/users',(req,res)=>{
// formRoutes.route('/add').post((req,res)=>{
    // console.log("Sudesh1")
    // var body=_.pick(req.body,['name','email','password'])
    var forms= new form(req.body);
    // console.log("Sudesh2")
    forms.save()
    .then(doc=>{
        res.status(200).send(doc);
    })
    .catch(err=>{
        res.status(400).send("Unable to save data")
    })
})



app.listen(port,()=>{console.log('Server is running in port')})