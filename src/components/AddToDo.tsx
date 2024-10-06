import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField } from "@mui/material";

import { RootState } from "../store/store";
import { addTodo } from "../store/todoSlice";

import TodoList from "./TodoList";
import "./AddToDo.css";

const AddToDo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);

  const [task, setTask] = useState<string>("");
  const [viewTodos, setViewTodos] = useState<boolean>(true);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const handleAdd = () => {
    if (task.trim() === "") return;

    dispatch(addTodo(task));
    setTask("");
  };

  const handleViewTodos = () => {
    setViewTodos(!viewTodos);
  };

  return (
    <div className="add-todo-container">
      <h2 className="heading">To-Do List</h2>
      <TextField
        className="task-input"
        placeholder="Enter task"
        fullWidth
        value={task}
        onChange={handleInputChange}
        sx={{
          "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
              borderColor: "#767676",
            },
            "&.Mui-focused fieldset": {
              border: "1px solid #767676",
            },
          },
        }}
        slotProps={{
          input: {
            sx: { paddingRight: "0px" },
            endAdornment: (
              <button className="add-task-button" onClick={handleAdd}>
                Add
              </button>
            ),
          },
        }}
      />
      {todos.length > 0 && (
        <button className="view-todos" onClick={handleViewTodos}>
          {viewTodos ? "Hide all todos" : "View all todos"}
        </button>
      )}
      {viewTodos && <TodoList />}
    </div>
  );
};

export default AddToDo;
