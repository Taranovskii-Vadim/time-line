import React from "react";
import cn from "classnames";
import { isWeekend } from "../../../../utils";

import { TDateType, DaysInMonth } from "../../../../types";

interface IProps {
  dates: DaysInMonth[];
  dateType: TDateType;
}

const DateCells: React.FC<IProps> = ({ dates, dateType }): JSX.Element => {
  return (
    <>
      {dates.map(({ key, date }) => (
        <div
          key={key}
          className={cn("cell", isWeekend(date, dateType) && "weekend")}
        ></div>
      ))}
    </>
  );
};

export default DateCells;
