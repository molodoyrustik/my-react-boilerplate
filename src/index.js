import React from 'react';
import { render } from 'react-dom';

import Root from './components/Root';

const Comp = () => {
  return <h1>Hello</h1>;
};

render(<Root />, document.getElementById('root'));
