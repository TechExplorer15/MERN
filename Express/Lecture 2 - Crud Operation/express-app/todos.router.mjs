import { Router } from "express";
import { todos } from "./db.mjs";

const router = Router();
router
  .get("/", (req, res) => {
    res.json(todos);
  })
  .post("/", (req, res) => {
    try{
      if (!req.body.title) {
        res.status(400).send({ message: "title is required"})
      }
      else{
         const { title } = req.body;
    const createdTodo = createNewTodo(title);
    res.status(201).send(createdTodo);
      }
    } catch (ex) {
      res.status(500).send({ message: "Error while saving todo", errr: ex});
    }
  })
  .patch("/:id", (req, res) => {
    const updatedTodoId = updateTodo(req.params.id, req.body);
    res.send(updatedTodoId);
  });
function updateTodo(todoId, updatedTodo) {
  let existingTodoIndex = todos.findIndex((todo) => todo.id === todoId);
  todos[existingTodoIndex] = { ...todos[existingTodoIndex], ...updatedTodo };
  return todos[existingTodoIndex].id;
}

function createNewTodo(title) {
  const newTodo = {
    id: crypto.randomUUID(),
    title,
    completed: false,
    createDate: new Date().toISOString(),
  };
  todos.push(newTodo);
  return newTodo;
}

export default router;
