var mongoose=require('mongoose')
const Schema=mongoose.Schema
let form=new Schema({
    name :{
        type :String,
       
    },
    email :{
        type :String
    },
    password :{
        type :String
    },
    mobileno :{
        type :Number
    },
    selectedOption :{
        type : String
    }
    

})
module.exports=mongoose.model('Form',form)