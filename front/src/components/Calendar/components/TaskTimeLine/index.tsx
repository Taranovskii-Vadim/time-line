import React, { useMemo } from "react";
import cn from "classnames";
import { addHours, format } from "date-fns/esm";
import { capitalize } from "lodash";
import { Popover } from "antd";

import TaskInfo from "./components/TaskInfo";

import { positionEvent } from "../../../../utils";

import { TDateType } from "../../../../types";
import { ITask } from "../../../../store/models/users/types";

interface IProps {
  task: ITask;
  activeDate: Date;
  dateType: TDateType;
}

const TASK_TYPES = {
  task: "#FAAD14",
  bug: "#ff4d4f",
  feature: "#9254de",
  story: "#40a9ff",
};

export const TaskTimeLine = React.forwardRef<any, IProps>(
  ({ task, activeDate, dateType }, ref) => {
    const { hours, type, title } = task;
    const from = new Date(task.from);
    const to = addHours(from, hours);
    const position = useMemo(
      () => positionEvent({ from, to, activeDate }, dateType),
      [task, activeDate, dateType]
    );
    return (
      <Popover
        content={
          <TaskInfo
            type={type}
            hours={hours}
            from={format(from, "dd.MM.yyyy")}
            to={format(to, "dd.MM.yyyy")}
          />
        }
        title={capitalize(title)}
        trigger='click'
      >
        <div
          ref={ref}
          className={cn("event")}
          style={{
            ...position,
            backgroundColor: TASK_TYPES[type],
            borderRight: dateType === "month" ? "1px solid #696e63" : "",
          }}
        />
      </Popover>
    );
  }
);
