import { Todo } from '../types/types';

interface Todos {
    todos: Todo[]
}

const TotalTodoCount = ({ todos }: Todos) => {
    const totalTodoList = todos.length;
    const completedTodoList = todos.filter(todo => todo.completed).length;
    return (
        <div className="total-todo-count">
            {`Total: ${completedTodoList} / Completed: ${totalTodoList}`}
        </div>
    )
}

export default TotalTodoCount;