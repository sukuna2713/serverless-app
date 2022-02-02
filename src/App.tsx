import { PrivateRoute } from 'Auth/PrivateRoute';
import { SignIn } from 'Auth/SignIn';
import { SignUp } from 'Auth/SignUp';
import { NotFoundPage } from 'NotFoundPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TopPage from 'TopPage';
import './App.css';
import ChatPage from './messageCompornent/ChatPage';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TopPage />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/chatpage' element={<PrivateRoute path='/chatpage'><ChatPage /></PrivateRoute>} />
          <Route path='/*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
