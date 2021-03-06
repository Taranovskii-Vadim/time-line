import React from "react";
import { useSelector } from "react-redux";
import LineWrapper from "./components/LineWrapper";

import { TDateType } from "../../types";

import { selectUsers } from "../../store/models/users/selectors";

interface IProps {
  dateType: TDateType;
  currentDate: Date;
}

const Calendar: React.FC<IProps> = ({ dateType, currentDate }): JSX.Element => {
  const users = useSelector(selectUsers);

  return (
    <div className='calendar'>
      {users.map(item => (
        <LineWrapper
          key={item.id}
          user={item}
          currentDate={currentDate}
          dateType={dateType}
        />
      ))}
    </div>
  );
};

export default Calendar;
