import { useState, useEffect, useContext } from 'react';
import { TodoStateContext } from '../../../App';
import { Todo } from '../../../types/types';
import Editor from '../../editor/Editor';
import TodoList from '../../todolist/TodoList';

import Button from '../Button';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import './index.css';


interface Todos {
    todoTab: string;
    onTodoTabChange(type: string): void
}

const Home = ({todoTab, onTodoTabChange}: Todos) => {
    const todoList = useContext(TodoStateContext);

    const [todos,setTodos] = useState<Todo[] | []>([]);
    const [curDate,setCurDate] = useState(new Date());
    const headText = `${curDate.getFullYear()}년 ${curDate.getMonth()+1}월`;

    useEffect(() => {
        const firstDay = new Date(
            curDate.getFullYear(),
            curDate.getMonth(),
            1
        ).getTime();

        const lastDay = new Date(
            curDate.getFullYear(),
            curDate.getMonth() + 1,
            0,
            23,
            59,
            59
        ).getTime();

        if(todoList) {
            const newTodoList = todoList.filter((it) => firstDay <= it.date && it.date <= lastDay);
            setTodos(newTodoList);

        }

    }, [curDate, todoList]);

    // Decrease
    const decreaseMonth = () => {
        setCurDate(
            new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate())
        )
    }

    // Increase
    const increaseMonth = () => {
        setCurDate(
            new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate())
        )
    }

    return (
        <div>
            <header>
                <Button onClick={decreaseMonth}><SlArrowLeft/></Button>
                <h1 className="date">{headText}</h1>
                <Button onClick={increaseMonth}><SlArrowRight/></Button>
            </header>
            <h1>TodoList</h1>
            <div className="todo-wrap">
                <Editor/>
                <TodoList todos={todos} todoTab={todoTab} onTodoTabChange={onTodoTabChange}/>
            </div>
        </div>
    )
}

export default Home;