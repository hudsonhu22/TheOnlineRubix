import { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState<number | null>(null);

  useEffect(() => {
    if (isRunning) {
      const id = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
      setIntervalId(id);

      return () => clearInterval(id);
    } else {
      if (intervalId) {
        clearInterval(intervalId);
      }
    }
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning(prevState => !prevState);
  };

  const handleReset = () => {
    setSeconds(0);
    setIsRunning(false);
  };

  return (
    <div>
      <div className='RubixBar'>
        <p className='timerTime'>{seconds} seconds</p>
        <button className='RubixButton' onClick={handleStartStop}>
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button className='RubixButton' onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;
