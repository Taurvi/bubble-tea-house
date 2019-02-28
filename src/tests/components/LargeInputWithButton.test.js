import React from 'react';
import ReactDOM from 'react-dom';
import LargeInputWithButton from '../../components/LargeInputWithButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LargeInputWithButton/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
