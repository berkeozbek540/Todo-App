import React from "react";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="mt-32">
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default App;
