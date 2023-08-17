import React from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

import { AiFillEdit, AiFillDelete, AiOutlineCheck } from "react-icons/ai";

import { useDispatch, useSelector } from "react-redux";
import { todoSliceActions } from "./store/todo-slice";

const TodoList = () => {
  const dispatch = useDispatch();
  const todoItems = useSelector((state) => state.todo.items);
  console.log(todoItems);

  const deleteTodoHandler = (id) => {
    dispatch(todoSliceActions.removeTodo(id));
  };
  return (
    <Card className="mt-8">
      {todoItems.length > 0 ? (
        todoItems.map((todo) => (
          <div
            key={todo.id}
            className="flex justify-between items-center py-4 border-b-2 last:border-b-0"
          >
            <div>
              <h1>{todo.name}</h1>
            </div>
            <div className="flex gap-3">
              <Button className="bg-blue-400 hover:bg-blue-300 p-2 rounded md:cursor-pointer">
                <AiFillEdit />
              </Button>
              <Button
                className="bg-red-400 hover:bg-red-300 p-2 rounded md:cursor-pointer"
                onClick={() => deleteTodoHandler(todo.id)}
              >
                <AiFillDelete />
              </Button>
              <Button
                type="button"
                className="bg-slate-400 hover:bg-green-400 p-2 rounded md:cursor-pointer"
              >
                <AiOutlineCheck />
              </Button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center">Nothing to see here. Add some todos.</p>
      )}
    </Card>
  );
};

export default TodoList;
