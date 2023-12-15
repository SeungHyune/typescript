import React, { useReducer, useContext } from 'react';
import './App.css';
import Editor from './components/Editor';
import TodoList from './components/TodoList';
import { Todo } from './types/types';
import { setItem, getItem } from './utils/storage';
import { generateUUID } from'./utils/uuid';
import _ from 'lodash';
import TotalTodoCount from './components/TotalCount';

type onCreateTodo = {
  type: 'CREATE';
  data: {
    id: string;
    content: string;
    completed: boolean;
  }
}

type onDeleteTodo = {
  type: 'DELETE' ; 
  id: string;
}

type onUpdateTodo = {
  type: 'UPDATE';
  data: {
    id: string;
    content: string;
    completed: boolean;
  }
}

type Action = onCreateTodo | onDeleteTodo | onUpdateTodo

const TODOS = 'todos';

function reducer(state: Todo[], action: Action) {
  switch(action.type) {
    case 'CREATE': {
      setItem(TODOS, [...state, action.data]);
      return [...state, action.data];
    }
    case 'DELETE': {
      const removeTodos = state.filter((todo) => todo.id !== action.id);
      setItem(TODOS, [...removeTodos]);
      return removeTodos;
    }
    case 'UPDATE': {
      const todos = [...state];
      const updateTodoIndex = state.findIndex(todo => todo.id === action.data.id);
      todos[updateTodoIndex] = {...todos[updateTodoIndex], content: action.data.content, completed: action.data.completed};
      setItem(TODOS, [...todos]);
      return todos;
    }
  }
}

export const TodoStateContext = React.createContext<Todo[] | null>(null);

export const TodoDispatchContext = React.createContext<{
  onClickAdd: (text: string) => void;
  onClickDelete: (id: string) => void;
  onTodoUpdate: (id: string, text: string, completed: boolean) => void;

} | null>(null);

export function useTodoDispatch() {
  const dispatch = useContext(TodoDispatchContext);
  if(!dispatch) throw new Error('TodoDispatchContext에 문제가 있습니다.');
  return dispatch
}

function App() {
  const [todos, dispatch] = useReducer(reducer, getItem(TODOS, []));

  const onClickAdd = (text: string) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: generateUUID(),
        content: text,
        completed: false,
      }
    })

  };

  const onClickDelete = (id: string) => {
    dispatch({
      type: 'DELETE',
      id,
    })
  }

  const onTodoUpdate = (id: string, text: string, completed: boolean) => {
    dispatch({
      type: 'UPDATE',
      data: {
        id,
        content: text,
        completed
      }
    })
  }

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
            <TotalTodoCount />
            <TodoList todos={todos} />
          </div>
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
