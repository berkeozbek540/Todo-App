import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoSliceActions } from "./store/todo-slice";

import Button from "../UI/Button";

const Modal = (props) => {
  const dispatch = useDispatch();
  const [enteredName, setEnteredName] = useState("");
  const [error, setError] = useState(null);

  const nameIsValid = enteredName.trim().length > 0;

  const todoItem = useSelector((state) =>
    state.todo.items.find((item) => item.id === props.id)
  );

  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const closeEditModal = () => {
    props.close();
  };

  const changeTodoHandler = (id) => {
    if (nameIsValid) {
      dispatch(
        todoSliceActions.editTodo({ id: todoItem.id, name: enteredName })
      );
      setError(null);
      closeEditModal();
    } else setError(true);
  };

  return (
    <>
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="">
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h3
                      className="text-base font-semibold leading-6 text-gray-900"
                      id="modal-title"
                    >
                      Change Todo Name
                    </h3>
                    <div className="mt-2">
                      <input
                        className="rounded py-2 px-2 w-full text-gray-700 shadow border"
                        placeholder={todoItem.name}
                        value={enteredName}
                        onChange={nameChangeHandler}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <Button
                  type="button"
                  className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
                  onClick={changeTodoHandler}
                >
                  Change
                </Button>
                <Button
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  onClick={closeEditModal}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
