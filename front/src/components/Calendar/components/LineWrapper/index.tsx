import React, { useState } from "react";

import Line from "../Line";

import { IUser } from "../../../../store/models/users/types";
import { TDateType } from "../../../../types";

interface IProps {
  validDate: Date;
  dateType: TDateType;
  user: IUser;
}

const LineWrapper: React.FC<IProps> = ({
  validDate,
  dateType,
  user,
}): JSX.Element => {
  const [hide, setHide] = useState<boolean>(true);
  return (
    <>
      <Line user={user} validDate={validDate} dateType={dateType} />
      {/* {!hide ? <Line validDate={validDate} dateType={dateType} /> : null} */}
    </>
  );
};

export default LineWrapper;
