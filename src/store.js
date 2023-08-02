import context from './context';
import { ExceptionlessClient } from 'exceptionless/dist/exceptionless';
const defaultClient = ExceptionlessClient.default;
defaultClient.config.apiKey = 'LD5YCkLYOlbkDut3GPoHWuSml6lvUGZr8lOFAN8g';

const initialState = {
  client: defaultClient
}

export const reducer = (state, action) => {
  switch(action.type) {
    default: 
      return {
        ...state
      }
  }
}

export const { Context, Provider } = context(
  reducer,
  initialState
);