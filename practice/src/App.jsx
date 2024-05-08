import { TodoContextProvider } from './contexts/TodoContext.js';
import Login from './components/Login';
import SignUp from './components/SignUp';
import TodoForm from './components/TodoForm.jsx';
import { Routes, Route } from 'react-router-dom';
import User from './components/UserList/User.jsx';
import Home from './components/Home.jsx';
import Create from './components/Create/Create.jsx';
import Read from './components/Read/Read.jsx';
import Update from './components/Update/Update.jsx';

function App() {
  return (
    <>
      <TodoContextProvider value={{}}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/todoForm' element={<TodoForm />} />
          <Route path='/userlist' element={<User />} />
          <Route path='/create' element={<Create />} />
          {/* route for dynamic routing  */}
          <Route path='/update/:id' element={<Update />} />
          <Route path='/read/:id' element={<Read />} />
        </Routes>
      </TodoContextProvider>
    </>
  );
}

export default App;
