import path from "node:path";
import http from "node:http";
import express from "express";
import mongoose from "mongoose";
import { Server } from "socket.io";

import { router } from "./router";

const DOCKERPORT = 27017;
const PORT = 3001;

const app = express();
const server = http.createServer(app);
export const io = new Server(server);

mongoose.connect(`mongodb://localhost/${DOCKERPORT}`)
  .then(() => {
    console.log("Connected with mongoose.");

    app.use((req, res, next) => {
      res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
      res.setHeader("Access-Control-Allow-Methods", "*");
      res.setHeader("Access-Control-Allow-Headers", "*");
      next();
    });
    app.use(express.json()); // needs to be before app.use(router)
    app.use(router);
    // this is use because, instead a dirpath, we need to provide the file itself
    app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));

    server.listen(PORT, () => {
      console.log(`server is running on http://localhost:${PORT}`);
    });
  })
  .catch(() => console.log("Failed to connect with mongodb."));
