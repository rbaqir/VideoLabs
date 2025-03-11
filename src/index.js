// require("dotenv").config({path: './env'})

import dotenv from "dotenv";
import connetDB from "./db/connection.js";
import path from "path";

dotenv.config({
    path: './env'
})

// const app = express();


connetDB();










/*
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error)=>{
        console.log("ERROR: ", error);
        throw error
    }) 
    
    app.listen(process.env.PORT, ()=>{
        console.log(`App is listening on port ${process.env.PORT}`);
    })
  } catch (error) {
    console.error("ERROR: ", error);
    throw err;
  }
})();
*/