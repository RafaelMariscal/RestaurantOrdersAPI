import express from "express";
import mongoose from "mongoose";

const DOCKERPORT = 27017;
mongoose.connect(`mongodb://localhost/${DOCKERPORT}`)
  .then(() => {
    console.log("Connected with mongoose.");
    const app = express();
    const PORT = 3001;

    app.listen(PORT, () => {
      console.log(`server is running on http://localhost:${PORT}`);
    });
  })
  .catch(() => console.log("Failed to connect with mongodb."));
