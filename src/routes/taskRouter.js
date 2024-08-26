import { Router } from "express";
import taskController from "../controllers/taskController.js";

const taskRouter = Router();

taskRouter.post("/tasks", taskController.createTask);
taskRouter.get("/tasks", taskController.findTasks);
taskRouter.get("/tasks/:id", taskController.findOneTask);
taskRouter.put("/tasks/:id", taskController.updateTask);
taskRouter.delete("/tasks/:id", taskController.deleteTask);


export default taskRouter;
