import React, { useState, useMemo } from "react";

import TodoItem from "./TodoItem";
import Button from "../UI/Button";
import Card from "../UI/Card";

import { useSelector } from "react-redux";

import { AiOutlineArrowRight } from "react-icons/ai";

const IncompletedTodos = () => {
  const [isVisible, setIsVisible] = useState(false);
  const todoItems = useSelector((state) => state.todo.items);
  const search = useSelector((state) => state.todo.filter);
  const IncompleteTodos = todoItems.filter(
    (todo) => todo.completed === true && todo.name.startsWith(search)
  );

  const toggleList = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Card className="mt-8">
      <div className="my-3 flex flex-row items-center justify-center">
        <span className="text-xl mr-5">Completed Todos</span>
        <Button
          onClick={toggleList}
          className={`border bg-green-300 rounded-full p-2 transition-all ease-in ${
            isVisible && "rotate-[90deg]"
          }`}
        >
          <AiOutlineArrowRight />
        </Button>
      </div>
      {isVisible && (
        <div>
          {IncompleteTodos.length > 0 ? (
            IncompleteTodos.map((todo) => (
              <div
                key={todo.id}
                className=" flex justify-between items-center py-4 border-b-2 last:border-b-0"
              >
                <TodoItem
                  name={todo.name}
                  id={todo.id}
                  completed={todo.completed}
                />
              </div>
            ))
          ) : (
            <p className="text-center">
              Nothing to see here. Complete some todos.
            </p>
          )}
        </div>
      )}
    </Card>
  );
};

export default IncompletedTodos;
