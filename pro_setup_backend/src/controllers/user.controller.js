import { asyncHandler } from "../utils/asyncHandler.js";


const registerUser = asyncHandler( async( req , res )=>{
    res.status(200).json ({
        message:" hello boss my register router is succusefull started"
    })
})

export {registerUser}