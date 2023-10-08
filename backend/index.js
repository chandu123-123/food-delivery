// Import the Express.js library
const express = require("express");
const mongoose = require("mongoose");
const cors=require('cors')
const app = express();
app.use(cors());
mongoose
  .connect(
    "mongodb+srv://chandan:chandussr@cluster0.iiarwea.mongodb.net/food?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to MongoDB");
    // const fetch_data= mongoose.connection.db.collection('composes')
    // fetch_data.find({}).toArray()  // Convert the cursor to an array
    // .then((data) => {
    //   console.log(data);
    // })
    // .catch((error) => {
    //   console.error("Error fetching data:", error);
    // });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Define a route for the root URL ("/")
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});
app.use(express.json())
app.use('/api',require('./Routes/CreateUser'))
// Start the server and listen on a specific port (e.g., 3000)
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
