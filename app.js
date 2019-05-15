const express = require('express')
const app=express();
const bodyParser=require('body-parser')
const cors = require('cors');
const port =4000;
const mongoose = require('mongoose')
const formRoutes=express.Router();
let Form=require('./app2')

mongoose.Promise=global.Promise
app.use(cors())
app.use(bodyParser.json())
mongoose.connect(("mongodb://localhost:27017/mongoform"));
const connection=mongoose.connection

connection.once('open',()=>{console.log('Connection Succesful')})
formRoutes.route('/add').post((req,res)=>{
    let form= new Form(req.body);
    form.save()
    .then(form=>{
        res.status(200).json({'form' :'form is submitted succesfully'});
    })
    .catch(err=>{
        res.status(400).send("Unable to save data")
    })
})


app.use('/mongoform',formRoutes)

app.listen(port,()=>{console.log('Server is running in port')})