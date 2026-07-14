import { TiDelete, TiEdit } from "react-icons/ti";

const TodoList = ({ todos, setTodos, onEditTodo }) => {
  const handleToggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,
      ),
    );
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  if (todos.length === 0) {
    return (
      <div className="no-tasks">
        <p>No tasks yet. Add one above!</p>
      </div>
    );
  }

  return (
    <div className="todo-list-container">
      {todos.map((todo) => (
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
            {todo.day && (
              <p className="todo-date">
                {new Date(todo.day).toLocaleString()}
              </p>
            )}
          </div>

          <TiEdit
            className="edit-icon"
            title="Edit Task"
            onClick={(e) => {
              e.stopPropagation();
              onEditTodo(todo);
            }}
          />

          <TiDelete
            className="delete-icon"
            title="Delete Task"
            onClick={(e) => {
              e.stopPropagation();
              handleDelete(todo.id);
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
