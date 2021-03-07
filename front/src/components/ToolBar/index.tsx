import React from "react";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input, Radio, Select, Tag } from "antd";
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";

import DateLine from "./components/DateLine";
import CurrentDate from "./components/CurrentDate";

import { TDateType } from "../../types";
import { filterBySkills, searchUsers } from "../../store/models/users/actions";
import { selectSkills } from "../../store/models/users/selectors";

interface IProps {
  dateType: TDateType;
  currentDate: Date;
  onScale: React.Dispatch<TDateType>;
  onPrev: React.Dispatch<void>;
  onNext: React.Dispatch<void>;
}

const { Option } = Select;

const ToolBar: React.FC<IProps> = ({
  dateType,
  currentDate,
  onScale,
  onPrev,
  onNext,
}): JSX.Element => {
  const dispatch = useDispatch();

  const skills = useSelector(selectSkills);

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
        <Select
          mode='multiple'
          allowClear
          style={{ width: "50%" }}
          placeholder='Укажите навыки'
          onChange={(value: string[]) => dispatch(filterBySkills(value))}
        >
          {skills.map(skill => (
            <Option key={skill.value} value={skill.value}>
              {_.capitalize(skill.value)}
            </Option>
          ))}
        </Select>

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
