import { useState } from "react";
import { TodoProps, Todo, TodoList } from "./TodoList";
import { Form } from "./Form"

const Example = () => {
  const initialTodos: Todo[] = [
    {
      id: 1,
      title: "test_1"
    },
    {
      id: 2,
      title: "test_2"
    },
  ]
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  
  return (
    <>
    <Form setTodos={setTodos}></Form>
    <TodoList todos={todos}></TodoList>
    </>
  );
};

export default Example;
