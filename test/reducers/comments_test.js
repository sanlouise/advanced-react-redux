import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import { SAVE_COMMENT } from '../../src/actions/types'

describe('Comments reducer', () => {

	it('Handles action with an unknown type', () => {
		expect(commentReducer()).to.eql([]);
	});

	it('Handles action SAVE_COMMENT', () => {
		// expect(ccommentReducer('textarea')).to.exist;
	});
})