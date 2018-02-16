import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Repro from './Repro';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Repro />, document.getElementById('root'));
registerServiceWorker();
