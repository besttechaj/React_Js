import { TodoContextProvider } from './contexts/TodoContext';
import Login from './components/Login';
function App() {
  return (
    <TodoContextProvider value={{}}>
      <Login />
    </TodoContextProvider>
  );
}

export default App;
