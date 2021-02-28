import React from "react";
import { Button, Radio } from "antd";
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";

import { DateType } from "../../../../types";

interface IProps {
  type: DateType;
}

const DateTools: React.FC<IProps> = ({ type }): JSX.Element => (
  <div className='dateTools'>
    <Radio.Group
      // onChange={({ target }) => {
      //   onScale({ type: target.value, currentDate });
      // }}
      value={type}
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
);
export default DateTools;
