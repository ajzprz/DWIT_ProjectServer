const Users = require("../models/User");

const validate = async (req,res,next) =>{
    const {firstName, lastName, email , password} = req.body
    // const email = await Users.findOne({email})
    if(firstName === ''|| lastName === '' || email === '' || password ==='' ){
        res.status(204).send("Value Cannot be Empty")
        console.log('Auth: Fields cannot be empty')
    }
    //Code Need for email duplication
    // if(req.body.email === email ){
    //     res.status(409).send("Email cannot be duplicated")
    // }
    else{
        console.log('validated')
        next()
    }
}

module.exports = {validate}