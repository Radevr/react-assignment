const React = require('react');
const { Component } = React;

class Gugudan extends React.Component {
    state = {
        first: Math.ceil(Math.random() * 9),
        second: Math.ceil(Math.random() * 9),
        value: '',
        result : ''
    };

    refInput = (c) => { this.input = c };

    onChange = (e) => { this.setState({ value: e.target.value })};

    onSubmit = (e) => {
        e.preventDefault();
        if(parseInt(this.state.value) === this.state.first * this.state.second) {
            this.setState({
                result: `${this.state.first} X ${this.state.second} = ${this.state.value}, 딩동댕! 정답입니다.`,
                first: Math.ceil(Math.random() * 9),
                second: Math.ceil(Math.random() * 9),
                value: ''
            })
        } else {
            this.setState({
                result: '땡! 오답입니다.',
                value: ''
            })
        }
        this.input.focus();
    }

    render() {
        return(
            <React.Fragment>
                <p>{this.state.first} 곱하기 {this.state.second} = ?</p>
                <form onSubmit={this.onSubmit}>
                    <label htmlFor="answer">정답 입력 : </label>
                    <input id="answer" ref={this.refInput} value={this.state.value} onChange={this.onChange} />
                    <button type="submit">입력</button>
                </form>
                <p>{this.state.result}</p>
            </React.Fragment>
        )
    }
}

module.exports = Gugudan;