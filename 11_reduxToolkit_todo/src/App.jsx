import AddTodos from './components/AddTodos';
import Todos from './components/Todos';

export default function App() {
  return (
    <div>
      <h1>Welcome to redux tutorials</h1>
      <AddTodos />
      <Todos />
    </div>
  );
}
