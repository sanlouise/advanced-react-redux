import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// 'Describe' groups similar tests
describe('Test the app component', () => {

	// Use 'it' to test single attribute of target
	it('Shows the correct text', () => {
		//Create App instance
		const component = renderComponent(App);
		// Use 'expect' to assert something about a target
		expect(component).to.contain('Starting React!');

	})

});
