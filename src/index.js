import mongoose from "mongoose";
import list from "express-list-endpoints";
import { app } from "./server.js";

const port = process.env.PORT || 3001;
mongoose.connect(process.env.MONGO_CONNECTION);
mongoose.connection.on("connected", () => {
  console.log("database connected successfully");
  app.listen(port, () => {
    console.log(list(app));
    console.log(`app running on ${port}`);
  });
});
