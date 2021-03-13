import React from "react";
import { Input, Select, Form } from "antd";
import { capitalize } from "lodash";

import { TDateType } from "../../../../types";
import { ruNominativeMonth } from "../../../../utils";
import { MONTHS_INDEXES } from "../../../../constants";

interface IProps {
  currentDate: Date;
  dateType: TDateType;
  onSetMonth: (val: number) => void;
  onSetYear: (val: number) => void;
}

const { Option } = Select;

const CurrentDate: React.FC<IProps> = ({
  currentDate,
  dateType,
  onSetMonth,
  onSetYear,
}): JSX.Element => (
  <div className='date'>
    {dateType === "month" ? (
      <Select
        className='date__month'
        onChange={value => onSetMonth(value)}
        defaultValue={currentDate.getMonth()}
        value={currentDate.getMonth()}
      >
        {MONTHS_INDEXES.map(item => (
          <Option key={item} value={item}>
            {capitalize(ruNominativeMonth(item))}
          </Option>
        ))}
      </Select>
    ) : null}
    <Form
      fields={[{ name: "year", value: currentDate.getFullYear() }]}
      onFieldsChange={field => {
        const targetVal: string = field[0].value;
        const tarVal = Number(targetVal);
        if (targetVal.length === 4 && tarVal !== currentDate.getFullYear()) {
          onSetYear(tarVal);
        }
      }}
    >
      <Form.Item
        name='year'
        style={{ marginBottom: 0 }}
        rules={[{ required: true, min: 4, max: 4 }]}
      >
        <Input className='date__year' maxLength={4} />
      </Form.Item>
    </Form>
  </div>
);

export default CurrentDate;
