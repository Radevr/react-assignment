import React, { useState, useRef } from 'react';
// const React = require('react');
// const { useState } = require('react');
// const { useRef } = require('react');

const ResponseCheck = () => {
  const [state, setState] = useState('waiting');
  const [message, setMessage] = useState('클릭해서 시작하세요.');
  const [result, setResult] = useState([]);

  const timeout = useRef(null);
  const startTime = useRef();
  const endTime = useRef();

  const checkResult = () => {
    if (result.length !== 0) {
      return (
        <div>
          <div id="container">
            <div id="checkCount">횟수 : {result.length}</div>
            <div id="average">평균 : {result.reduce((a, c) => a + c / result.length)}ms</div>
          </div>
          <button type="button" onClick={resetResult}>Reset</button>
        </div>
      )
    }
  };

  const resetResult = () => {
    setState([]);
  };

  const onClickScreen = () => {
    if (state === 'waiting') {
      setState('ready');
      setMessage('초록색이 되면 클릭하세요.');
      timeout.current = setTimeout(() => {
        setState('now');
        setMessage('지금 클릭하세요!');
        startTime.current = new Date();
      }, Math.floor(Math.random() * 1000) + 2000);
    } else if (state === 'ready') {
      clearTimeout(timeout.current);
      setState('waiting');
      setMessage('성급하시군요! 초록색이 된 후에 클릭하세요');
    } else if (state === 'now') {
      endTime.current = new Date();
      console.log(endTime.current);
      setState('waiting');
      setMessage('클릭해서 시작하세요.');
      setResult((prev) => { return [...prev, endTime.current - startTime.current] });
    }
  };

  return (
    <>
      <div id="screen" className={state} onClick={onClickScreen}>
        {message}
      </div>
      {checkResult()}
    </>
  )
};

export default ResponseCheck; // module.exports =  ResponseCheck;
