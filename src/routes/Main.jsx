import React from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

import Container from "../components/Container";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const StyledP = styled.p`
  display: flex;
  flex-direction: column;
  & input{
    text-align: center;
  }
`

const Main = () => {
  const navigate = useNavigate();
  const handleNavigateCalendar = ( event ) => {
    event.preventDefault();
    navigate('/calendar', {
        state: {
            meet_name: event.target.elements.meet_name.value,
            numJoiner: event.target.elements.numJoiner.value,
            runningTime: event.target.elements.runningTime.value,
        }
    });
  };
  return (
    <Container title={"미팅 정보 입력"}>
      <StyledForm onSubmit={(e) => handleNavigateCalendar(e)}>
        <StyledP>
          <label htmlFor="meet_name">미팅 이름</label>
          <input id="meet_name" name="meet_name" required />
        </StyledP>
        <StyledP>
          <label htmlFor="numJoiner">참여 인원</label>
          <input type="number" id="numJoiner" name="numJoiner" required />
        </StyledP>
        <StyledP>
          <label htmlFor="runningTime">미팅 시간</label>
          <select type="number" id="runningTime" name="runningTime" required>
            <option id="0" value={10}>
              10분
            </option>
            <option id="1" value={20}>
              20분
            </option>
            <option id="2" value={30}>
              30분
            </option>
            <option id="3" value={60}>
              60분
            </option>
            <option id="4" value={90}>
              90분
            </option>
            <option id="5" value={120}>
              120분
            </option>
            <option id="6" value={60 * 24}>
              1일
            </option>
          </select>
        </StyledP>
        <button style={{width: '3rem'}}>다음</button>
      </StyledForm>
    </Container>
  );
};

export default Main;
