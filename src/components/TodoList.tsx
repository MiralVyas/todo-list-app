import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { toggleTodoStatus } from "../store/todoSlice";
import { List, ListItem, ListItemText, Checkbox } from "@mui/material";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);

  const pendingTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <>
      {[...pendingTodos, ...completedTodos].length > 0 ? (
        <List>
          {pendingTodos.map((todo) => (
            <ListItem key={todo.id}>
              <Checkbox
                checked={todo.completed}
                onChange={() => dispatch(toggleTodoStatus(todo.id))}
              />
              <ListItemText className="list-todo">{todo.text}</ListItemText>
            </ListItem>
          ))}
          {completedTodos.map((todo) => (
            <ListItem key={todo.id}>
              <Checkbox
                checked={todo.completed}
                onChange={() => dispatch(toggleTodoStatus(todo.id))}
              />
              <ListItemText className="list-completed-todo">
                {todo.text}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      ) : (
        <p>No todos yet!</p>
      )}
    </>
  );
};

export default TodoList;
