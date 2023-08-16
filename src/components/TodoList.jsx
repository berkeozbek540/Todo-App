import React from "react";

import Card from "../UI/Card";

import { AiFillEdit, AiFillDelete, AiOutlineCheck } from "react-icons/ai";

const DUMMY_TODOS = [
  { id: "1", name: "Todo 1" },
  { id: "2", name: "Todo 2" },
  { id: "3", name: "Todo 3" },
];

const TodoList = () => {
  return (
    <Card className="mt-8">
      {DUMMY_TODOS.map((todo) => (
        <div
          key={todo.id}
          className="flex justify-between items-center py-4 border-b-2 last:border-b-0"
        >
          <div>
            <h1>{todo.name}</h1>
          </div>
          <div className="flex gap-3">
            <span className="bg-blue-400 hover:bg-blue-300 p-2 rounded md:cursor-pointer">
              <AiFillEdit />
            </span>
            <span className="bg-red-400 hover:bg-red-300 p-2 rounded md:cursor-pointer">
              <AiFillDelete />
            </span>
            <span className="bg-slate-400 hover:bg-green-400 p-2 rounded md:cursor-pointer">
              <AiOutlineCheck />
            </span>
          </div>
        </div>
      ))}
    </Card>
  );
};

export default TodoList;
