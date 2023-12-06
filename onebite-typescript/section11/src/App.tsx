import React, { useRef, useEffect, useReducer, useContext } from 'react';
import './App.css';
import Editor from './components/Editor';
import TodoItem from './components/TodoItem';
import { Todo } from './types/types';
import _ from 'lodash';

type onCreateTodo = {
  type: 'CREATE';
  data: {
    id: number;
    content: string;
  }
}

type onDeleteTodo = {
  type: 'DELETE' ; 
  id: number
}

type onUpdateTodo = {
  type: 'UPDATE';
  data: {
    id: number;
    content: string;
  }
}

type Action = onCreateTodo | onDeleteTodo | onUpdateTodo

function reducer(state: Todo[], action: Action) {
  switch(action.type) {
    case 'CREATE': {
      return [...state, action.data];
    }
    case 'DELETE': {
      return state.filter((todo) => todo.id !== action.id);
    }
    case 'UPDATE': {
      return state.filter((todo) => todo.id === action.data.id ? {...todo, content: action.data.content} : todo)
    }
  }
}

export const TodoStateContext = React.createContext<Todo[] | null>(null);
export const TodoDispatchContext = React.createContext<{
  onClickAdd: (text: string) => void;
  onClickDelete: (id: number) => void;
  onTodoUpdate: (id: number, text: string) => void;
} | null>(null);

export function useTodoDispatch() {
  const dispatch = useContext(TodoDispatchContext);
  if(!dispatch) throw new Error('TodoDispatchContext에 문제가 있다.');
  return dispatch
}

function App() {
  const [todos, dispatch] = useReducer(reducer, []);

  const idRef = useRef(0);

  const onClickAdd = (text: string) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        content: text,
      }
    })

  };

  const onClickDelete = (id: number) => {
    dispatch({
      type: 'DELETE',
      id: id,
    })
  }

  const onTodoUpdate = (id: number, text: string) => {
    dispatch({
      type: 'UPDATE',
      data: {
        id,
        content: text
      }
    })
  }

  useEffect(() => {
    console.log(todos);
  }, [todos])

  return (
    <div className="App">
      <h1>TodoList</h1>
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={{
          onClickAdd,
          onClickDelete,
          onTodoUpdate
        }}>
          <div className="todo-wrap">
            <Editor/>
            <ul>
              {todos.map(todo => (
                <TodoItem key={todo.id} {...todo} />
              ))}
            </ul>
          </div>
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
