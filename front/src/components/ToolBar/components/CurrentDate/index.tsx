import React from "react";
import { capitalize } from "lodash";

import { MonthIndex, TDateType } from "../../../../types";
import { ruNominativeMonth } from "../../../../utils";

interface IProps {
  currentDate: Date;
  dateType: TDateType;
}

const CurrentDate: React.FC<IProps> = ({
  currentDate,
  dateType,
}): JSX.Element => (
  <div className='date'>
    {`${
      dateType === "month"
        ? `${capitalize(
            ruNominativeMonth(currentDate.getMonth() as MonthIndex)
          )},`
        : ""
    } ${currentDate.getFullYear()}`}
  </div>
);

export default CurrentDate;
