import React from "react";
import { Button, Radio, Select, Tag } from "antd";
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";

import DateLine from "./components/DateLine";
import CurrentDate from "./components/CurrentDate";

import { DateType } from "../../types";

const ToolBar: React.FC = (): JSX.Element => {
  const validDate = new Date();
  const initialType: DateType = "month";

  const options = [
    { value: "blue", label: "React" },
    { value: "red", label: "Angular" },
    { value: "green", label: "Vue" },
    { value: "lime", label: "NodeJs" },
    { value: "volcano", label: "React Native" },
  ];

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

  return (
    <div>
      <div className='controlLine'>
        <div className='controlLine__shortBlock'>
          <Select
            mode='multiple'
            tagRender={tagRender}
            placeholder='Укажите навыки'
            showArrow
            maxTagCount='responsive'
            style={{ width: "100%" }}
            options={options}
          />
        </div>
        <Select placeholder='Укажите сотрудников' style={{ width: "25%" }}>
          <Select.OptGroup label='Разработчик'>
            <Select.Option value='1'>Петр Первый</Select.Option>
            <Select.Option value='2'>Наполеон Бонапарт</Select.Option>
          </Select.OptGroup>
          <Select.OptGroup label='Менеджер'>
            <Select.Option value='3'>Адольф Гитлер</Select.Option>
          </Select.OptGroup>
        </Select>
        <CurrentDate validDate={validDate} />
      </div>
      <div className='controlLine'>
        <div className='controlLine__shortBlock'>
          <Radio.Group
            // onChange={({ target }) => {
            //   onScale({ type: target.value, currentDate });
            // }}
            value={initialType}
          >
            <Radio.Button value='month'>Месяц</Radio.Button>
            <Radio.Button value='year'>Год</Radio.Button>
          </Radio.Group>
          <Button.Group>
            <Button
              //   onClick={handlePrev}
              type='ghost'
            >
              <CaretLeftOutlined />
            </Button>
            <Button
              //   onClick={handleNext}
              type='ghost'
            >
              <CaretRightOutlined />
            </Button>
          </Button.Group>
        </div>
        <DateLine activeDate={validDate} type={initialType} />
      </div>
    </div>
  );
};

export default ToolBar;
