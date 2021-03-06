import React from 'react';
import ReactDOM from 'react-dom';
import {List, Map} from 'immutable';

import TodoApp from './components/TodoApp';
require('../node_modules/todomvc-app-css/index.css');

const todos = List.of(
  Map({id: 1, text: 'Learn React', status: 'active', editing: false}),
  Map({id: 2, text: 'Clean house', status: 'active', editing: false}),
  Map({id: 3, text: 'Pay bills', status: 'completed', editing: false})
);

const filter = 'all';

ReactDOM.render(
  <TodoApp todos={todos} filter={filter} />,
  document.getElementById('app')
);
