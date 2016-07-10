import jsdom from 'jsdom';
// Set up testing environment to run like browser in command line
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;

// Build 'renderComponent' helper to render react class

// Build helper to simulate events

// Set up chai-jquery