import React from "react";
import cn from "classnames";
import { isSameMonth, isToday } from "date-fns";
import { Button, Radio } from "antd";
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";

import { useDateMap } from "../../../../hooks";
import { formatDate } from "../../../../utils";
import { TDateType } from "../../../../types";

interface IProps {
  currentDate: Date;
  dateType: TDateType;
  onScale: React.Dispatch<TDateType>;
  onPrev: React.Dispatch<void>;
  onNext: React.Dispatch<void>;
}

const SecondLine: React.FC<IProps> = ({
  dateType,
  currentDate,
  onScale,
  onNext,
  onPrev,
}): JSX.Element => {
  const dates = useDateMap(currentDate, dateType);
  return (
    <div className='controlLine'>
      <div className='controlLine__shortBlock'>
        <Radio.Group
          onChange={({ target }) => onScale(target.value)}
          value={dateType}
        >
          <Radio.Button value='month'>Месяц</Radio.Button>
          <Radio.Button value='year'>Год</Radio.Button>
        </Radio.Group>
        <Button.Group>
          <Button onClick={() => onPrev()} type='ghost'>
            <CaretLeftOutlined />
          </Button>
          <Button onClick={() => onNext()} type='ghost'>
            <CaretRightOutlined />
          </Button>
        </Button.Group>
      </div>
      <div className='dateLine'>
        {dateType === "month"
          ? dates.map(({ date, key }, i) => (
              <div
                className={cn("wrapper", isToday(date) && "currentDate")}
                key={key}
              >
                <div className='wrapper__day'>{i + 1}</div>
                <div className='wrapper__dayWeek'>
                  {formatDate(date, "EEEEEE")}
                </div>
              </div>
            ))
          : null}
        {dateType === "year"
          ? dates.map(({ date, key }) => (
              <div
                className={cn(
                  "wrapper",
                  "yearCell",
                  isSameMonth(date, new Date()) && "currentDate"
                )}
                key={key}
              >
                <div className='wrapper__monthYear'>
                  {formatDate(date, "LLL")}
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default SecondLine;
