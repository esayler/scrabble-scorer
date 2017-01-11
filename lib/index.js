import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

require('./styles/reset.css');
require('./styles/style.scss');

render(<App />, document.getElementById('app'));
