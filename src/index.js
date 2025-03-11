// require("dotenv").config({path: './env'})
import dotenv from "dotenv";
import connetDB from "./db/connection.js";
import app from "./app.js";

dotenv.config({
  path: "./env",
});

// const app = express();

connetDB()
  .then(() => {
    app.on("error", (error) => {
      console.log(`ERROR: `, error);
      throw error;
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(`MongoDB connection failed: `, err);
  });

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
