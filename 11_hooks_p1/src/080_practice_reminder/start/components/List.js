import { Item } from "./Item"
import { useTodo } from "../context/todoContext";

const List = () => {
    const todos = useTodo();
    return (
        <div>
            {todos.map(todo => {
                return (<Item key={todo.id} todo={todo}></Item>)
            })}
        </div>
    );
}

export default List;