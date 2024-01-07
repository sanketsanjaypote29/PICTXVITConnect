const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("./models/Users");
const Biker=require("./models/Biker")
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://vetaledurvesh06:$tr0nGarrmsa@cluster1.ovrr3oh.mongodb.net/pictcon?retryWrites=true&w=majority", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

//login
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email });

        if (!user || user.password !== password) {
            return res.status(401).json({ error: "Invalid email or password" });
        }

        res.json({ message: "Login successful" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
//register
app.post("/register",(req, res) => {
    try {
        const user = UserModel.create(req.body);
        res.status(201).json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
//adding biker
app.post("/biker", async (req, res) => {
    console.log("Request Body:", req.body);
  
    try {
      const biker = await Biker.create(req.body);
      console.log("Biker created:", biker);
      res.status(201).json(biker);
    } catch (err) {
      console.error("Error creating biker:", err);
      res.status(500).json({ error: "Internal Server Error", details: err.message });
    }
  });

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
