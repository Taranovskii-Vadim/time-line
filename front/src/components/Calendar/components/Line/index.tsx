import React, { useState } from "react";
import cn from "classnames";
import { format } from "date-fns/esm";
import { capitalize } from "lodash";
import { Avatar, Col, Divider, Drawer, Row, Tag } from "antd";
import {
  InfoCircleOutlined,
  RightOutlined,
  UserOutlined,
} from "@ant-design/icons";

import DateCells from "../DateCells";
import TodayLine from "../TodayLine";
import { PrjTimeLine } from "../PrjTimeLine";

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

const Line: React.FC<IProps> = ({
  currentDate,
  dateType,
  user,
  hide,
  isIconVisible,
  setHide,
}): JSX.Element => {
  const dates = useDateMap(currentDate, dateType);

  const [isDrawer, setIsDrawer] = useState(false);
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
        <InfoCircleOutlined
          className='avatarBlock__infoIcon'
          onClick={() => setIsDrawer(true)}
        />
      </div>
      <div className='content'>
        <TodayLine type={dateType} activeDate={currentDate} />
        {user.projects.map((item, i, arr) => {
          const height = 100 / arr.length;
          return (
            <PrjTimeLine
              key={item.id}
              height={`${height}%`}
              top={`${i * height}%`}
              project={item}
              activeDate={currentDate}
              dateType={dateType}
            />
          );
        })}
        <DateCells dates={dates} dateType={dateType} />
      </div>
      <Drawer
        title='Информация о сотруднике'
        width={660}
        visible={isDrawer}
        closable={false}
        onClose={() => setIsDrawer(false)}
      >
        <p className='site-description-item-profile-p'>Личные данные</p>
        <Row>
          <Col span={24}>
            <DescriptionItem
              title='Полное имя'
              content={`${capitalize(user.surname)} ${capitalize(
                user.name
              )} ${capitalize(user.middlename)}`}
            />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <DescriptionItem
              title='Страна проживания'
              content={capitalize(user.country)}
            />
          </Col>
          <Col span={12}>
            <DescriptionItem title='Город' content={capitalize(user.city)} />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <DescriptionItem
              title='Дата рождения'
              content={format(new Date(user.birthdate), "dd.MM.yyyy")}
            />
          </Col>
        </Row>
        <Divider />
        <p className='site-description-item-profile-p'>Компания</p>
        <Row>
          <Col span={12}>
            <DescriptionItem
              title='Должность'
              content={capitalize(user.position)}
            />
          </Col>
          <Col span={12}>
            <DescriptionItem
              title='Тип занятости'
              content={capitalize(user.employmentType)}
            />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <DescriptionItem
              title='Отдел'
              content={capitalize(user.department)}
            />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <DescriptionItem title='Навыки' content={user.skills} />
          </Col>
        </Row>
        <Divider />
        <p className='site-description-item-profile-p'>Контакты</p>
        <Row>
          <Col span={24}>
            <DescriptionItem
              title='Номер телефона'
              content={user.phonenumber}
            />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <DescriptionItem title='Электронный адрес' content={user.email} />
          </Col>
        </Row>
      </Drawer>
    </div>
  );
};

export default Line;
