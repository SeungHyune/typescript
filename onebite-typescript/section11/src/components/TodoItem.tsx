import { useState, useRef } from 'react';
import { useTodoDispatch } from '../App';
import { Todo } from '../types/types';

interface Props extends Todo {}

export default function TodoItem(props: Props) {
    const todoTextRef = useRef<HTMLInputElement>(null);
    const [isEdit, setIsEdit] = useState(false);
    const [currentTodoText, setCurrentTodoText] = useState(props.content);

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
            // props로 전달 받은 수정 함수 호출하면서 매개변수로 id와 변경된 텍스트 전달
            setIsEdit(false);
        }
    }
    
    return <li className="todo-item">
        <div className="text">
            <div className={isEdit === false ? 'view' : ''} onDoubleClick={onTodoTextEdit}><span>{currentTodoText}</span></div>
            <div className={isEdit ? 'view' : ''}>
                <input 
                    onInput={onTodoTextUpdate} 
                    onKeyDown={onTodoUpdate}
                    value={currentTodoText} 
                    type="text" 
                    ref={todoTextRef} />
            </div>
        </div>
        <button onClick={onClickButton}>삭제</button>
    </li>
}