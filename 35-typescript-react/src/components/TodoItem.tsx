// #2. Todo Item 작성
import { ToDoItem } from '../types/types';
import '../styles/TodoList.scss';

// TodoItem의 props 타입 정의
// { todo } => { todo: {id, text, completed} }

interface Props {
  todo: ToDoItem;
  toggleComplete(id: number): void;
}

export const TodoItem = ({ todo, toggleComplete }: Props) => {
  return (
    // #7. css 추가
    <li className={todo.completed ? 'completed' : ''}>
      <label>
        <input
          type='checkbox'
          defaultChecked={todo.completed}
          // #6. 토글
          onChange={() => toggleComplete(todo.id)}
        />
        {todo.text}
      </label>
    </li>
  );
};