import React from "react";
import styled from "styled-components";

const ClickedSlots = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  line-height: 0;
`;

const ClickedSlotList = ({ meetingDateList }) => {
  const isSameDay = (date1, date2) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };
  const getMD = (value) => {
    return `${value.getMonth() + 1}/${value.getDate()}`;
  };
  const renderClickedList = (meetingList) => {
    const meetList = [...meetingList];
    console.log("meetList: ", meetList);
    let returnList = []; // [{1: [date1, date2, ...]}, {4: [date]}, ...]
    let timesPerDate = [];
    let prevDate = new Date("1995-12-17T03:24:00");
    for (let i = 0; i < meetList.length; i++) {
      const date = meetList[i];
      if (!isSameDay(prevDate, date)) {
        returnList.push({ [getMD(prevDate)]: timesPerDate });
        timesPerDate = [date];
        prevDate = date;
      } else {
        timesPerDate.push(date);
      }
      if (i === meetList.length - 1) {
        prevDate = date;
      }
    }
    if (timesPerDate.length !== 0) {
      returnList.push({ [getMD(prevDate)]: timesPerDate });
    }
    returnList.splice(0, 1); // remove {-1: []}
    console.log(returnList);
    return returnList;
  };

  return (
    <>
      {renderClickedList(meetingDateList).map((obj, i) => {
        for (const [d, times] of Object.entries(obj)) {
          return (
            <ClickedSlots key={i}>
              <p>{d}</p>
              <div>
                {times.map((time, index) => (
                  <p key={index}>
                    {time.getHours().toString()} :{" "}
                    {time.getMinutes().toString().padStart(2, "0")}
                  </p>
                ))}
              </div>
            </ClickedSlots>
          );
        }
      })}
    </>
  );
};

export default ClickedSlotList;
