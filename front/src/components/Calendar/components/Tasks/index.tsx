import React from "react";

import { TimeLine } from "../TimeLine";

import { TDateType } from "../../../../types";
import { ITask } from "../../../../store/models/users/types";

interface IProps {
  currentDate: Date;
  dateType: TDateType;
  task: ITask;
}

const Tasks: React.FC<IProps> = ({
  currentDate,
  dateType,
  task,
}): JSX.Element => {
  return (
    <>
      <TimeLine
        activeDate={currentDate}
        type={dateType}
        typeTask={task.type}
        from={new Date(task.from)}
        to={new Date(task.to)}
      />
    </>
  );
};

export default Tasks;
