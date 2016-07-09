import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import { SAVE_COMMENT } from '../../src/actions/types'

describe('Comments reducer', () => {

	it('Handles action with an unknown type', () => {
		expect(commentReducer(undefined, {})).to.eql([]);
	});

	it('Handles action SAVE_COMMENT', () => {
		const action = { type: SAVE_COMMENT, payload: 'New Comment'};
		expect(commentReducer([], action)).to.eql(['New Comment']);
	});
})