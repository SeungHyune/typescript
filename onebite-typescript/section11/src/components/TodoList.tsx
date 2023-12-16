import React, { useState, useEffect } from 'react';
import TotalTodoCount from './TotalCount';
import TodoItem from './TodoItem';
import { Todo } from '../types/types';

interface Todos {
    todos: Todo[];
    todoTab: string;
    onTodoTabChange(type: string): void
}

const TodoList = ({todos, todoTab, onTodoTabChange }: Todos) => {
    const [todoList,setTodoList] = useState(todos);

    const onTotalTodos = () => {
        onTodoTabChange('Total')
    }

    const onThingTodos = () => {
        onTodoTabChange('Thing')
    }

    const onCompletedTodos = () => {
        onTodoTabChange('Completed')
    }

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
            <div className="todo-tab">
                <ul>
                    <li className={todoTab === 'Total' ? 'on' : ''} onClick={onTotalTodos}>전체</li>
                    <li className={todoTab === 'Thing' ? 'on' : ''} onClick={onThingTodos}>해야할 일</li>
                    <li className={todoTab === 'Completed' ? 'on' : ''} onClick={onCompletedTodos}>완료한 일</li>
                </ul>
            </div>
        </div>
    )
}

export default React.memo(TodoList);