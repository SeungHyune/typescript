import TodoItem from './TodoItem';
import { Todo } from '../types/types';



interface Todos {
    todos: Todo[]
}

const TodoList = (props: Todos) => {
    return (
        <ul>
            {props.todos.map((todo: Todo) => (
                <TodoItem key={todo.id} {...todo} />
            ))}
        </ul>
    )
}

export default TodoList;