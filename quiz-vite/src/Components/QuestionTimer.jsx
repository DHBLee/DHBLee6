import {useState, useEffect, React } from 'react'

const QuestionTimer = ({timeout, onTimeout, mode}) => {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
        const timer = setTimeout(onTimeout, timeout);

        return () => {
            clearTimeout(timer);
        };
  }, [timeout, onTimeout])
  
  useEffect(() => {
    const interval = setInterval(() => {
        setRemainingTime((prevRemainingTime) => prevRemainingTime - 100)
    }, 100);

    return () => {
        clearInterval(interval);
    }

    }, [])

    return (
        <progress 
            id="quesiton-time"
            max={timeout}
            value={remainingTime}
            className={`${mode} 1440:mt-auto 1440:mb-[4rem]`}
        />
  )
}

export default QuestionTimer