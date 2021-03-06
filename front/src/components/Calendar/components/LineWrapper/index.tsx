import React, { useState } from "react";

import Line from "../Line";

import { IUser } from "../../../../store/models/users/types";
import { TDateType } from "../../../../types";

interface IProps {
  currentDate: Date;
  dateType: TDateType;
  user: IUser;
}

const LineWrapper: React.FC<IProps> = ({
  currentDate,
  dateType,
  user,
}): JSX.Element => {
  const [hide, setHide] = useState<boolean>(true);
  return (
    <>
      <Line user={user} currentDate={currentDate} dateType={dateType} />
      {/* {!hide ? <Line currentDate={currentDate} dateType={dateType} /> : null} */}
    </>
  );
};

export default LineWrapper;
