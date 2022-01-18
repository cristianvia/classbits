import Header from '../Components/Header/Header';
import React from 'react';
import './ChronometerStyles.css';

export default function Chronometer() {
    const formatTime = (timer) => {
        const getSeconds = `0${(timer % 60)}`.slice(-2)
        const minutes = `${Math.floor(timer / 60)}`
        const getMinutes = `0${minutes % 60}`.slice(-2)
        const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)

        return `${getHours} : ${getMinutes} : ${getSeconds}`
    }

    const Timer = () => {
        const { timer, isActive, isPaused, handleStart, handlePause, handleResume, handleReset } = useTimer(0)

        return (
            <div className="chronoContainer">
                <img className="clockC" src="/images/clock.png" alt="clock" width="150px" height="200px"/>

                <div className="appChrono">
                    <div className='stopwatch-card'>
                        <p className="pFont">{formatTime(timer)}</p>
                        <div className='buttons'>
                            {
                                !isActive && !isPaused ?
                                    <button className="buttonChrono" onClick={handleStart}>Comença</button>
                                    : (
                                        isPaused ? <button className="buttonChrono" onClick={handlePause}>Pausa</button> :
                                            <button className="buttonChrono" onClick={handleResume}>Continua</button>
                                    )
                            }
                            <button className="buttonChrono" onClick={handleReset} disabled={!isActive}>Reset</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const useTimer = (initialState = 0) => {
        const [timer, setTimer] = React.useState(initialState)
        const [isActive, setIsActive] = React.useState(false)
        const [isPaused, setIsPaused] = React.useState(false)
        const countRef = React.useRef(null)

        const handleStart = () => {
            setIsActive(true)
            setIsPaused(true)
            countRef.current = setInterval(() => {
                setTimer((timer) => timer + 1)
            }, 1000)
        }

        const handlePause = () => {
            clearInterval(countRef.current)
            setIsPaused(false)
        }

        const handleResume = () => {
            setIsPaused(true)
            countRef.current = setInterval(() => {
                setTimer((timer) => timer + 1)
            }, 1000)
        }

        const handleReset = () => {
            clearInterval(countRef.current)
            setIsActive(false)
            setIsPaused(false)
            setTimer(0)
        }

        return { timer, isActive, isPaused, handleStart, handlePause, handleResume, handleReset }
    }

    return (
        <>
            <Header />
            <main>
                <Timer />
            </main>
        </>
    );
}
