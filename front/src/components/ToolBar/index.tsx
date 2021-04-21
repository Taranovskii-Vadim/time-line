import React from "react";

import { TDateType } from "../../types";

import FirstLine from "./components/FirstLine";
import SecondLine from "./components/SecondLine";

interface IProps {
  dateType: TDateType;
  currentDate: Date;
  isLoading: boolean;
  onScale: React.Dispatch<TDateType>;
  onPrev: React.Dispatch<void>;
  onNext: React.Dispatch<void>;
  onSetMonth: (val: number) => void;
  onSetYear: (val: number) => void;
}

const ToolBar: React.FC<IProps> = (props): JSX.Element => (
  <div>
    <FirstLine
      dateType={props.dateType}
      isLoading={props.isLoading}
      currentDate={props.currentDate}
      onSetMonth={props.onSetMonth}
      onSetYear={props.onSetYear}
    />
    <SecondLine
      dateType={props.dateType}
      currentDate={props.currentDate}
      onScale={props.onScale}
      onPrev={props.onPrev}
      onNext={props.onNext}
    />
  </div>
);

export default ToolBar;
