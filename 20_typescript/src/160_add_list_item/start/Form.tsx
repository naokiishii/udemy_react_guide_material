import { useState } from "react";
import { Todo } from "./TodoList"
import { randomInt } from "crypto";

type setTodosType = (todo: Todo) => void

type FormProps = {
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

export const Form = ({setTodos}: FormProps ) => {
  const [inputValue, setInputValue] = useState<string>("");
  const addTodo = (title: string) => {setTodos((prev: Todo[]) => {return [...prev, {id: Math.random(), title}]})};

  const nums: number[] = [1, 2, 3, 4, 5];
  return (
    <>
      <input type="text" value={inputValue} onChange={(e) => {setInputValue(e.target.value)}}></input>
      <button type="submit" onClick={(e) => {addTodo(inputValue); setInputValue("");}}>add</button>
    </>
  );
}