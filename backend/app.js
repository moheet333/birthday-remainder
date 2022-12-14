import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js";

const app = express();

app.use("/", postRoutes);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://shanks333:moheet2021@cluster0.ymfew8e.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => {
      console.log("Server running on port: ${PORT}");
    })
  )
  .catch((error) => {
    console.log(error.message);
  });
