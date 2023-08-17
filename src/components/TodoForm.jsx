import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Card from "../UI/Card";
import Button from "../UI/Button";

import { HiMagnifyingGlass } from "react-icons/hi2";

import { useDispatch } from "react-redux";
import { todoSliceActions } from "./store/todo-slice";

const TodoForm = () => {
  const dispatch = useDispatch();
  const id = uuidv4();

  const [todo, setTodo] = useState("");
  const [error, setError] = useState(null);

  const todoIsValid = todo.trim().length > 0;

  const valueChangeHandler = (e) => {
    setTodo(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!todoIsValid) {
      setError(true);
      return;
    }
    dispatch(
      todoSliceActions.addTodo({
        id,
        todo,
      })
    );
    setError(null);
    setTodo("");
  };
  return (
    <Card>
      <div className="text-center my-3 ">
        <h2 className="text-2xl">Todo App</h2>
      </div>
      <form onSubmit={submitHandler}>
        <div className="py-2 text-center w-full relative">
          <input
            placeholder="Add & Search Todo"
            className={`shadow border ${
              error && "border-red-500"
            } rounded py-5 px-2 md:w-3/4 text-gray-700`}
            value={todo}
            onChange={valueChangeHandler}
          />
          <Button
            type="button"
            className="absolute text-white p-2 bg-blue-500 hover:bg-blue-400 rounded-md right-[6%] top-[26%] md:right-[16%] "
          >
            <HiMagnifyingGlass />
          </Button>
        </div>
        <div className="text-center py-2">
          <Button
            className="py-2 px-4 rounded text-white bg-blue-500 hover:bg-blue-400"
            type="submit"
          >
            Add Todo
          </Button>
          {error && (
            <p className="text-red-500 pt-2 font-semibol text-lg">
              Enter a valid todo name.
            </p>
          )}
        </div>
      </form>
    </Card>
  );
};

export default TodoForm;
