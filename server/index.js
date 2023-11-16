import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";

dotenv.config();

import User from "./models/User.js";
import Link from "./models/Link.js";

const app = express();
app.use(express.json());

const connectionDB = async () => {
  const conn = await mongoose.connect(process.env.MONGODB_URI);
  if (conn) {
    console.log("MongoDB Connected Successfully.");
  }
};
connectionDB();

//Post/signup
app.post("/api/signup", async (req, res) => {
  const { name, email, password, mobile, gender } = req.body;

  //instance
  const user = new User({
    name: name,
    email: email,
    password: password,
    mobile: mobile,
    gender: gender,
  });

  try {
    const savedUser = await user.save();
    res.json({
      success: true,
      data: savedUser,
      message: "SignUp Successful",
    });
  } catch (err) {
    res.json({
      success: false,
      message:"Error to SignUp",
    });
  }
});

//post api

app.post("/links", async (req, res) => {
  const { url, slug } = req.body;

  const randomslug = Math.random().toString(36).substring(2, 7);

  const link = new Link({
    url: url,
    slug: slug || randomslug,
  });

  try {
    const saveLink = await link.save();

    return res.json({
      success: true,
      data: {
        url: saveLink.url,
        slug: saveLink.slug,
        link: `${process.env.BASE_URL}/ ${saveLink.slug}`,
      },
      message: "Link saved successfully.",
    });
  } catch (err) {
    res.json({
      success: false,
      errMessage: err.message,
    });
  }
});

//get api
app.get("/api/:slug", async (req, res) => {
  const { slug } = req.params;
  const link = await Link.findOne({ slug: slug });

  await Link.updateOne({ slug: slug }, { $set: { clicks: link.clicks + 1 } });

  if (!link) {
    return res.json({
      success: false,
      message: "Link not found",
    });
  }
  res.redirect(link.url);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
