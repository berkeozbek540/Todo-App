import React from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

import { HiMagnifyingGlass } from "react-icons/hi2";

const TodoForm = () => {
  const submitHandler = (e) => {
    e.preventDefault();
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
            className="shadow border rounded py-5 px-2 md:w-3/4 text-gray-700"
          />
          <Button
            type="button"
            className="absolute text-white p-2 rounded-md right-[6%] top-[32%] md:right-[16%] "
          >
            <HiMagnifyingGlass />
          </Button>
        </div>
        <div className="text-center py-2">
          <Button className="py-2 px-4 rounded text-white" type="submit">
            Add Todo
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default TodoForm;
