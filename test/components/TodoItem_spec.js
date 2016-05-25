import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import TodoItem from '../../src/components/TodoItem';
import {expect} from 'chai';

const {renderIntoDocument,
       scryRenderedDOMComponentsWithTag} = TestUtils;

describe('TodoItem', function() {
  it('renders an item', function(){
    const text = 'Jumping jacks';

    var Wrapper = React.createClass({
      render: function() {
        return <TodoItem text={text}/>;
      }
    })
    const component = renderIntoDocument(
      <Wrapper/>
    );
    const domTodo = scryRenderedDOMComponentsWithTag(component, 'li');
    expect(domTodo.length).to.equal(1);
    expect(domTodo[0].textContent).to.contain('Jumping jacks');
  });

  it('strikes through an item if it is completed', function(){
    const text = 'Jumping jacks';

    var Wrapper = React.createClass({
      render: function() {
        return <TodoItem text={text} isCompleted={true}/>;
      }
    })
    const component = renderIntoDocument(
      <Wrapper/>
    );
    const domTodo = scryRenderedDOMComponentsWithTag(component, 'li');
    expect(domTodo[0].classList.contains('completed')).to.equal(true);
  });
});
