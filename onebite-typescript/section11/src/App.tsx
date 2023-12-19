import React, { useReducer, useContext, useState } from 'react';
import './App.css';
import Home from './components/common/Home';
import { Todo } from './types/types';
import { setItem, getItem } from './utils/storage';
import { generateUUID } from'./utils/uuid';
import _ from 'lodash';

type onCreateTodo = {
  type: 'CREATE';
  data: {
    id: string;
    content: string;
    completed: boolean;
    date: number;
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

type onTodoMonthChange = {
  type: 'CHANGE';
  data: Todo[]
}

type Action = onCreateTodo | onDeleteTodo | onUpdateTodo | onTodoMonthChange

const TODOS = 'todos';
const TODO_TAB = 'todoTab'

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
    case 'CHANGE': {
      return action.data;
    }
  }
}

export const TodoStateContext = React.createContext<Todo[] | null>(null);

export const TodoDispatchContext = React.createContext<{
  onClickAdd: (text: string) => void;
  onClickDelete: (id: string) => void;
  onTodoUpdate: (id: string, text: string, completed: boolean) => void;
  onTodoMonthChange: (newTodoList: Todo[]) => void;
} | null>(null);

export function useTodoDispatch() {
  const dispatch = useContext(TodoDispatchContext);
  if(!dispatch) throw new Error('TodoDispatchContext에 문제가 있습니다.');
  return dispatch
}

function App() {
  const [todos, dispatch] = useReducer(reducer, getItem(TODOS, []));
  const [todoTab, setTodoTab] = useState(getItem(TODO_TAB, ['Total'])[0]);

  const onClickAdd = (text: string) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: generateUUID(),
        content: text,
        completed: false,
        date: new Date().getTime(),
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

  const onTodoTabChange = (type: string) => {
    setItem(TODO_TAB, [type])
    setTodoTab(type);

  }

  const onTodoMonthChange = (newTodoList: Todo[]) => {
    dispatch({
      type: 'CHANGE',
      data: [...newTodoList]
    });
  }

  return (
    <div className="App">
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={{
          onClickAdd,
          onClickDelete,
          onTodoUpdate,
          onTodoMonthChange
        }}>
          <Home todoTab={todoTab} onTodoTabChange={onTodoTabChange} />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
