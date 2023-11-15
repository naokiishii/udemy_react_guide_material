
export type Todo = {
  id: number,
  title: string,
}

export type TodoProps = {
  todos: Todo[]
}

export const TodoList = (props: TodoProps) => {
  return (
    <ul>
    {props.todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
    </ul>
  );
}