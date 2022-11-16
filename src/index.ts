import path from "node:path";
import express from "express";
import mongoose from "mongoose";

import { router } from "./router";

const DOCKERPORT = 27017;
mongoose.connect(`mongodb://localhost/${DOCKERPORT}`)
  .then(() => {
    console.log("Connected with mongoose.");
    const PORT = 3001;
    const app = express();

    app.use(express.json()); // needs to be before app.use(router)
    app.use(router);
    // this is use because, instead a dirpath, we need to provide the file itself
    app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));

    app.listen(PORT, () => {
      console.log(`server is running on http://localhost:${PORT}`);
    });
  })
  .catch(() => console.log("Failed to connect with mongodb."));
