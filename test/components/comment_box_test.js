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

	// Again, describe similar test. Now nested.
	describe('Enter text in comment_box', () => {

		//Simulate a change event before each test. New text = "New Comment"
		beforeEach(() => {
			component.find('textarea').simulate('change', 'New Comment');
		});

		it('Shows entered text', () => {
			expect(component.find('textarea').to.have.value('New Comment');
		});

		it('Is cleared when submitted', () => {

		});

	});

});
