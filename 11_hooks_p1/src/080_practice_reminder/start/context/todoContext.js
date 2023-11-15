import {createContext, useReducer, useContext} from "react";

export const TodoContext = createContext();
export const TodoDispatchContext = createContext();

export const TodoProvider = ({children}) => {
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

  const reducer = (state, {type, payload}) => {
    console.log(payload)
    const { id, content } = payload;
    switch (type) {
      case "create":
        return [...state, { id, content }];
      case "delete":
        const newTodos = state.filter((todo) => {
          return todo.id !== id;
        });
        return newTodos;
      case "update":
        const updatedTodos = state.map(todo => todo.id === id ? { ...todo, content: content } : todo);
        return updatedTodos;
      default:
        throw "Error";
    }
  };

  const [todos, dispatch] = useReducer(reducer, todosList);

  return (
    <TodoContext.Provider value={todos}>
    <TodoDispatchContext.Provider value={dispatch}>
      {children}
    </TodoDispatchContext.Provider>
  </TodoContext.Provider>
  );
}

export const useTodo = () => useContext(TodoContext);
export const useTodoDispatch = () => useContext(TodoDispatchContext);