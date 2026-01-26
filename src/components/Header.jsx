import React from "react";

export default function Header({ setIsFormVisible, isFormVisible}) {
  return (
    <div className="add-task-container">
      <header className="header">
        <h1>My Todo App</h1>
        <button
          style={{ background: isFormVisible ? '#e74c3c' : '#9b59b6'}}
          className="btn btn-toggle"
          onClick={() => setIsFormVisible((prev) => !prev)}
          aria-label="Toggle add todo form"
        >
          {isFormVisible ? 'Hide' : 'Show'} Add Task Form
        </button>
      </header>
    </div>
  );
}
