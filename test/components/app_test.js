import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// 'Describe' groups similar tests
describe('Test the app component', () => {
	let component = renderComponent(App);

	// Use 'it' to test single attribute of target
	it('Displays the comment box', () => {
		// Use 'expect' to assert something about a target
		expect(component.find('.comment-box')).to.exist;

	});

	it('Shows the comment list', () => {
		expect(component.find('.comment-list')).to.exist;
	});

});
