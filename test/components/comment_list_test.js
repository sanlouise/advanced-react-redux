import { renderComponent, expect} from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('Show comment list component', () => {

	let component = renderComponent(CommentList, null, { comments: ['test comment', 'another comment']});

	it('Shows comments in LI', () => {
		expect(component.find('li').length).to.equal(2);
	});

	it('Shows each provided comment', () => {
		expect(component).to.contain('test comment');
		expect(component).to.contain('another comment');
	});


});