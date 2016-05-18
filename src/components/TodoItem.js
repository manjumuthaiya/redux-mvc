import React from 'react';
import ReactDOM from 'react-dom';

import TextInput from './TextInput';


const TodoItem = (props) => {
  return <li className="todo">
    <div className="view">
      <input type="checkbox"
             className="toggle" />
      <label htmlFor="todo">
        {props.text}
      </label>
      <button className="destroy"></button>
    </div>
    <TextInput />
  </li>
};

export default TodoItem;
