import { Router } from "express";
import taskController from "../controllers/taskController.js";

const taskRouter = Router();

taskRouter.post("/tasks", taskController.criarTask);
taskRouter.get("/tasks", taskController.findTasks);
taskRouter.get("/tasks/:id", taskController.findOneTask);
taskRouter.put("/tasks/:id", taskController.updateTasks);
taskRouter.delete("/tasks/:id", taskController.deleteTasks);

export default taskRouter;
