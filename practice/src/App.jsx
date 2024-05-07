import { TodoContextProvider } from './contexts/TodoContext.js';
import Login from './components/Login';
import SignUp from './components/SignUp';
import TodoForm from './components/TodoForm.jsx';
import { Routes, Route } from 'react-router-dom';
import User from './components/UserList/User.jsx';
import Home from './components/Home.jsx';

function App() {
  return (
    <>
      <h1>App component</h1>
      <TodoContextProvider value={{}}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/todoForm' element={<TodoForm />} />
          <Route path='/userlist' element={<User />} />
        </Routes>
      </TodoContextProvider>
    </>
  );
}

export default App;
