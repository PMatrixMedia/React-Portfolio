import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Intro from './Components/Intro/Intro';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Intro />, document.getElementById('root'));
registerServiceWorker();
