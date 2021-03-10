import React, { useMemo } from "react";
import cn from "classnames";

import { positionEvent } from "../../../../utils";

import { TDateType } from "../../../../types";
import { TTypeTask } from "../../../../store/models/users/types";

interface IProps {
  from: Date;
  to: Date;
  activeDate: Date;
  type: TDateType;
  typeTask: TTypeTask;
}

const taskTypes = {
  task: "#ffec3d",
  bug: "#ff4d4f",
  feature: "#9254de",
  story: "#40a9ff",
};

export const TimeLine = React.forwardRef<any, IProps>(
  ({ from, to, activeDate, type, typeTask }, ref) => {
    const position = useMemo(
      () => positionEvent({ from, to, activeDate }, type),
      [from, to, activeDate, type]
    );
    return (
      <div
        ref={ref}
        className={cn("event")}
        style={{ ...position, backgroundColor: taskTypes[typeTask] }}
      />
    );
  }
);
