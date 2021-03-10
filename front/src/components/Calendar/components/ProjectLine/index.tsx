import React from "react";

import DateCells from "../DateCells";
import Tasks from "../Tasks";
import TodayLine from "../TodayLine";

import { useDateMap } from "../../../../hooks";
import { TDateType } from "../../../../types";
import { IProject } from "../../../../store/models/users/types";

interface IProps {
  currentDate: Date;
  dateType: TDateType;
  project: IProject;
}

const ProjectLine: React.FC<IProps> = ({
  currentDate,
  dateType,
  project,
}): JSX.Element => {
  const dates = useDateMap(currentDate, dateType);
  return (
    <div className='line'>
      <div className='avatarBlock'>{project.title}</div>
      <div className='content'>
        <TodayLine type={dateType} activeDate={currentDate} />
        {project.tasks.map(task => (
          <Tasks task={task} dateType={dateType} currentDate={currentDate} />
        ))}
        <DateCells dates={dates} dateType={dateType} />
      </div>
    </div>
  );
};

export default ProjectLine;
