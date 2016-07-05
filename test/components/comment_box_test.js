import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

// 'Describe' groups similar tests
describe('Test the comment_box component', () => {

	let component = renderComponent(CommentBox);

	it('Has a text area', () => {
		expect(component.find('textarea')).to.exist;

	});

	it('Has the right class', () => {
		expect(component).to.have.class('comment-box');
	});

	it('Has a button', () => {
		expect(component.find('button')).to.exist;

	});

});
