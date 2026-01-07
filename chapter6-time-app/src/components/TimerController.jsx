import React, { useRef } from 'react'
import { useState,  useEffect } from 'react'


const INIT_TIME = 10;

const TimerController = () => {

    const [time, setTime] = useState(INIT_TIME);
    const [isRunning, setIsRunning] = useState(false)
    const intervalId = useRef();

    useEffect(()=>{
        if(time === 0){
            clearInterval(intervalId.current);
            setTime(INIT_TIME);
        }
    }, [time])


    return (
        <div>
            <div className='timerDisplay'>
                <span className='value'>{time}</span>
                <span className='unit'>초</span>
            </div>
            <div className='timerButton'>
                {isRunning ? <button onClick={()=>{
                    clearInterval(intervalId.current);
                    setIsRunning(false);
                }}>일시정지</button> : 
                (<button
                    className='startButton'
                    onClick={() => {
                         intervalId.current = setInterval(() => {
                            setTime((prevTime) => prevTime - 1);
                        }, 1000)
                        setIsRunning(true);
                    }}>
                    시작
                </button>)}
            </div>

        </div>

    )
}

export default TimerController