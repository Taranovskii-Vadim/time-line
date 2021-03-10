import React, { useState } from "react";

import Line from "../Line";

import { IUser } from "../../../../store/models/users/types";
import { TDateType } from "../../../../types";
import ProjectLine from "../ProjectLine";

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
      <Line
        user={user}
        hide={hide}
        isIconVisible={!!user.projects.length}
        setHide={setHide}
        currentDate={currentDate}
        dateType={dateType}
      />
      {!hide
        ? user.projects.map(project => (
            <ProjectLine
              key={project.title}
              project={project}
              currentDate={currentDate}
              dateType={dateType}
            />
          ))
        : null}
    </>
  );
};

export default LineWrapper;
