import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Hello from './Users';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
configure({adapter: new Adapter()});
const mockStore = configureStore();
const store = mockStore()

const props = {};

describe('My users Component', () => {
    it('should render correctly with default props and redux store', () => {
        
        const wrapper = shallow(
            <Provider store={store}>
             <Hello {...props} />
            </Provider>
        );
        expect(wrapper).toMatchSnapshot();
   
    });
});