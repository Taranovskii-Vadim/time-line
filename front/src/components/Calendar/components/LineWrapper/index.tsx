import React, { useState } from "react";

import Line from "../Line";

import { IUser } from "../../../../store/models/users/types";
import { TDateType } from "../../../../types";
import ProjectLine from "../ProjectLine";

interface IProps {
  currentDate: Date;
  dateType: TDateType;
  user: IUser;
  isLastUser: boolean;
}

const LineWrapper: React.FC<IProps> = ({
  currentDate,
  dateType,
  user,
  isLastUser,
}): JSX.Element => {
  const [hide, setHide] = useState<boolean>(false);
  return (
    <>
      <Line
        user={user}
        hide={hide}
        isIconVisible={!!user.projects.length}
        setHide={setHide}
        currentDate={currentDate}
        dateType={dateType}
      />
      {!hide
        ? user.projects.map((project, i, arr) => (
            <ProjectLine
              key={project.id}
              project={project}
              currentDate={currentDate}
              dateType={dateType}
              isLastChild={i === arr.length - 1 && isLastUser}
            />
          ))
        : null}
    </>
  );
};

export default LineWrapper;
