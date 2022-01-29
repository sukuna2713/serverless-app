import { PrivateRoute } from 'Auth/PrivateRoute';
import { SignIn } from 'Auth/SignIn';
import { SignUp } from 'Auth/SignUp';
import { NotFoundPage } from 'NotFoundPage';
import { useReducer } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TopPage from 'TopPage';
import './App.css';
import { AppContext } from './AppContext';
import Message from './Message';
import { initiateState } from './initialState';
import { reducer } from './reducer';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initiateState)
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<TopPage />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/mypage' element={<PrivateRoute path='/mypage'><Message /></PrivateRoute>} />
            <Route path='/*' element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AppContext.Provider>
  )
}

export default App;
