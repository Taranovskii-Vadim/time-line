import React from "react";
import cn from "classnames";
import { isToday } from "date-fns";

import { useDateMap } from "../../../../hooks";
import { formatDate } from "../../../../utils";
import { TDateType } from "../../../../types";

interface IProps {
  activeDate: Date;
  type: TDateType;
}

const DateLine: React.FC<IProps> = ({ activeDate, type }): JSX.Element => {
  const dates = useDateMap(activeDate, type);

  return (
    <div className='dateLine'>
      {dates.map(({ date, key }, i) => (
        <div className={cn("wrapper", isToday(date) && "today")} key={key}>
          <div className='wrapper__day'>{i + 1}</div>
          <div className='wrapper__dayWeek'>{formatDate(date, "EEEEEE")}</div>
        </div>
      ))}
    </div>
  );
};

export default DateLine;
