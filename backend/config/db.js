import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://junaiddshaukat:bIuaudBZ99LubC9n@cluster0.cxbiek1.mongodb.net/food-del").then(()=>console.log("Database is connected"));
}



// import mongoose from "mongoose";

// // Simplified URI without appName and using individual hosts
// const mongoURI = "mongodb://junaiddshaukat:bIuaudBZ99LubC9n@cluster0-shard-00-00.cxbiek1.mongodb.net:27017,cluster0-shard-00-01.cxbiek1.mongodb.net:27017,cluster0-shard-00-02.cxbiek1.mongodb.net:27017/test?ssl=true&replicaSet=atlas-6tw9t6-shard-0&authSource=admin&retryWrites=true&w=majority";

// export const connectDB = async () => {
//     try {
//         await mongoose.connect(mongoURI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log("Database is connected");
//     } catch (error) {
//         console.error("Database connection error:", error);
//         process.exit(1);
//     }
// };



// import mongoose from "mongoose";
// const mongoURI = "mongodb+srv://junaiddshaukat:bIuaudBZ99LubC9n@cluster0.cxbiek1.mongodb.net/app";
// export const connectDB = async () => {
//     try {
//         await mongoose.connect(mongoURI)
//         console.log("Database is connected");
//     } catch (error) {
//         console.error("Database connection error:", error.message);
//         process.exit(1);
//     }
// };





// // const mongoURI = "mongodb://junaiddshaukat:bIuaudBZ99LubC9n@cluster0-shard-00-00.cxbiek1.mongodb.net:27017,cluster0-shard-00-01.cxbiek1.mongodb.net:27017,cluster0-shard-00-02.cxbiek1.mongodb.net:27017/test?ssl=true&replicaSet=atlas-6tw9t6-shard-0&authSource=admin&retryWrites=true&w=majority";
// export const connectDB = async () => {
//     try {
//             await mongoose.connect(mongoURI);
//             console.log("Database is connected");
//         } catch (error) {
//                 console.error("Database connection error:", error.message);
//                 process.exit(1);
//             }
//         };

//        // mongodb+srv://junaiddshaukat:bIuaudBZ99LubC9n@cluster0.cxbiek1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
        
//         //mongodb+srv://junaid-shaukat:2345654335@cluster0.zgtmnp5.mongodb.net/?
        
        