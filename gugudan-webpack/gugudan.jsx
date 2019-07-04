const React = require('react');
const { Component } = React;

// class Component
// class Gugudan extends React.Component {
//     const state = {
//         first: Math.ceil(Math.random() * 9),
//         second: Math.ceil(Math.random() * 9),
//         value: '',
//         result : ''
//     };
//
//     const refInput = (c) => { this.input = c };
//
//     const onChange = (e) => { this.setState({ value: e.target.value })};
//
//     const onSubmit = (e) => {
//         e.preventDefault();
//         if(parseInt(this.state.value) === this.state.first * this.state.second) {
//             this.setState({
//                 result: `${this.state.first} X ${this.state.second} = ${this.state.value}, 딩동댕! 정답입니다.`,
//                 first: Math.ceil(Math.random() * 9),
//                 second: Math.ceil(Math.random() * 9),
//                 value: ''
//             })
//         } else {
//             this.setState({
//                 result: '땡! 오답입니다.',
//                 value: ''
//             })
//         }
//         this.input.focus();
//     }
//
//     render() {
//         return(
//             <React.Fragment>
//                 <p>{this.state.first} 곱하기 {this.state.second} = ?</p>
//                 <form onSubmit={this.onSubmit}>
//                     <label htmlFor="answer">정답 입력 : </label>
//                     <input id="answer" ref={this.refInput} value={this.state.value} onChange={this.onChange} />
//                     <button type="submit">입력</button>
//                 </form>
//                 <p>{this.state.result}</p>
//             </React.Fragment>
//         )
//     }
// }

const Gugudan = () => {
    const [first, setFirst] = React.useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] = React.useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = React.useState('');
    const [result, setResult] = React.useState('');

    const refInput = React.useRef(null);

    const onSubmit = (e) => {
        e.preventDefault();
        if(parseInt(value) === first * second) {
            setResult(`${first} X ${second} = ${value}, 딩동댕! 정답입니다.`);
            setFirst(Math.ceil(Math.random() * 9));
            setSecond(Math.ceil(Math.random() * 9));
            setValue('');
        } else {
            setResult('땡! 오답입니다.');
            setValue('');
        }
        refInput.current.focus();
    };

    const onChange = (e) => { setValue(e.target.value); };

    return(
        <React.Fragment>
            <p>{first} 곱하기 {second} = ?</p>
            <form onSubmit={onSubmit}>
                <label htmlFor="answer">정답 입력 : </label>
                <input id="answer" ref={refInput} value={value} onChange={onChange} />
                <button type="submit">입력</button>
            </form>
            <p>{result}</p>
        </React.Fragment>
    )
};

module.exports = Gugudan;