import React from 'react';
import TestUtils from 'react-addons-test-utils';
import TodoList from '../../src/components/TodoList';
import {expect} from 'chai';
import {List, Map} from 'immutable';

const {renderIntoDocument, scryRenderedDOMComponentsWithTag} = TestUtils;
var todos;

describe('TodoList', function() {
  beforeEach(function(done) {
    todos = List.of(
      Map({id: 1, text: 'Learn React', status: 'active'}),
      Map({id: 2, text: 'Write tests', status: 'active'}),
      Map({id: 3, text: 'Cook dinner', status: 'completed'})
    );
    done();
  });
  it('renders a list with only the active items if the filter is active', () => {
    const filter = 'active';

    const component = renderIntoDocument(
      <TodoList filter={filter} todos={todos} />
    );

    const items = scryRenderedDOMComponentsWithTag(component, 'li');

    expect(items.length).to.equal(2);
    expect(items[0].textContent).to.contain('Learn React');
    expect(items[1].textContent).to.contain('Write tests');
  });

  it('renders a list with only the completed items if the filter is completed', () => {
    const filter = 'completed';

    const component = renderIntoDocument(
      <TodoList filter={filter} todos={todos} />
    );

    const items = scryRenderedDOMComponentsWithTag(component, 'li');

    expect(items.length).to.equal(1);
    expect(items[0].textContent).to.contain('Cook dinner');
  });

  it('renders a list with all items if the filter is all', () => {
    const filter = 'all';

    const component = renderIntoDocument(
      <TodoList filter={filter} todos={todos} />
    );

    const items = scryRenderedDOMComponentsWithTag(component, 'li');

    expect(items.length).to.equal(3);
    expect(items[0].textContent).to.contain('Learn React');
    expect(items[1].textContent).to.contain('Write tests');
    expect(items[2].textContent).to.contain('Cook dinner');

  });
});
