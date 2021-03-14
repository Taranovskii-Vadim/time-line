import React from "react";

import { Badge } from "antd";
import { capitalize } from "lodash";

import { TTypeTask } from "../../../../../../store/models/users/types";

// TODO: подумать над цветовым решением(особенно для фичи) и типами задач

const taskTypes = {
  task: { type: "warning" as "warning", text: "задача" },
  bug: { type: "error" as "error", text: "ошибка" },
  feature: { type: "success" as "success", text: "фича" },
  story: { type: "processing" as "processing", text: "история" },
};

interface IProps {
  type: TTypeTask;
  hours: number;
  from: string;
  to: string;
}

const TaskInfo: React.FC<IProps> = ({ type, hours, from, to }): JSX.Element => (
  <div className='taskInfo'>
    <div className='taskInfo__title'>Общее</div>
    <div className='taskInfo__line'>
      <div>
        <Badge status={taskTypes[type].type} />
        {capitalize(taskTypes[type].text)}
      </div>
      <div>Время: {hours} ч.</div>
    </div>
    <div className='taskInfo__title'>Сроки</div>
    <div className='taskInfo__line'>
      <div>{from}</div>
      <div>-</div>
      <div>{to}</div>
    </div>
  </div>
);

export default TaskInfo;
