import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import postRouter from "./routes/post.js";

const app = express();


app.use('/posts',postRouter);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());



const DB_URL =
  `mongodb+srv://badhusha:Qwerty%40123@project-2.z7kortf.mongodb.net/?retryWrites=true&w=majority`;
const PORT = 5000;
mongoose
  .connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((db) => {
    app.listen(PORT, () => console.log(`Server Connected at port: ${PORT}`));
  })
  .catch((error) => console.log(error.message));

//mongoose.set('useFindAndModify',false);