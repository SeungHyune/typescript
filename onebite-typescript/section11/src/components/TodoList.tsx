import { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import { Todo } from '../types/types';



interface Todos {
    todos: Todo[]
}

const TodoList = (props: Todos) => {
    const [todos,setTodos] = useState(props.todos);
    const [todoTab, setTodoTab] = useState([true,false,false]);

    const onTotalTodos = () => {
        setTodoTab([true,false,false])
        setTodos(props.todos);
    }

    const onThingTodos = () => {
        setTodoTab([false,true,false])
        const thingTodos = props.todos.filter(todo => !todo.completed);
        setTodos(thingTodos);
    }

    const onCompletedTodos = () => {
        setTodoTab([false,false,true])
        const completedTodos = props.todos.filter(todo => todo.completed);
        setTodos(completedTodos);
    }

    useEffect(() => {
        setTodos(props.todos);
    }, [props.todos])

    return (
        <div>
            <ul>
                {todos.map((todo: Todo) => (
                    <TodoItem key={todo.id} {...todo} />
                ))}
            </ul>
            <div className="todo-tab">
                <ul>
                    <li className={todoTab[0] ? 'on' : ''} onClick={onTotalTodos}>전체</li>
                    <li className={todoTab[1] ? 'on' : ''} onClick={onThingTodos}>해야할 일</li>
                    <li className={todoTab[2] ? 'on' : ''} onClick={onCompletedTodos}>완료한 일</li>
                </ul>
            </div>
        </div>
    )
}

export default TodoList;