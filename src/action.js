export const ADD_TODO = "ADD_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const UDPATE_TODO = "UDPATE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const GET_TODOS = "GET_TODOS";

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: todo
  };
}
export function getTodo() {
  return {
    type: GET_TODOS
  };
}
export function editTodo(id) {
  return {
    type: EDIT_TODO,
    payload: id
  };
}

export function updateTodo(id, updatedTodo) {
  return {
    type: UDPATE_TODO,
    payload: { id, updatedTodo }
  };
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    payload: id
  };
}
