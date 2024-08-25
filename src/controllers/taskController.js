import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function criarTask(req, res) {
  try {
    const { titulo, descricao } = req.body;

    if (!titulo || !descricao) {
      return res.status(400).json({
        sucesso: false,
        error: "Titulo e descrição são obrigatórios",
      });
    }
    const newTask = await prisma.tasks.create({
      data: {
        titulo,
        descricao,
      },
    });

    res.status(201).json({
      sucesso: true,
      message: "Tarefa criada com sucesso!",
      newTask,
    });
  } catch (error) {
    res.status(500).json({ message: "Error: " + error.message });
  }
}

async function findOneTask (req, res) {
    try {
      const { id } = req.params;
      const task = await prisma.tasks.findUnique({
        where: { id: Number(id) },
      });
      if (!task) {
        return res.status(404).json({
          sucesso: false,
          message: "Tarefa não encontrada!",
        });
      }
      res.json({
        sucesso: true,
        message: "Tarefa encontrada com sucesso",
        task,
      });
    } catch (error) {
      res.status(500).json({
        sucesso: false,
        message: "Não foi possivel encontrar a tarefa!: " + error.message,
      });
    }
  
}
async function findTasks(req, res) {
  try {
    const tasks = await prisma.tasks.findMany();
    if (tasks.length === 0) {
      return res.json({
        sucesso: false,
        message: "Nenhuma tarefa encontrada!",
      });
    }
    res.json({
      menssage: "Tarefas encontradas com sucesso",
      sucesso: true,
      tasks,
    });
  } catch (error) {
    res.status(500).json({
      sucesso: false,
      message: "Não foi possivel encontrar as tarefas!: " + error.message,
    });
  }
}

async function updateTasks(req, res) {
  try {
    const { id } = req.params;
    const { titulo, descricao } = req.body;

    if (!titulo || !descricao) {
      return res.status(400).json({
        sucesso: false,
        error: "Título e descrição são obrigatórios",
      });
    }

    const updatedTask = await prisma.tasks.update({
      where: { id: Number(id) },
      data: { titulo, descricao },
    });

    res.json({
      sucesso: true,
      message: "Tarefa atualizada com sucesso!",
      updatedTask,
    });
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({
        sucesso: false,
        message: "Tarefa não encontrada!",
      });
    }

    res.status(500).json({
      sucesso: false,
      message: "Não foi possível atualizar: " + error.message,
    });
  }
}

async function deleteTasks(req, res) {
  try {
    const { id } = req.params;

    // Exclui a tarefa com base no id
    const deleteTask = await prisma.tasks.delete({
      where: { id: Number(id) },
    });

    res.json({
      sucesso: true,
      message: "Tarefa deletada com sucesso!",
      deleteTask,
    });
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({
        sucesso: false,
        message: "Tarefa não encontrada!",
      });
    }

    res.status(500).json({
      sucesso: false,
      message: "Erro ao deletar tarefa: " + error.message,
    });
  }
}

export default {
  criarTask,
  findTasks,
  updateTasks,
  deleteTasks,
  findOneTask,
};
