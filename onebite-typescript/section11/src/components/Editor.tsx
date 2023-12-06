import { useState } from 'react';
import { useTodoDispatch } from '../App';

export default function Editor() {
    
    const dispatch = useTodoDispatch();

    const [text, setText] = useState('');

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

    const onSubmitHandle = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch?.onClickAdd(text);
        setText('');
    }

    return (
        <div className="editor">
            <form onSubmit={onSubmitHandle}>
                <input type="text" value={text} onChange={onChangeInput} />
                <button>추가</button>
            </form>
        </div>
    )
}