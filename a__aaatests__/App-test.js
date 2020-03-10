/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../src/App';
// import Login from '../src/screens/Login';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    renderer.create(<App />);
    // renderer.create(<Login />);
});
