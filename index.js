const express = require("express");
const userRoute = require("./routes/userRoute");
const app = express();
const mongoose = require("mongoose");
const doctorRoute = require("./routes/doctorRoute");
const cors = require('cors')


app.use(express.json());
app.use("/users", userRoute);
app.use("/doctor", doctorRoute);
app.use(cors());

app.get("/", (req, res) => {
  res.send("mock-1 backend");
});

app.listen(8080, async () => {
  try {
   await mongoose.connect("mongodb+srv://samaydhawale1:Samay123@cluster0.fcetjfm.mongodb.net/Revision_Mock-5?retryWrites=true&w=majority")
   console.log("DB connected")
  } catch (error) {
    console.log(error);
  }
  console.log("server is running");
});
