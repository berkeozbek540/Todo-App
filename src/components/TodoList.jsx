import React from "react";

import IncompletedTodos from "./IncompletedTodos";
import CompletedTodos from "./CompletedTodos";

const TodoList = () => {
  return (
    <>
      <IncompletedTodos />
      <CompletedTodos />
    </>
  );
};

export default TodoList;
