import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateBook from './pages/CreateBooks';
import ShowBook from './pages/ShowBook';
import EditBook from './pages/EditBook';
import DeleteBook from './pages/DeleteBook';
import LoginDelete from './pages/AdminLogin/LoginDelete';
import LoginEdit from './pages/AdminLogin/LoginEdit';

const App = () => {

  return (
    <Routes>

      <Route path='/' element={<Home />} />
      <Route path='/books/create' element={<CreateBook />} />
      <Route path='/books/details/:id' element={<ShowBook />} />
      <Route path='/books/edit/:id' element={<EditBook />} />
      <Route path='/books/delete/:id' element={<DeleteBook />} />
      <Route path='/login/delete/:id' element={<LoginDelete />} />
      <Route path='/login/edit/:id' element={<LoginEdit />} />
    </Routes>
  );
};

export default App;
