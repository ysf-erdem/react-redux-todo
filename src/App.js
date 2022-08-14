import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import "./App.css";



function App() {
  return (
    <div>
      <div className="App_header">Todo List</div>
      <div  className="App">
        <AddTodo/>
        <TodoList/>
      </div>
    </div>
  );
}

export default App;
