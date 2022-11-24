import userSchema from "./UserSchema.js";

// insert user
export const insertUser=(obj)=>{
    return userSchema(obj).save()
}

// get all users
export const getAllUsers=()=>{
    return userSchema.find()
}

// get users by ID
export const getUserById=(_id)=>{
    return userSchema.findById(_id)
}

// update user
export const updateUser=(_id,obj)=>{
    return userSchema.findByIdAndUpdate(_id,obj,{new:true})
}

// delete user
export const deleteUser=(_id)=>{
    return userSchema.findByIdAndDelete(_id)
}