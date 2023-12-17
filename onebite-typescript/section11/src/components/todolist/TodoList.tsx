import React, { useState, useEffect } from 'react';
import TotalTodoCount from './TotalCount';
import TodoItem from './TodoItem';
import TodoTab from './TodoTab';
import { Todo } from '../../types/types';

interface Todos {
    todos: Todo[];
    todoTab: string;
    onTodoTabChange(type: string): void
}

const TodoList = ({todos, todoTab, onTodoTabChange }: Todos) => {
    const [todoList,setTodoList] = useState(todos);

    useEffect(() => {
        switch(todoTab) {
            case 'Total':
            setTodoList(todos);
            break;
            case 'Thing':
            const thingTodos = todos.filter(todo => !todo.completed);
            setTodoList(thingTodos);
            break;
            case 'Completed':
            const completedTodos = todos.filter(todo => todo.completed);
            setTodoList(completedTodos);
            break
        }
    }, [todos, todoTab])

    return (
        <div>
            <TotalTodoCount todos={todoList} />
            <ul>
                {todoList.map((todo: Todo) => (
                    <TodoItem key={todo.id} {...todo} />
                ))}
            </ul>
            <TodoTab todoTab={todoTab} onTodoTabChange={onTodoTabChange} />
        </div>
    )
}

export default React.memo(TodoList);