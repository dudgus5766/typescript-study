import React, {ReactElement, useContext, useEffect, useRef, useState} from "react";
import {TodoDispatchContext, useTodoDispatch} from "../App";

interface Props {
    // onClickAdd : (text: string) => void;
    // children: ReactElement;
}
export default function Editor(props: Props){
    const [text, setText] = useState('');
    const dispatch = useTodoDispatch();

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }
    const onClickBtn = () => {
        dispatch.onClickAdd(text);
        setText('');
    }



    return(
        <div>
            <input value={text} onChange={onChangeInput}/>
            <button onClick={onClickBtn}>추가</button>
        </div>
    )
}
