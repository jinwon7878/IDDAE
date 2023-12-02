import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import Container from "../components/Container";

const MeetingInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto 20px auto;
  padding: 10px 20px;
  width: auto;
  height: auto;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  line-height: 0;
`

const Final = () => {
  const location = useLocation();
  const prevState = location.state; // state = {meet_name: ~ , ...}

  return (
    <Container title='미팅 가능 날짜 최종'>
        <MeetingInfo>
            <p style={{fontSize: '1.2rem', fontWeight: '1200'}}>최종</p>
            <p>미팅 이름: {prevState.meet_name}</p>
            <p>참여 인원: {prevState.numJoiner}</p>
            <p>미팅 시간: {prevState.runningTime}분</p>
            {prevState.possibleTimes.map((date)=>{
                return <p>{date.toString()}</p>
            })}
        </MeetingInfo>
    </Container>
  );
};

export default Final;
