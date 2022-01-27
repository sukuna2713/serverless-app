import { useReducer } from 'react';
import './App.css';
import { AppContext } from './AppContext';
import { City } from './City';
import { initiateState } from './initialState';
import { reducer } from './reducer';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initiateState)
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div>
        <City />
      </div>
    </AppContext.Provider>
  )
}

export default App;
