import { combineReducers } from "redux";

import {
  ADD_TODO,
  EDIT_TODO,
  UDPATE_TODO,
  DELETE_TODO,
  GET_TODOS
} from "./action";

const initialState = {
  todos: [],
  todo: {}
};

function saveTodo(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };

    case GET_TODOS:
      return state;
    case EDIT_TODO:
      return state.filter(todo => todo.id === action.payload);
    case UDPATE_TODO:
      let newState = [];
      console.log(state.todos);
      for (let i = 0; i < state.todos.length; i++) {
        if (state.todos[i].id === action.payload.id) {
          state.todos[i].name = action.payload.updatedTodo.name;
          state.todos[i].job = action.payload.updatedTodo.job;
        }
        newState[i] = state.todos[i];
      }

      console.log(newState);
      return {
        ...state,
        todos: newState
      };

    default:
      return state;
  }
}

const todo = combineReducers({ saveTodo });
export default todo;
