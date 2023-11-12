const User = require('../models/user')
const {validationResult} = require('express-validator')
const usersCltr = {}

usersCltr.register = async  (req,res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    const body = req.body
    console.log(body,'body')
    try {
        const user = new User(body)
        console.log(body)
        await user.save()
        res.json({
            message:'User registerd successfully',
            user
        })
    } catch(e){
        res.json(e)
    }
}

module.exports = usersCltr