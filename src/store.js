import { createStore } from "redux";
import todo from "./reducer";
import { addTodo, getTodo, editTodo, updateTodo } from "./action";

const store = createStore(todo, window.STATE_FROM_SERVER);
const unsubscribe = store.subscribe(() =>
  console.log("subscribed", store.getState())
);

store.dispatch(addTodo({ id: 1, name: "jithesh", job: "admin" }));
store.dispatch(addTodo({ id: 2, name: "rajesh", job: "ias" }));
store.dispatch(addTodo({ id: 3, name: "jayesh", job: "web" }));
// store.dispatch(editTodo(2));
store.dispatch(getTodo());

store.dispatch(updateTodo(2, { name: "ajay", job: "designer" }));
store.dispatch(getTodo());
