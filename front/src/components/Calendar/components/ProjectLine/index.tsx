import React, { useState } from "react";
import { Col, Drawer, Row, Tag } from "antd";
import { capitalize } from "lodash";

import DateCells from "../DateCells";
import TodayLine from "../TodayLine";
import { TaskTimeLine } from "../TaskTimeLine";

import { useDateMap } from "../../../../hooks";
import { TDateType } from "../../../../types";
import { IProject } from "../../../../store/models/users/types";
import { format } from "date-fns/esm";

interface IProps {
  currentDate: Date;
  dateType: TDateType;
  project: IProject;
  isLastChild: boolean;
}

const DescriptionItem = ({ title, content }: { [key: string]: any }) => (
  <div className='site-description-item-profile-wrapper'>
    <p className='site-description-item-profile-p-label'>{title}:</p>
    {Array.isArray(content)
      ? content.map(item => (
          <Tag key={item.label} color={item.value}>
            {capitalize(item.label)}
          </Tag>
        ))
      : content}
  </div>
);

const ProjectLine: React.FC<IProps> = ({
  currentDate,
  dateType,
  project,
  isLastChild,
}): JSX.Element => {
  const dates = useDateMap(currentDate, dateType);
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className='line'>
      <div className='avatarBlock prjBlock' onClick={() => setIsVisible(true)}>
        <div
          className='avatarBlock__line'
          style={{
            backgroundColor: project.color,
            borderBottomLeftRadius: isLastChild ? "6px" : "0px",
          }}
        ></div>
        {capitalize(project.title)}
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
      >
        <Row>
          <Col span={8}>
            <DescriptionItem
              title='Количество задач'
              content={project.tasks.length}
            />
          </Col>
          <Col span={8}>
            <DescriptionItem
              title='Дата начала'
              content={format(new Date(project.period.from), "dd.MM.yyyy")}
            />
          </Col>
          <Col span={8}>
            <DescriptionItem
              title='Дата окончания'
              content={format(new Date(project.period.to), "dd.MM.yyyy")}
            />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <DescriptionItem
              title='Технологии разработки'
              content={project.stack}
            />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <DescriptionItem
              title='Команда разработки'
              content={project.team.map(item => item.fullname).join(", ")}
            />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <DescriptionItem
              title='Описание проекта'
              content={project.description}
            />
          </Col>
        </Row>
      </Drawer>
    </div>
  );
};

export default ProjectLine;
