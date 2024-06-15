import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";

import foodRouter form "./routes/foodRouter.js"


//app config
const app = express();
const port = 4000;

//middleware

app.use(express.json());
app.use(cors());

//DB connection

connectDB();

//api endpoint

app.use("/api/food",foodRouter)

app.get("/", (req, res) => {
    res.send("api working")
})

app.listen(port, () => {
    console.log("server is running on port", port)
})

