import React from "react";
import cn from "classnames";

import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const Line: React.FC = (): JSX.Element => {
  return (
    <div className='line'>
      <div className='avatarBlock'>
        <Avatar size='large' icon={<UserOutlined />} />
        <div>
          <div className={cn("avatarBlock__name", "avatarBlock__textEllipsis")}>
            Тарановский Вадим
          </div>
          <div
            className={cn("avatarBlock__subname", "avatarBlock__textEllipsis")}
          >
            Специалист
          </div>
        </div>
      </div>
      <div className='content'>content</div>
    </div>
  );
};

export default Line;
