const asyncHandler = (reqHandler) =>{
    (req , res , next)=>{
        Promise.resolve(reqHandler(req , res , next)).
        catch((err) => next(err))
    }
}

export {asyncHandler}








//    // next method create by async function or handle error 
// const asyncHandler = (fn) => asymc(req , res , next)=>{

//     try {
//         await fn(res , req , next)
        
//     } catch (error) {
//         res.this.status(error.code || 500).json({
//             success:false,
//             message:error.message
//         })
        
//     }

// }