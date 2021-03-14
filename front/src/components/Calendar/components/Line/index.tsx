import React from "react";
import cn from "classnames";
import { capitalize } from "lodash";
import { Avatar } from "antd";
import { RightOutlined, UserOutlined } from "@ant-design/icons";

import DateCells from "../DateCells";
import TodayLine from "../TodayLine";

import { useDateMap } from "../../../../hooks";
import { TDateType } from "../../../../types";
import { IUser } from "../../../../store/models/users/types";

interface IProps {
  currentDate: Date;
  dateType: TDateType;
  hide: boolean;
  isIconVisible: boolean;
  setHide: React.Dispatch<React.SetStateAction<boolean>>;
  user: IUser;
}

const Line: React.FC<IProps> = ({
  currentDate,
  dateType,
  user,
  hide,
  isIconVisible,
  setHide,
}): JSX.Element => {
  const dates = useDateMap(currentDate, dateType);

  return (
    <div className='line'>
      <div className='avatarBlock'>
        {isIconVisible ? (
          <RightOutlined
            className={cn("avatarBlock__icon ", {
              avatarBlock__activeIcon: !hide,
            })}
            onClick={() => setHide(!hide)}
          />
        ) : null}
        <Avatar
          className='avatarBlock__pic'
          size='large'
          icon={<UserOutlined />}
          src={user.avatarUrl}
        />
        <div>
          <div className={cn("avatarBlock__name", "avatarBlock__textEllipsis")}>
            {`${capitalize(user.surname)} ${capitalize(user.name)}`}
          </div>
          <div
            className={cn("avatarBlock__subname", "avatarBlock__textEllipsis")}
          >
            {capitalize(user.position)}
          </div>
        </div>
      </div>
      <div className='content'>
        <TodayLine type={dateType} activeDate={currentDate} />
        <DateCells dates={dates} dateType={dateType} />
      </div>
    </div>
  );
};

export default Line;
