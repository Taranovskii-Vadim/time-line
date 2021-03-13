import React from "react";
import { useSelector } from "react-redux";
import { Empty, Spin } from "antd";

import LineWrapper from "./components/LineWrapper";

import { TDateType } from "../../types";

import { selectLoading, selectUsers } from "../../store/models/users/selectors";

interface IProps {
  dateType: TDateType;
  currentDate: Date;
}

const Calendar: React.FC<IProps> = ({ dateType, currentDate }): JSX.Element => {
  const users = useSelector(selectUsers);
  const isLoading = useSelector(selectLoading);

  if (isLoading) {
    return (
      <div className='loadingBlock'>
        <Spin size='default' tip='Загрузка календаря...' />
      </div>
    );
  }
  // TODO: поменять _id на id на беке
  return (
    <div className='calendar'>
      {users.length ? (
        users.map(item => (
          <LineWrapper
            key={item.id}
            user={item}
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
