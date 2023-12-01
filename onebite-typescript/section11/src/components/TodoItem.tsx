import { useState, useRef } from 'react';
import { useTodoDispatch } from '../App';
import { Todo } from '../types/types';

interface Props extends Todo {}

export default function TodoItem(props: Props) {
    const todoTextRef = useRef<HTMLDivElement>(null);
    const [isEdit, setIsEdit] = useState(false);

    const dispatch = useTodoDispatch();

    

    const onClickButton = () => {
        dispatch.onClickDelete(props.id)
    }

    const onTodoTextSave = (e: React.KeyboardEvent<HTMLElement>) => {
        if(isEdit && todoTextRef.current) {
            if(e.key === 'Escape') {
                todoTextRef.current.setAttribute('contenteditable', 'false');
            }
        }
    }

    const onTodoTextUpdate = (e: React.MouseEvent<HTMLElement>) => {
        if(e.target && todoTextRef.current) {
            todoTextRef.current.setAttribute('contenteditable', 'true');
            todoTextRef.current.focus();
            setIsEdit(true);
        }
    }
    
    return <li className="todo-item">
        <div onDoubleClick={onTodoTextUpdate} onKeyDown={onTodoTextSave} className="text" ref={todoTextRef}>{props.content}</div>
        <button onClick={onClickButton}>삭제</button>
    </li>
}