const express = require('express')
const mongoose = require("mongoose");
const cors = require("cors")
const PORT = 8080



// instalzation express
const app = express()

// import router
const router = require('./Routes/routes')


// mongodb url
const MONGODB_URI = "mongodb://127.0.0.1:27017/zomatodb";
app.use(express.urlencoded({ extended: false })); //post
app.use(cors()); // enable cors policy





// monogodb connection
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    app.listen(PORT, function () {
      console.log("Server is running on port ", PORT);
    });
  })
  .catch((error) => {
    console.log("unable to connect with DB");
    console.log(error);
  });





// using ruting
app.use('/api',router)



