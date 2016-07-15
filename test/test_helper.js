import jsdom from 'jsdom';
import jquery from 'jquery';
import chai from 'chai';
import chai-jquery from 'chai-jquery';
import TestUtils from 'react-addons-test-utils'

// Set up testing environment to run like browser in command line
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
//Because we imported jQuery with custom 'jquery' var name. It tells jQuery to not 
//reach out and find the DOM, but to just be responsible for the fake DOM we just created.
const $ = jquery(global.window);

// Build 'renderComponent' helper to render react class
function renderComponent(ComponentClass) {
	const componentInstance = TestUtils.renderIntoDocument(<ComponentClass />);
}


// Build helper to simulate events

// Set up chai-jquery
