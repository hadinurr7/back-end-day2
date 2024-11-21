import express, { NextFunction, Request, Response } from "express";

import userRouter from "./routes/user.router";
import expenseRouter from "./routes/expense.router";

const PORT = 8000;

const app = express();

app.use(express.json());

app.get("/api", (request: Request, response: Response) => {
  response.status(200).send("Welcome to MY API (express)");
});

// routes
app.use("/users", userRouter);
app.use("/users/:id", userRouter);

app.use("/expenses", expenseRouter);
app.use("/expenses/:id", expenseRouter);

// error middleware
app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    response.status(400).send(err.message);
  }
);

app.listen(PORT, () => {
  console.log(`Server running on PORT : ${PORT}`);
});
