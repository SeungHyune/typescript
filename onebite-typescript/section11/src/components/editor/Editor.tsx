import { useState, useRef } from 'react';
import { useTodoDispatch } from '../../App';

export default function Editor() {
    
    const dispatch = useTodoDispatch();
    const inputRef = useRef(null);
    const [text, setText] = useState('');
    const [warning, setWarning] = useState(false);
    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

    const onSubmitHandle = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(text.trim().length >= 2) {
            dispatch?.onClickAdd(text);
            setText('');
            setWarning(false);
        } else {
            setWarning(true);
            inputRef.current && (inputRef.current as HTMLInputElement).focus();
        }
    }

    return (
        <div className="editor">
            <form onSubmit={onSubmitHandle}>
                <input type="text" value={text} onChange={onChangeInput} ref={inputRef} />
                <button>추가</button>
            </form>
            {warning ? <div style={{
                color: 'red',
                textAlign: 'center',
                marginTop: 10,
                fontStyle: 'italic'
            }}>공백 없이 두 글자 이상 입력해주세요.</div> : null}
        </div>
    )
}