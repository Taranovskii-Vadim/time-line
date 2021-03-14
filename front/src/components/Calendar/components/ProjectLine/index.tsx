import React, { useState } from "react";
import { Drawer } from "antd";
import { capitalize } from "lodash";
import {
  FundProjectionScreenOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

import DateCells from "../DateCells";
import TodayLine from "../TodayLine";
import { TaskTimeLine } from "../TaskTimeLine";

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
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className='line'>
      <div className='avatarBlock'>
        <div
          className='avatarBlock__line'
          style={{ backgroundColor: project.color }}
        ></div>
        {/* TODO: пока что закоментировал узнать надо оно мне или нет */}
        {/* <FundProjectionScreenOutlined
          className='avatarBlock__prjIcon'
          onClick={() => setIsVisible(true)}
        /> */}
        {capitalize(project.title)}
        <InfoCircleOutlined
          className='avatarBlock__infoIcon'
          onClick={() => setIsVisible(true)}
        />
      </div>
      <div className='content'>
        <TodayLine type={dateType} activeDate={currentDate} />
        {project.tasks.map(task => (
          <TaskTimeLine
            key={task.id}
            task={task}
            activeDate={currentDate}
            dateType={dateType}
          />
        ))}
        <DateCells dates={dates} dateType={dateType} />
      </div>
      <Drawer
        title={capitalize(project.title)}
        width={640}
        visible={isVisible}
        closable={false}
        onClose={() => setIsVisible(false)}
      ></Drawer>
    </div>
  );
};

export default ProjectLine;
