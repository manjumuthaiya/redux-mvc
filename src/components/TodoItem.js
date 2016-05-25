import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

import TextInput from './TextInput';


const TodoItem = ({text, isCompleted}) => {
  var itemClass = classNames({
    'todo': true,
    'completed': isCompleted
  })
  return <li className={itemClass}>
    <div className="view">
      <input type="checkbox"
             className="toggle" />
      <label htmlFor="todo">
        {text}
      </label>
      <button className="destroy"></button>
    </div>
    <TextInput />
  </li>
};

// class TodoItem extends React.Component {
//   render() {
//     return <li className="todo">
//       <div className="view">
//         <input type="checkbox"
//                className="toggle" />
//         <label htmlFor="todo">
//           {this.props.text}
//         </label>
//         <button className="destroy"></button>
//       </div>
//       <TextInput />
//     </li>;
//   }

// };

export default TodoItem;
