import React, { useState } from 'react'
import styles from './Timer.module.css'

const selectedTimerStyle = {
    backgroundColor: "#D60000",
    color: "#fff"
}

function Timer({ setTimer }) {
    const [state, setState] = useState('OFF')
    const handleTimer = (e) => {
        setState(e.target.value)
        setTimer(e.target.value)
    }

    return (
        <div className={styles.container}>
            <p>Timer</p>
            <button className={styles.timerOff}
                onClick={handleTimer}
                value="OFF"
                style={state === 'OFF' ? selectedTimerStyle : {}}
            >
                OFF
            </button>
            <button className={styles.timer5sec}
                onClick={handleTimer}
                value="5 sec"
                style={state === '5 sec' ? selectedTimerStyle : {}}
            >
                5 sec
            </button>
            <button className={styles.timer10sec}
                onClick={handleTimer}
                value="10 sec"
                style={state === '10 sec' ? selectedTimerStyle : {}}
            >
                10 sec
            </button>
        </div>
    )
}

export default Timer