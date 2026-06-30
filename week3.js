const express = require("express");
const app = express();

app.use(express.json());

let todos = [
  {
    id: 1,
    task: "Learn Express",
    completed: false,
  },
  {
    id: 2,
    task: "Build Todo API",
    completed: true,
  },
];

// GET all todos
app.get("/todos", (req, res) => {
  res.json(todos);
});

// GET single todo by ID
app.get("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const todo = todos.find((t) => t.id === id);

  if (!todo) {
    return res.status(404).json({
      message: "Todo not found",
    });
  }

  res.json(todo);
});

// GET active (incomplete) todos
app.get("/todos/active", (req, res) => {
  const activeTodos = todos.filter((todo) => !todo.completed);
  res.json(activeTodos);
});

// POST create todo
app.post("/todos", (req, res) => {
  const { task } = req.body;

  // Validation
  if (!task) {
    return res.status(400).json({
      message: "Task field is required",
    });
  }

  const newTodo = {
    id: todos.length + 1,
    task,
    completed: false,
  };

  todos.push(newTodo);

  res.status(201).json(newTodo);
});

// PUT update todo
app.put("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const todo = todos.find((t) => t.id === id);

  if (!todo) {
    return res.status(404).json({
      message: "Todo not found",
    });
  }

  const { task, completed } = req.body;

  if (task !== undefined) {
    todo.task = task;
  }

  if (completed !== undefined) {
    todo.completed = completed;
  }

  res.json(todo);
});

// DELETE todo
app.delete("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = todos.findIndex((t) => t.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Todo not found",
    });
  }

  todos.splice(index, 1);

  res.json({
    message: "Todo deleted successfully",
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});