import React from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
    getItems() {
      console.log(this.props.todos, "--> todos", this.props.filter);
      if(this.props.todos) {
        if(this.props.filter === 'all') {
          return this.props.todos;
        }

        return this.props.todos.filter(
          (item) => item.get('status') === this.props.filter
        );
      }
    }

    render() {
      console.log(this.getItems());
      return <section className="main">
        <ul className="todo-list">
          {this.getItems().map(item =>
            <TodoItem key={item.get('text')}
                      text={item.get('text')} />

          )}
        </ul>
      </section>
    }
}



export default TodoList;
