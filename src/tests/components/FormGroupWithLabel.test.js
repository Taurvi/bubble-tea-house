import React from 'react';
import ReactDOM from 'react-dom';
import FormGroupWithLabel from '../../components/FormGroupWithLabel';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FormGroupWithLabel/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
