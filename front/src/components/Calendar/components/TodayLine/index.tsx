import React from "react";
import { isSameYear } from "date-fns";
import { TDateType } from "../../../../types";
import { toDayLine } from "../../../../utils";

interface IProps {
  type: TDateType;
  activeDate: Date;
}

const TodayLine: React.FC<IProps> = ({
  type,
  activeDate,
}): JSX.Element | null => {
  if (type === "year" && isSameYear(activeDate, new Date())) {
    return <div className='isTodayLine' style={toDayLine(activeDate)} />;
  } else {
    return null;
  }
};

export default TodayLine;
