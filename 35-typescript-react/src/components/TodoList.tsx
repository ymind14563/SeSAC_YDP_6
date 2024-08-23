import React, { useRef, useState } from 'react';
import { TodoItem } from './TodoItem';
import { ToDoItem } from '../types/types';

export const TodoList = () => {
  const [todos, setTodos] = useState<ToDoItem[]>([]); // 전체 Todo 목록

  // #3. Todo 추가
  const [newTodo, setNewTodo] = useState<string>(''); // 새로 추가될 Todo 한 개

  // #4. 포커싱
  const inputRef = useRef<HTMLInputElement>(null);
  // <HTMLInputElement>: 참조하려는 DOM 요소의 타입을 지정
  // 즉, "input 요소를 참조하고 있다" 라는 의미

  // #3. Todo 추가 함수
  const addTodo = () => {
    const updatedTodos = [
      ...todos,
      { id: Date.now(), text: newTodo, completed: false },
    ];
    setTodos(updatedTodos); // 전체 Todo에 새로운 Todo 추가
    setNewTodo(''); // input 초기화
  };

  // #4. 포커싱
  // useRef로 생성한 InputRef를 사용해 입력창에 포커싱
  const focusInput = () => {
    inputRef.current?.focus(); // current 뒤에 ? 의미: 존재하면 포커싱
  };

  // #5. 엔터키
  // key Down event 입력시 Todo 추가
  const handelKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  // #6. 토글
  // Todo 아이템 완료 상태 변경 함수
  const toggleComplete = (targetId: number) => {
    const updatedTodos = todos.map((todo) => {
      return todo.id === targetId
        ? { ...todo, completed: !todo.completed }
        : todo;
    });
    setTodos(updatedTodos);
  };


  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type='text'
          // #3. Todo 추가
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder='add new todo!'
          // #4. 포커싱
          ref={inputRef} // ref 연결
          onKeyDown={handelKeyDown}
        />
        <button onClick={addTodo}>ADD</button>
        <button onClick={focusInput}>Focus</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} />
        ))}
      </ul>
    </div>
  );
};