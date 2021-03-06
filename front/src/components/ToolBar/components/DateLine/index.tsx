import React from "react";
import cn from "classnames";
import { isSameMonth, isToday } from "date-fns";

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
      {type === "month"
        ? dates.map(({ date, key }, i) => (
            <div
              className={cn("wrapper", isToday(date) && "currentDate")}
              key={key}
            >
              <div className='wrapper__day'>{i + 1}</div>
              <div className='wrapper__dayWeek'>
                {formatDate(date, "EEEEEE")}
              </div>
            </div>
          ))
        : null}
      {type === "year"
        ? dates.map(({ date, key }) => (
            <div
              className={cn(
                "wrapper",
                "yearCell",
                isSameMonth(date, new Date()) && "currentDate"
              )}
              key={key}
            >
              <div className='wrapper__monthYear'>
                {formatDate(date, "LLL")}
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default DateLine;
