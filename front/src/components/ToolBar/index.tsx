import React from "react";
import { useDispatch } from "react-redux";
import { Button, Input, Radio, Select, Tag } from "antd";
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";

import DateLine from "./components/DateLine";
import CurrentDate from "./components/CurrentDate";

import { TDateType } from "../../types";
import { searchUsers } from "../../store/models/users/actions";

interface IProps {
  dateType: TDateType;
  currentDate: Date;
  onScale: React.Dispatch<TDateType>;
  onPrev: React.Dispatch<void>;
  onNext: React.Dispatch<void>;
}

const ToolBar: React.FC<IProps> = ({
  dateType,
  currentDate,
  onScale,
  onPrev,
  onNext,
}): JSX.Element => {
  const dispatch = useDispatch();
  // const options = [
  //   { value: "blue", label: "React" },
  //   { value: "red", label: "Angular" },
  //   { value: "green", label: "Vue" },
  //   { value: "lime", label: "NodeJs" },
  //   { value: "volcano", label: "React Native" },
  // ];

  const tagRender = ({ label, value, closable, onClose }: any) => {
    return (
      <Tag
        color={value}
        closable={closable}
        onClose={onClose}
        style={{ marginRight: 3 }}
      >
        {label}
      </Tag>
    );
  };
  // TODO: возможно заменить на multiselect
  return (
    <div>
      <div className='controlLine'>
        <div className='controlLine__shortBlock'>
          <Input
            style={{ width: "100%" }}
            onChange={e => dispatch(searchUsers(e.target.value.toLowerCase()))}
            allowClear
            placeholder='Введите имя сотрудника'
          />
        </div>
        {/* <Select
          mode='multiple'
          tagRender={tagRender}
          placeholder='Укажите навыки'
          showArrow
          maxTagCount='responsive'
          style={{ width: "50%" }}
          options={options}
        /> */}

        <CurrentDate currentDate={currentDate} dateType={dateType} />
      </div>
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
        <DateLine activeDate={currentDate} type={dateType} />
      </div>
    </div>
  );
};

export default ToolBar;
