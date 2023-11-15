import { useState } from "react";
import { useTodo, useTodoDispatch } from "../context/todoContext";

export const Item = ({ todo }) => {
  const [isEditing, setIsEditting] = useState(false);
  const [input, setInput] = useState(todo.content);
  const dispatch = useTodoDispatch();

  const deleteTodo = (id) => {
    dispatch({ type: "delete", payload: { id } })
  }

  const updateTodo = (id, content) => {
    dispatch({ type: "update", payload: { id, content } })
  }

  const complete = (id) => {
    deleteTodo(id)
  }

  return (
    <div>
      <button onClick={() => complete(todo.id)}>完了</button>
      {!isEditing ? <span onClick={() => { setIsEditting(true); }}>{todo.content}</span> :
        <input
          type="text"
          name={todo.id}
          value={input}
          onChange={(e) => {
            setInput(e.target.value)
          }
          }
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              setIsEditting((prev) => !prev);
            }
            updateTodo(todo.id, e.target.value);
          }
          }
        >
        </input>
      }
    </div>
  );
}