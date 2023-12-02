import React from "react";
import styled from "styled-components";

const PossibleButton = styled.button`
    display: flex;
    flex: 1 1 12.5%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 0;
    background: pink;
`
const ImpossibleButton = styled.button`
    display: flex;
    flex: 0 1 12.5%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 0;
`

const TimeSlot = ({onClick, index, time, isPossibleTime}) => {
    const weekday = ['일', '월', '화', '수', '목', '금', '토'];
    // const month = time.getMonth()+1;
    // const date = time.getDate();
    // const day = weekday[time.getDay()];
    // const hour = time.getHours(); // integer
    // const min = time.getMinutes(); // integer
    if (isPossibleTime) {
        return (
            <PossibleButton onClick={onClick} key={index} value={time} data-ispossible={isPossibleTime}>
                <p>{time.getMonth()+1}/{time.getDate()} ({weekday[time.getDay()]})</p>
                <p style={{fontWeight: '600'}}>{time.getHours().toString()} : {time.getMinutes().toString().padStart(2, '0')}</p>
            </PossibleButton>
        );
    } else {
        return (
            <ImpossibleButton onClick={onClick} key={index} value={time} data-ispossible={isPossibleTime}>
                <p>{time.getMonth()+1}/{time.getDate()} ({weekday[time.getDay()]})</p>
                <p>{time.getHours().toString()} : {time.getMinutes().toString().padStart(2, '0')}</p>
            </ImpossibleButton>
        );
    }
    
}

export default TimeSlot;
