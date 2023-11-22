import express, { Application, Request, Response } from "express";
import cors from "cors";
import { userRouter } from "./app/modules/user/user.route";
const app: Application = express();

///cors and json parser
app.use(cors());
app.use(express.json());
///// use route using use middleware

app.use("/api", userRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
