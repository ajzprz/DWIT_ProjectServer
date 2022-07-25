const Users = require("../models/User");
const jwt = require('jsonwebtoken');


const validateRegister = async (req,res,next) =>{
    const {firstName, lastName, email , password} = req.body
    if(firstName === ''|| lastName === '' || email === '' || password ==='' ){
        res.status(204).send("Value Cannot be Empty")
        console.log('Auth: Fields cannot be empty')
    }

    else{
        console.log('validated')
        next()
    }
}

const validateDuplicateEmail = async (req,res,next) =>{
  try {
    const{email} = req.body
    const compareEmail = await Users.find({email:email},async(err,user)=>{
      if(user[0]){
        res.status(401)
        console.log('duplicate email please use another email')
      }
      else{
        next()
      }
    })
  } catch (error) {
    console.log(error)
  }
}

const validateLogin = async (req,res,next) =>{
    const {email , password} = req.body
    if(email === '' || password ==='' ){
        res.status(204).send("Value Cannot be Empty")
        console.log('Auth: Fields cannot be empty')
    }
    else{
        console.log('validated')
        next()
    }
}

const requireAuth = (req, res, next) => {
  const {jwt : token} = req.cookies
  try {
    if (jwt.verify(token, 'mern-secret'))
    next();

  } catch (error) {
    res.send("Incorrect Password")
    console.error(error)
  }  
};



module.exports = {validateRegister, validateDuplicateEmail, validateLogin, requireAuth}