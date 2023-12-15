import { useContext } from 'react';
import { TodoStateContext } from '../App';

const TotalTodoCount = () => {
    const todos = useContext(TodoStateContext);
    const totalTodoList = todos?.length;
    const completedTodoList = todos?.filter(todo => todo.completed).length;
    return (
        <div className="total-todo-count">
            {`Total: ${completedTodoList} / Completed: ${totalTodoList}`}
        </div>
    )
}

export default TotalTodoCount;