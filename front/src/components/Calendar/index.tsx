import React from "react";
import { useSelector } from "react-redux";
import LineWrapper from "./components/LineWrapper";

import { TDateType } from "../../types";

import { selectUsers } from "../../store/models/users/selectors";

interface IProps {
  dateType: TDateType;
}

const Calendar: React.FC<IProps> = ({ dateType }): JSX.Element => {
  const users = useSelector(selectUsers);
  // TODO: перенсти в store
  const validDate = new Date();

  return (
    <div className='calendar'>
      {users.map(item => (
        <LineWrapper
          key={item.id}
          user={item}
          validDate={validDate}
          dateType={dateType}
        />
      ))}
    </div>
  );
};

export default Calendar;
