import { useEffect, useState } from "react";

const formatDateForInput = (day) => {
  if (!day) return "";
  if (day.includes("T")) return day.slice(0, 16);
  return `${day}T00:00`;
};

const AddTask = ({ setTodos, editingTodo, setEditingTodo }) => {
  const [todo, setTodo] = useState("");
  const [todoDate, setTodoDate] = useState("");

  useEffect(() => {
    if (editingTodo) {
      setTodo(editingTodo.text);
      setTodoDate(formatDateForInput(editingTodo.day));
    }
  }, [editingTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!todo.trim()) {
      alert("Please enter a todo!");
      return;
    }

    if (editingTodo) {
      setTodos((todos) =>
        todos.map((t) =>
          t.id === editingTodo.id ? { ...t, text: todo, day: todoDate } : t,
        ),
      );
      setEditingTodo(null);
    } else {
      const newTodo = {
        id: Date.now(),
        text: todo,
        day: todoDate,
        isDone: false,
      };
      setTodos((todos) => [newTodo, ...todos]);
    }

    setTodo("");
    setTodoDate("");
  };

  const handleCancel = () => {
    setEditingTodo(null);
    setTodo("");
    setTodoDate("");
  };

  return (
    <div
      className="add-task-container"
      style={{ background: editingTodo ? "#9eceff" : "#f8f9fa" }}
    >
      <form onSubmit={handleSubmit}>
        {editingTodo && (
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginRight: "20px",
            }}
          >
            <button type="button" onClick={handleCancel}>
              ❌
            </button>
          </div>
        )}
        <div className="form-control">
          <label htmlFor="todo">Todo Description</label>
          <input
            type="text"
            id="todo"
            name="todo"
            placeholder="What do you need to do?"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label htmlFor="date">Due Date & Time</label>
          <input
            type="datetime-local"
            id="date"
            name="date"
            value={todoDate}
            onChange={(e) => setTodoDate(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-submit">
          {editingTodo ? "💾 Update" : "➕ Submit"}
        </button>
      </form>
    </div>
  );
};

export default AddTask;
