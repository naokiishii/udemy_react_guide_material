import { useState } from "react";
import Form from "./components/Form.js"
import List from "./components/List.js"

const Todo = () => {
  const todosList = [
    {
      id: 1,
      content: "店予約する",
    },
    {
      id: 2,
      content: "卵買う",
    },
    {
      id: 3,
      content: "郵便出す",
    },
  ];
  const [todos, setTodos] = useState(todosList);
  const [index, setIndex] = useState(4);
  const onCompleteClicked = (id) => {
    const filteredTodos = todos.filter(todo => todo.id !== id);
    setTodos(filteredTodos);
  };
  const onAddTodo = (title) => {
    setTodos([...todos, {id: index, content: title}]);
    setIndex(index + 1);
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Reminder</h1>
      <List todos={todos} onCompleteClicked={onCompleteClicked}></List>
      <Form onAddTodo={onAddTodo}></Form>
    </>
  );
};

export default Todo;