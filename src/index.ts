import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import {userRouter} from "./users/infrastructure/userRouter";
import dotenv from "dotenv";
import {authRouter} from "./users/infrastructure/authRouter";
import {eventRouter} from "./events/infrastructure/eventRouter";
import {organizationRouter} from "./users/infrastructure/organizationRouter";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`listening ${PORT}`);
});

app.use(bodyParser.json());
app.use("/v1/users", userRouter);
app.use("/v1/auth", authRouter);
app.use("/v1/events", eventRouter);
app.use("/v1/organization", organizationRouter);

