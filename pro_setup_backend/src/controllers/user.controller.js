import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import {User} from "../models/user.module.js";
import {uploadOnCloudinery} from "../utils/cloudinary.js";
import {Apiresponce} from "../utils/ApiResponce.js"

const registerUser = asyncHandler(async (req, res) => {
  //get user details from frontend
  //validetion not empty
  //check for image check ,fro avatar
  //upload them to cloudinary , avatar
  //create user object - create entry in db
  //remove password and refresh tocken field from response
  //check for user creation
  // return res
  const { fullname, email, username, password } = req.body;

  console.log("email", email, "fullname", fullname);
         

     /// this condition is advance code for industri stender
  if (
      [fullname , email , username , password].some((field)=>
        field?.trim() === ""
    )
  ){
        throw new ApiError(400 , "All field are require and compalsure")
  }

 const existedUseer = User.findOne({
    $or:[{username},{ email},{fullname}]
  })

  if (existedUseer) {
    throw new ApiError(409 , " User with email or username and fullname allready exists")
    
  }

   const awatarLocalpath = req.files?.avatar[0] ?.path;
   const coverImageLocalpath = req.files?.coverImage[0]?.path;

   if (!awatarLocalpath) {
    throw new ApiError(400 , "Awatar file is required")
    
   }


   const avatar = await uploadOnCloudinery(awatarLocalpath)
   const awatarImage = await uploadOnCloudinery(coverImageLocalpath)


   if(!avatar){

        throw new ApiError(400 , "Awatar file is required")
   }

   const user = await User.create({
    fullname,
    avatar:avatar.url,
    coverImage:coverImage?.url || "" ,
    email,
    password,
    username:username.toLowerCase()
   })

     const createUser = await User.findById(user._id).select(
        "-password -refreshToken"
     )
     if (!createUser) {
        throw new ApiError(500  , "Something went wrong while register the user")
        
     }

     return res.satatus(201).json(
        new Apiresponce(200 , createUser, "User resiter successefully")
     )

   /// menovely check the authenty getion for email fullname all function
//   if (fullname === "") {
//     throw new ApiError(400, "fullname is require");
//   }

//   if (email === "") {
//     throw new ApiError(400, "email is require");
//   }

//   if (username === "") {
//     throw new ApiError(400, "usernameis require");
//   }

//   if (password === "") {
//     throw new ApiError(400, "password is require");
//   }
});

export { registerUser };
