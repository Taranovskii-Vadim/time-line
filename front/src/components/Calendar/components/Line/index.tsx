import React from "react";
import cn from "classnames";
import { capitalize } from "lodash";
import { Avatar } from "antd";
import { GithubOutlined, UserOutlined } from "@ant-design/icons";

import DateCells from "../DateCells";

import { useDateMap } from "../../../../hooks";
import { TDateType } from "../../../../types";
import { IUser } from "../../../../store/models/users/types";

interface IProps {
  validDate: Date;
  dateType: TDateType;
  user: IUser;
}

const Line: React.FC<IProps> = ({ validDate, dateType, user }): JSX.Element => {
  const dates = useDateMap(validDate, dateType);

  return (
    <div className='line'>
      <div className='avatarBlock'>
        <GithubOutlined className='avatarBlock__icon' />
        <Avatar
          className='avatarBlock__pic'
          size='large'
          icon={<UserOutlined />}
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
        <DateCells dates={dates} dateType={dateType} />
      </div>
    </div>
  );
};

export default Line;
