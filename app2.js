const mongoose=require('mongoose')
const bcrypt=require('bcryptjs')



var FormSchema=new mongoose.Schema({
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

FormSchema.pre('save',function(next){
    var form = this
    if(form.isModified("password")){
        bcrypt.genSalt(10,(salt,err)=>{
            bcrypt.hash(form.password,salt,(hash,err)=>{
                form.password=hash
            })
        })
        next()
    }
    else{
        next()
    }
    
})

var form=mongoose.model('Form',FormSchema)
module.exports={form}

