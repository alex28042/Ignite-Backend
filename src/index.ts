import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import {userRouter} from "./users/infrastructure/userRouter";

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`listening ${PORT}`);
});

app.use(bodyParser.json());
app.use("/api/v1/users", userRouter)
