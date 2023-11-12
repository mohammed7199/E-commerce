
// const usernameSchema = {
//     notEmpty:{
//         errormessage:'username is required'
//     }
// }

const passwordSchema = {
    notEmpty:{
        errorMessage:'password is required'
    },
    isLength:{
        options:{min:8,max:128},
        errorMessage:'password should be between 8 - 128 characters'
    }
}

const emailRegisterSchema = {
    notEmpty:{
        errorMessage:'email is required'
    },
    isEmail:{
        errorMessage:'invalid email format'
    },

}



const userRegisterValidationSchema = {
    email:emailRegisterSchema,
    password:passwordSchema
}

module.exports = 
    userRegisterValidationSchema
