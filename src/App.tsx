import "./App.css";
import AddToDo from "./components/AddToDo";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <AddToDo />
    </Provider>
  );
}

export default App;
