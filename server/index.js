import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";

dotenv.config();

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

//post api

app.post("/api/link", async (req, res) => {
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
        data: saveLink,
        message: "Link saved successfully.",
      });

    // return res.json({
    //   success: true,
    //   data: {
    //     url: saveLink.url,
    //     slug: saveLink.slug,
    //     link: `${process.env.BASE_URL} / ${saveLink.slug}`,
    //   },
    //   message: "Link saved successfully.",
    // });
    
  } catch (err) {
    res.json({
      success: false,
      errMessage: err.message,
    });
  }
});

//get api

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
