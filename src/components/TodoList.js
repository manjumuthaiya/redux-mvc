import React from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  return <section className="main">
    <ul className="todo-list">
      {props.todos.map(item =>
        <TodoItem key={item.get('text')}
                  text={item.get('text')} />

      )}
    </ul>
  </section>

};

export default TodoList;
