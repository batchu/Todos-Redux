import logo from './logo.svg';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import VisibilityFilter from './components/VisibilityFilter';
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>TODO List</h1>
      <AddTodo />
      <TodoList />
      <VisibilityFilter />
    </div>
  );
}

export default App;
