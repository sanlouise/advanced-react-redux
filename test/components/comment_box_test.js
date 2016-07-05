import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

// 'Describe' groups similar tests
describe('Test the comment_box component', () => {

	// Use 'it' to test single attribute of target
	it('Has a text area', () => {
		//Create App instance
		const component = renderComponent(CommentBox);
		// Use 'expect' to assert something about a target
		expect(component.find('textarea')).to.exist;

	});

	it('Has a button', () => {
		const component = renderComponent(CommentBox);
		expect(component.find('button')).to.exist;

	});

});
