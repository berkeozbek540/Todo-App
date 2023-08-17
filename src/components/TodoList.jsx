import React from "react";

import Card from "../UI/Card";

import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todoItems = useSelector((state) => state.todo.items);

  return (
    <Card className="mt-8">
      {todoItems.length > 0 ? (
        todoItems.map((todo) => (
          <div
            key={todo.id}
            className="flex justify-between items-center py-4 border-b-2 last:border-b-0"
          >
            <TodoItem
              name={todo.name}
              id={todo.id}
              completed={todo.completed}
            />
          </div>
        ))
      ) : (
        <p className="text-center">Nothing to see here. Add some todos.</p>
      )}
    </Card>
  );
};

export default TodoList;
