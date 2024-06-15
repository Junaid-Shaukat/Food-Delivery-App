import mongoose from "mongoose";

export const connectDB=async ()=>{
    await mongoose.connect("mongodb+srv://junaid:9sH6xiVeUD7kD5JQ@cluster0.pmitbun.mongodb.net/Food-delivery").then(()=>console.log("Database is connected"));
}