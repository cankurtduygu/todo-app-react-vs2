const AddTask = ({ todos, setTodos }) => {
  // State for the task input field

  // State for the date/time input field

  // State to toggle the form visibility

  /**
   * Handle form submission
   * - Prevents default form behavior (page refresh)
   * - Creates a new task object with unique ID
   * - Adds new task to the beginning of the array
   * - Clears the input fields
   */
  const handleSubmit = (e) => {

    // Validation: Check if task text is not empty

    // Create new task object with unique ID using Date.now()

    // Add new task to the beginning of the array using spread operator

    // Clear input fields after submission

  }

  return (
    <div className="task-form">
      <form id="form-todo" name="form-todo" action="" className="form-control">
        <div>
          <label htmlFor="text-todo">Todo Description</label>
          <input type="text" id="text-todo" name="textTodo" placeholder="What do you need to do?"/>

        </div>

        <div>
          <label htmlFor="date-todo">Due Date & Time</label>
          <input type="date" id="date-todo" name="dateTodo"/>
        </div>

        <button className="btn btn-submit">➕ Add Task</button>
      </form>
    </div>
  )
}

export default AddTask
