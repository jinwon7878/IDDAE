import React from "react";
import TimeSlot from "./TimeSlot";
import styled from "styled-components";

const StyledSlotList = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction:column;
  flex-wrap: wrap;
  width: 90%;
  height: 640px;
`

const TimeSlotList = ({ timeList, setMeetingDateList }) => {
  const isSameDateAndTime = (date1, date2) => {
    return date1.getTime() === date2.getTime();
  }
  const compare = (a,b) => {
    if (a.getFullYear() !== b.getFullYear()) {
      return a.getFullYear() - b.getFullYear();
    }
    if (a.getMonth() !== b.getMonth()) {
      return a.getMonth() - b.getMonth();
    }
    if (a.getDate() !== b.getDate()) {
      return a.getDate() - b.getDate();
    }
    if (a.getTime() !== b.getTime()) {
      return a.getTime() - b.getTime();
    }
  }
  const handleClickSlot = (e) => {
    const date = new Date(e.currentTarget.value); // string => Date object
    const isPos = JSON.parse(e.currentTarget.dataset.ispossible);
    if (isPos) {
      setMeetingDateList((prev) => {
        const meetList = [...prev]
        for(let i = 0; i < meetList.length; i++) {
          if(isSameDateAndTime(new Date(meetList[i]), date)) {
            meetList.splice(i, 1);
            return meetList;
          }
        }
      });
    } else {setMeetingDateList((prev) => {
      const newList = [date, ...prev].sort(compare);
      return newList;
    })}
  };

  return (
    <StyledSlotList>
      {timeList.map((slot, index) => (<TimeSlot onClick={handleClickSlot} key={index} time={slot.time} isPossibleTime={slot.isPossible} />))}
    </StyledSlotList>
  );
};

export default TimeSlotList;
