import { NextFunction, Response, Request } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export class AuthenticatedEndpoint {
  public authenticateUser = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (!token)
      return res.status(401).send({
        status: "FAILED",
        data: {
          message: "No Access",
        },
      });

    if (!process.env.ACCESS_TOKEN)
      return res.status(500).send({
        status: "FAILED",
        data: {
          message: "Error Access token",
        },
      });

    jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
      if (err)
        return res.status(403).send({
          status: "FAILED",
          data: {
            message: "No Access",
          },
        });



      req.body.user = user;
      next();
    });
  };
}
