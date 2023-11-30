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

    const onClickHandle = () => {
        dispatch?.onClickAdd(text);
    }

    return <div>
        <input type="text" value={text} onChange={onChangeInput} />
        <button onClick={onClickHandle}>추가</button>
    </div>
}