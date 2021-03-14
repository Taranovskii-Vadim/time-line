import React from "react";
import { useSelector } from "react-redux";
import { Empty, Spin } from "antd";

import LineWrapper from "./components/LineWrapper";

import { TDateType } from "../../types";

import { selectUsers } from "../../store/models/users/selectors";

interface IProps {
  dateType: TDateType;
  currentDate: Date;
  isLoading: boolean;
}

const Calendar: React.FC<IProps> = ({
  dateType,
  currentDate,
  isLoading,
}): JSX.Element => {
  const users = useSelector(selectUsers);

  if (isLoading) {
    return (
      <div className='loadingBlock'>
        <Spin size='default' tip='Загрузка календаря...' />
      </div>
    );
  }

  return (
    <div className='calendar'>
      {users.length ? (
        users.map(user => (
          <LineWrapper
            key={user.id}
            user={user}
            currentDate={currentDate}
            dateType={dateType}
          />
        ))
      ) : (
        <Empty style={{ padding: 15 }} />
      )}
    </div>
  );
};

export default Calendar;
