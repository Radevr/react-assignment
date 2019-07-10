const React = require('react');
const ReactDOM = require('react-dom');
import ResponseCheck from './ResponseCheck'; // const ResponseCheck = require('ResponseCheck');
const { hot } = require('react-hot-loader/root');

const Hot = hot(ResponseCheck);

ReactDOM.render(<Hot />, document.querySelector('#root'));