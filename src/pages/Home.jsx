/**
 * Home Component - Main container for the Todo App
 *
 * This is the main page component that manages the state of all todos
 * and coordinates between AddTask and TodoList components
 */

import { useEffect, useState } from "react";
import AddTask from "../components/AddTask";
import Header from "../components/Header";
import TodoList from "../components/TodoList";
import { todos as initialTodos } from "../helper/Data";

const Home = () => {
  const [isFormVisible, setIsFormVisible] = useState(true);

  const [editingTodo, setEditingTodo] = useState(null);

  // State to manage the list of todos
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : initialTodos;
  });

  useEffect(() => {
    // console.log('merhaba bir bir useEffect hookdan gelir');

    // update localStorage when new todo is added
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]); // if array is empty, this function works once at first render

  return (
    <div className="home-container">
      <Header
        setIsFormVisible={setIsFormVisible}
        isFormVisible={isFormVisible}
      />

      {isFormVisible && (
        <AddTask
          setTodos={setTodos}
          todos={todos}
          editingTodo={editingTodo}
          setEditingTodo={setEditingTodo}
        />
      )}

      <TodoList
        todos={todos}
        setTodos={setTodos}
        setEditingTodo={setEditingTodo}
      />
    </div>
  );
};

export default Home;
