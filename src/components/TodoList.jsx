import { TiDelete, TiEdit } from "react-icons/ti";

const TodoList = ({ todos, setTodos, setEditingTodo }) => {
  /**
   * Toggle task completion status
   * Double-click on a task to mark it as done/undone
   *
   * How it works:
   * 1. Map through all todos
   * 2. Find the todo with matching ID
   * 3. Toggle its isDone property
   * 4. Return other todos unchanged
   */
  const handleToggleComplete = (id) => {
    console.log(id);
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,
      ),
    );
  };

  /**
   * Delete a task from the list
   *
   * How it works:
   * - filter() creates a new array excluding the item with matching ID
   * - This is an immutable way to remove items from state
   */
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (todo) => {
    setEditingTodo(todo)
  };

  return (
    <>
    <div className="todo-list-container">
      {todos.map((todo) => {
        return (
          <div
            className={todo.isDone ? "todo-item done" : "todo-item"}
            key={todo.id}
            onDoubleClick={() => handleToggleComplete(todo.id)}
          >
            <div className="todo-content">
              <h3 className="todo-text">
                {todo.isDone && <span className="check-icon">✔️</span>}
                {todo.text}
              </h3>
              {todo.day && <p>{new Date(todo.day).toLocaleString()}</p>}
            </div>

            <TiEdit title="Edit Task" onClick={() => handleEdit(todo)} />

            <TiDelete
              className="delete-icon"
              title="Delete Task"
              onClick={() => handleDelete(todo.id)}
            />
          </div>
        );
      })}
    </div>
    </>
  );
};

export default TodoList;
