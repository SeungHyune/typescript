import { useState } from 'react';
import { TodoDispatchContext, useTodoDispatch } from '../App';

interface Props {
}

export default function Editor(props: Props) {
    
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