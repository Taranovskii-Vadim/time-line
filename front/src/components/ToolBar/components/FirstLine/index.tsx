import React from "react";
import { capitalize } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Select, Tag } from "antd";

import { MONTHS_INDEXES } from "../../../../constants";
import { ruNominativeMonth } from "../../../../utils";
import { TDateType } from "../../../../types";

import {
  filterBySkills,
  searchUsers,
} from "../../../../store/models/users/actions";
import { selectSkills } from "../../../../store/models/users/selectors";
import { StupidType } from "../../../../store/types";

const { Option } = Select;
const { Item } = Form;

interface IProps {
  currentDate: Date;
  dateType: TDateType;
  onSetMonth: (val: number) => void;
  onSetYear: (val: number) => void;
}

const FirstLine: React.FC<IProps> = ({
  currentDate,
  dateType,
  onSetMonth,
  onSetYear,
}): JSX.Element => {
  const dispatch = useDispatch();
  const skills = useSelector(selectSkills);

  const tagRender = (props: StupidType): JSX.Element => (
    <Tag
      color={props.value}
      closable={props.closable}
      onClose={props.onClose}
      style={{ marginRight: 3 }}
    >
      {props.label}
    </Tag>
  );

  const handleFilterChange = (v: StupidType, option: StupidType): void => {
    dispatch(
      filterBySkills(option.map((item: StupidType) => item.label.toLowerCase()))
    );
  };

  return (
    <div className='controlLine'>
      <div className='controlLine__shortBlock'>
        <Input
          style={{ width: "100%" }}
          onChange={e => dispatch(searchUsers(e.target.value.toLowerCase()))}
          allowClear
          placeholder='Введите имя сотрудника'
        />
      </div>
      <Select
        mode='multiple'
        allowClear
        style={{ width: "50%" }}
        tagRender={tagRender}
        placeholder='Укажите навыки'
        options={skills}
        onChange={handleFilterChange}
      />

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
            if (
              targetVal.length === 4 &&
              tarVal !== currentDate.getFullYear()
            ) {
              onSetYear(tarVal);
            }
          }}
        >
          <Item
            name='year'
            style={{ marginBottom: 0 }}
            rules={[{ required: true, min: 4, max: 4 }]}
          >
            <Input className='date__year' maxLength={4} />
          </Item>
        </Form>
      </div>
    </div>
  );
};

export default FirstLine;
