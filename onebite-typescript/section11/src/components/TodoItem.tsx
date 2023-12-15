import React,{ useState, useRef } from 'react';
import { useTodoDispatch } from '../App';
import { Todo } from '../types/types';

interface Props extends Todo {}

function TodoItem(props: Props) {
    const todoTextRef = useRef<HTMLInputElement>(null);
    const [isEdit, setIsEdit] = useState(false);
    const [currentTodoText, setCurrentTodoText] = useState(props.content);
    const [completed, setCompleted] = useState(props.completed);

    const dispatch = useTodoDispatch();

    

    const onClickButton = () => {
        dispatch.onClickDelete(props.id)
    }

    const onTodoTextEdit = () => {
        setIsEdit(true);
        setTimeout(() => {
            todoTextRef.current?.focus();
        })
    }

    const onTodoTextUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentTodoText(e.target.value);
    }

    const onTodoUpdate = (e: React.KeyboardEvent<HTMLElement>) => {
        if(e.key === 'Escape') {
            setCurrentTodoText(props.content);
            setIsEdit(false);
        } else if (e.key === 'Enter') {
            dispatch.onTodoUpdate(props.id, currentTodoText, completed);
            setIsEdit(false);
        }
    }

    const onTodoChecked = () => {
        setCompleted(!completed)
        dispatch.onTodoUpdate(props.id, currentTodoText, !completed);
    }

    
    return <li className="todo-item">
        <input type="checkbox" onChange={onTodoChecked} checked={completed} />
        <div className="text">
            <div className={`${isEdit === false ? 'view' : ''} ${completed ? 'through' : ''}`} onDoubleClick={onTodoTextEdit}><span>{currentTodoText}</span></div>
            <div className={isEdit ? 'view' : ''}>
                <input 
                    onChange={onTodoTextUpdate} 
                    onKeyDown={onTodoUpdate}
                    value={currentTodoText} 
                    type="text" 
                    ref={todoTextRef} />
            </div>
        </div>
        <button onClick={onClickButton}>삭제</button>
    </li>
}

export default React.memo(TodoItem)