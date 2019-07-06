const React = require('react');
const ReactDom = require('react-dom');
const { hot } = require('react-hot-loader/root');

const Gugudan = require('./gugudan');

const Hot = hot(Gugudan);

ReactDom.render(<Hot />, document.querySelector('#root'));


