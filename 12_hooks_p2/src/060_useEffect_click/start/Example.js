import { useEffect, useState, useLayoutEffect } from "react";

const Example = () => {
  const [isDisp, setIsDisp] = useState(true);

  return (
    <>
      {isDisp && <Timer />}
      <button onClick={() => setIsDisp(prev => !prev)}>トグル</button>
    </>
  )
}

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  useEffect(() => {
    // console.log('init');
    let intervalId = null;
    if (isCounting) {
      intervalId = window.setInterval(() => {
        // console.log('interval running');
        setTime(prev => prev + 1);
      }, 1000);
    }
    return () => {
      window.clearInterval(intervalId)
      // console.log('end');
    }
  }, [isCounting])

  useEffect(() => {
    // console.log('updated');

    document.title = 'counter:' + time;
    window.localStorage.setItem('time-key', time);

    return () => {
      // debugger
      // console.log('updated end');
    }
  }, [time]);

  useLayoutEffect(() => {
    const _time = parseInt(window.localStorage.getItem('time-key'));
    if (!isNaN(_time)) {
      setTime(_time);
    }
  }, [])

  return (
    <h3>
      <time>{time}</time>
      <span>秒経過</span>
      <div>
        <button onClick={() => setIsCounting(prev => !prev)}>{isCounting ? "pause" : "start"}</button>
        <button onClick={() => setTime(0)}>reset</button>
      </div>
    </h3>
  );
};

export default Example;
