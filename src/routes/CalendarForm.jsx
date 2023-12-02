import React, { useState, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Container from "../components/Container";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import TimeSlotList from "../components/TimeSlotList";
import ClickedSlotList from "../components/ClickedSlotList";

const RowContainer = styled.div`
  display: flex;
  margin: 0 auto;
  width: 90%;
  height: auto;
`
const WrapCalendar = styled.div`
  display: flex;
  margin: 0 auto;
  border: 1px solid red;
  width: 90%;
  .react-calendar {
    width: 100%;
  }
  .react-calendar__tile {
    height: 3.4rem;
    border-radius: 12px;
  }
`
const MeetingInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  padding: 10px 40px;
  width: auto;
  height: auto;
  border: 3px solid black;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  line-height: 0;
`
const StyledButton = styled.button`
  display: flex;
  margin: 20px auto;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
`

const CalendarForm = () => {
  const location = useLocation();
  const prevState = location.state; // state = {meet_name: ~ , ...}

  const [selectedDay, setSelectedDay] = useState(null); // 현재 클릭한 날짜 (Date 객체)
  const [meetingDateList, setMeetingDateList] = useState([]); // 현재까지 저장된 미팅 가능 날짜 객체들

  const handleClickDay = (day) => {
    setSelectedDay(day);
  }
  const isSameDateAndTime = (date1, date2) => {
    return date1.getTime() === date2.getTime();
  }
  const renderTimeList = (day, meetList) => {
    // meetingDateList의 요소들 중, day와 일수가 같은 date object들의 list 반환 -> timeList
    const runningTime = prevState.runningTime;
    const numSlots = 960 / runningTime;
    let SlotList = [];
    for (let i = 0; i < numSlots; i++) {
      let d = new Date(day);
      d.setMinutes(d.getMinutes() + 360 + runningTime * i);
      let isContain = meetList.some(meetDate => (isSameDateAndTime(new Date(meetDate), d)));
      if (isContain) {
        SlotList.push({time:d, isPossible: true});
      } else {
        SlotList.push({time:d, isPossible: false});
      }
    }
    return SlotList;
  }

  const timeList = useMemo(()=>renderTimeList(selectedDay, meetingDateList), [selectedDay, meetingDateList]);
  // timeList => {time, isPossible}의 List

  const navigate = useNavigate();
  const handleNavigateFinal = ( event ) => {
    navigate('/final', {
        state: {
            meet_name: prevState.meet_name,
            numJoiner: prevState.numJoiner,
            runningTime: prevState.runningTime,
            possibleTimes: meetingDateList,
        }
    });
  };

  return (
  <Container title='미팅 가능 날짜 선택'>
    <WrapCalendar>
      <Calendar onChange={handleClickDay}
        formatDay={(local, date) =>
        date.toLocaleString('en', { day: 'numeric' })
        }
        next2Label={null}
        prev2Label={null}
        showNeighboringMonth={false}
      />
    </WrapCalendar>
    <RowContainer>
      <MeetingInfo>
        <p style={{fontSize: '1.2rem', fontWeight: '1200'}}>미팅 정보</p>
        <p>미팅 이름: {prevState.meet_name}</p>
        <p>참여 인원: {prevState.numJoiner}</p>
        <p>미팅 시간: {prevState.runningTime}분</p>
      </MeetingInfo>
      <ClickedSlotList meetingDateList = {meetingDateList} />
    </RowContainer>
    <p>가능한 시간을 선택해주세요!</p>
    <TimeSlotList timeList={timeList} setMeetingDateList={setMeetingDateList} />
    <StyledButton onClick={handleNavigateFinal}>다음</StyledButton>
  </Container>
  );
};

export default CalendarForm;
