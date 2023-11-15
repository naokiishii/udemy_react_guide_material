import { useReducer } from "react"
import List from "./List"
import Form from "./Form"
import { TodoProvider } from "./../context/todoContext"

const Todo = () => {

  return (
    <TodoProvider>
      <List />
      <Form />
    </TodoProvider>
  )
};
export default Todo;
