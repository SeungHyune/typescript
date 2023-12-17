import React from 'react';
import { Todo } from '../../types/types';

interface Todos {
    todoTab: string;
    onTodoTabChange(type: string): void
}

const TodoTab = ({todoTab, onTodoTabChange}: Todos) => {
    const onTotalTodos = () => {
        onTodoTabChange('Total')
    }

    const onThingTodos = () => {
        onTodoTabChange('Thing')
    }

    const onCompletedTodos = () => {
        onTodoTabChange('Completed')
    }

    return (
        <div className="todo-tab">
            <ul>
                <li className={todoTab === 'Total' ? 'on' : ''} onClick={onTotalTodos}>전체</li>
                <li className={todoTab === 'Thing' ? 'on' : ''} onClick={onThingTodos}>해야할 일</li>
                <li className={todoTab === 'Completed' ? 'on' : ''} onClick={onCompletedTodos}>완료한 일</li>
            </ul>
        </div>
    )
}

export default React.memo(TodoTab);