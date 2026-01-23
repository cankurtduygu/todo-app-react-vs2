
const TodoList = ({ todos, setTodos }) => {
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
   
  }

  /**
   * Delete a task from the list
   * 
   * How it works:
   * - filter() creates a new array excluding the item with matching ID
   * - This is an immutable way to remove items from state
   */
  const handleDelete = (id) => {
  }

  return (
    <div className="todo-list-container">
    
    </div>
  )
}

export default TodoList
