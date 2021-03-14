import React, { useMemo } from "react";
import cn from "classnames";
import { format } from "date-fns";
import { capitalize } from "lodash";
import { Popover } from "antd";

import { positionEvent } from "../../../../utils";

import { TDateType } from "../../../../types";
import { IProject } from "../../../../store/models/users/types";

interface IProps {
  project: IProject;
  height: string;
  top: string;
  activeDate: Date;
  dateType: TDateType;
}

export const PrjTimeLine = React.forwardRef<any, IProps>(
  ({ project, activeDate, height, top, dateType }, ref) => {
    const { title, period } = project;
    const from = new Date(period.from);
    const to = new Date(period.to);

    const position = useMemo(
      () => positionEvent({ from, to, activeDate }, dateType),
      [project, height, activeDate, top, dateType]
    );
    return (
      <Popover
        content={
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>{format(from, "dd.MM.yyyy")}</div>
            <div>-</div>
            <div>{format(to, "dd.MM.yyyy")}</div>
          </div>
        }
        title={capitalize(title)}
        trigger='click'
      >
        <div
          ref={ref}
          className={cn("event")}
          style={{ ...position, height, top, backgroundColor: project.color }}
        />
      </Popover>
    );
  }
);
