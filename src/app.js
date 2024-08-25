import express from "express";
import taskRouter from "./routes/taskRouter.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(taskRouter);

export default app;
