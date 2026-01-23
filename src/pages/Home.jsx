/**
 * Home Component - Main container for the Todo App
 * 
 * This is the main page component that manages the state of all todos
 * and coordinates between AddTask and TodoList components
 */

import { useState } from "react";
import Header from "../components/Header"
import AddTask from "../components/AddTask";

const Home = () => {


  const [isVisible, setIsVisible] = useState(false);
  // State to manage the list of todos
  // We initialize it with data from Data.jsx

  return (
    <div className="home-container">
      {/* Component to add new tasks */}
      <Header />
      <AddTask data={setIsVisible} />

      {/* Component to display and manage tasks */}
    </div>
  )
}

export default Home