import React, { useState } from "react";

import EditTodo from "./EditTodo";

import { AiFillEdit, AiFillDelete, AiOutlineCheck } from "react-icons/ai";

import { useDispatch } from "react-redux";
import { todoSliceActions } from "./store/todo-slice";

import Button from "../UI/Button";

const TodoItem = (props) => {
  const [editTodoModal, setEditTodoModal] = useState(false);
  const dispatch = useDispatch();

  const deleteTodoHandler = (id) => {
    dispatch(todoSliceActions.removeTodo(id));
  };

  const completeTodoHandler = (id) => {
    dispatch(todoSliceActions.completeTodo(id));
  };

  const editTodoHandler = (id) => {
    setEditTodoModal(true);
  };

  const closeModal = () => {
    setEditTodoModal(false);
  };

  return (
    <>
      {editTodoModal && <EditTodo id={props.id} close={closeModal} />}
      <div>
        <h1>{props.name}</h1>
      </div>
      <div className="flex gap-3">
        <Button
          className="bg-blue-400 hover:bg-blue-300 p-2 rounded md:cursor-pointer"
          onClick={() => editTodoHandler(props.id)}
        >
          <AiFillEdit />
        </Button>
        <Button
          className="bg-red-400 hover:bg-red-300 p-2 rounded md:cursor-pointer"
          onClick={() => deleteTodoHandler(props.id)}
        >
          <AiFillDelete />
        </Button>
        <Button
          className={`${
            props.completed ? "bg-green-400" : "bg-slate-400"
          } hover:bg-green-400 p-2 rounded md:cursor-pointer`}
          onClick={() => completeTodoHandler(props.id)}
        >
          <AiOutlineCheck />
        </Button>
      </div>
    </>
  );
};

export default TodoItem;
