import express from "express";
import taskRouter from "./routes/taskRouter.js";
import cors from "cors";
const app = express();

app.use(cors()); // habilita CORS para todos os endpoints

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(taskRouter);

export default app;
