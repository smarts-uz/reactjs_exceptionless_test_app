/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import './App.css';

import { useContext } from 'react';
import { Provider, Context } from "./store";

const App = () => {
  const { state } = useContext(Context);
  const { client } = state;
  return (
    <Provider>
      <>
      Your App.js code or components
      </>
    </Provider>
  )
} 

export default App;
