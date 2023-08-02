/* eslint-disable import/no-anonymous-default-export */
import React, { createContext, useReducer } from 'react';

export default (reducer, actions, initialState) => {
  const Context = createContext();

  const Provider = (props) => {
    const { children } = props;
    const [state, dispatch] = useReducer(reducer, initialState);

    const boundActions = {};
    
    for(let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    const valueProps = {
      state, 
      ...boundActions
    }
    return <Context.Provider value={valueProps}>{children}</Context.Provider>;
  }

  return { Context, Provider };
}