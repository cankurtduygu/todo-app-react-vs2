import { useEffect, useState } from "react";

const AddTodo = ({ setTodos, editingTodo, setEditingTodo }) => {
  // State for the task input field
  const [todo, setTodo] = useState("");

  // State for the date/time input field
  const [todoDate, setTodoDate] = useState("");

  // update initial states for form
  useEffect(() => {
     console.log(editingTodo);
    if (editingTodo) {
      setTodo(editingTodo.text);
      setTodoDate(editingTodo.day);
    }
  }, [editingTodo]);

  /**
   * Handle form submission
   * - Prevents default form behavior (page refresh)
   * - Creates a new task object with unique ID
   * - Adds new task to the beginning of the array
   * - Clears the input fields
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: Check if task text is not empty
    if (!todo.trim()) {
      alert("Please enter a todo!");
      return;
    }
    // Create new task object with unique ID using Date.now()
    const newTodo = {
      id: Date.now(),
      text: todo,
      day: todoDate,
      isDone: false,
    };

    // Add new task to the beginning of the array using spread operator
    setTodos((todos) => [newTodo, ...todos]);

    // Clear input fields after submission
    setTodo("");
    setTodoDate("");
  };

  const handleCancel = () => {
    setEditingTodo(null)
    setTodo("");
    setTodoDate("");
  };

  return (
    <div className="add-task-container" style={{background: editingTodo ? '#9eceff' : '#f8f9fa'}}>
      <form onSubmit={handleSubmit}>
      
      {editingTodo && (
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '20px' }}>
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
          ➕ Submit
        </button>
        
        
      </form>
    </div>
  );
};

export default AddTodo;
