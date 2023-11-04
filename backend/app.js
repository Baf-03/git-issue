require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const UserModel = require("./Model/userSchema");
const app = express();
const PORT = 5000;




const cors = require("cors");
const DoctorModel = require("./Model/doctorsSchema");

app.use(cors());

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//mongoDB connection
const DB_URI = `mongodb+srv://bilal:bilal@cluster0.msrvesu.mongodb.net/smit?retryWrites=true&w=majority`;
mongoose.connect(DB_URI);
mongoose.connection.on("connected", () => console.log("MongoDB Connected"));
mongoose.connection.on("error", (err) => console.log("MongoDB Error", err));

// APP API's

// sign-up
app.post("/api/signup", async (req, res) => {
  try {
    const body = req.body;
    console.log(body);
    const {  email, password } = body;
    if (
      !email ||
      !password
    ) {
      res.json({
        status: false,
        message: "Required fields are missing",
        data: null,
      });
      return;
    }

    console.log(password, "real");
    const hashpass = await bcrypt.hash(password, 10);
    const objToSend = {
      email,
      password: hashpass,
    };

    const emailExist = await UserModel.findOne({ email });
    console.log(emailExist, "emailExist");
    if (emailExist) {
      res.json({
        status: false,
        message: "this email address has been already exists Please try again",
        data: null,
      });
      return;
    }
    const userSave = await UserModel.create(objToSend);

    res.json({
      status: true,
      message: "user successfully signup",
      data: userSave,
    });
  } catch (error) {
    res.json({
      status: false,
      message: error.message,
      data: null,
    });
  }
});
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  console.log("email , password", email, password);

  const emailExist = await   UserModel.findOne({ email });
  console.log(emailExist, "emailExist");
  if (!emailExist) {
    res.json({
      message: "Invalid Credential",
      status: false,
      data: null,
    });
    return;
  }
  const comparePass = await bcrypt.compare(password, emailExist.password);
  if (comparePass) {
    res.json({
      message: "user login",
      status: true,
      data: emailExist,
    });
    return;
  } else {
    res.json({
      message: "Invalid Credential",
      status: false,
      data: null,
    });
    return;
  }
});

app.get("/", (request, response) => {
  response.json({
    message: "SERVER UP",
  });
});



app.post("/api/doctor", async (req, res) => {
    try {
      const body = req.body;
      console.log(body);
      const { fullName, email, rating, phoneNo } = body;
      
      if (
        !fullName||
        !email ||
        !rating ||
        !phoneNo
      ) {
        res.json({
          status: false,
          message: "Required fields are missing",
          data: null,
        });
        return;
      }
  
      
      const objToSend = {
        full_name : fullName,
        phone_no: phoneNo,
        email,
        rating
      };
 
      const emailExist = await DoctorModel.findOne({ email });
      console.log(emailExist, "emailExist");
      if (emailExist) {
        res.json({
          status: false,
          message: "this email address has been already exists Please try again",
          data: null,
        });
        return;
      }
      const userSave = await DoctorModel.create(objToSend);
  
      res.json({
        status: true,
        message: "user successfully create",
        data: userSave,
      });
    } catch (error) {
      res.json({
        status: false,
        message: error.message,
        data: null,
      });
    }
  });

  app.get("/api/getpost", async (req, res) => {
    try {
      // const userRecords = await UserModel.find({}); get all data's
      const query = {
        // full_name: "Ali",
        // age: 22,
      };
      // const userRecords = await UserModel.find(query);
      // const userRecords = await UserModel.find(query);
  
      const userRecords = await DoctorModel.find({});
      console.log(userRecords);
      res.json({
        message: "data get",
        status: true,
        data: userRecords,
      });
    } catch (error) {
      res.json({
        message: error.message,
        status: false,
        data: null,
      });
    }
  });

app.listen(PORT, () =>
  console.log(`server running on http://localhost:${PORT}`)
);
