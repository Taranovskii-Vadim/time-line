import React from "react";
import { capitalize } from "lodash";

import { MonthIndex } from "../../../../types";
import { ruNominativeMonth } from "../../../../utils";

interface IProps {
  validDate: Date;
}

const CurrentDate: React.FC<IProps> = ({ validDate }): JSX.Element => (
  <div className='currentDate'>
    {
      <>
        {capitalize(ruNominativeMonth(validDate.getMonth() as MonthIndex))},{" "}
        {validDate.getFullYear()}
      </>
    }
  </div>
);

export default CurrentDate;
