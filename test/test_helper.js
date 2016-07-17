import jsdom from 'jsdom';
import jquery from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';
import chaiJquery from 'chai-jquery';

// Set up testing environment to run like browser in command line
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
//Because we imported jQuery with custom 'jquery' var name. It tells jQuery to not 
//reach out and find the DOM, but to just be responsible for the fake DOM we just created.
const $ = jquery(global.window);

// Build 'renderComponent' helper to render react class.
// We need state because comment_list is connected to redux.
function renderComponent(ComponentClass, props, state) {
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );

  return $(ReactDOM.findDOMNode(componentInstance)); // produces HTML
}
// Build helper to simulate events
//This[0] to trigger the helper in the first array element
//val is jQuery method
$.fn.simulate = function(eventName, value) {
  if (value) {
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]);
}



// Set up chai-jquery
chaiJquery(chai, chai.util, $);
export { renderComponent, expect };
