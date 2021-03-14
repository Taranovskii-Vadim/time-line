import React from "react";

import { TDateType } from "../../types";

import FirstLine from "./components/FirstLine";
import SecondLine from "./components/SecondLine";

interface IProps {
  dateType: TDateType;
  currentDate: Date;
  onScale: React.Dispatch<TDateType>;
  onPrev: React.Dispatch<void>;
  onNext: React.Dispatch<void>;
  onSetMonth: (val: number) => void;
  onSetYear: (val: number) => void;
}

const ToolBar: React.FC<IProps> = ({
  dateType,
  currentDate,
  onScale,
  onPrev,
  onNext,
  onSetMonth,
  onSetYear,
}): JSX.Element => (
  <div>
    <FirstLine
      dateType={dateType}
      currentDate={currentDate}
      onSetMonth={onSetMonth}
      onSetYear={onSetYear}
    />
    <SecondLine
      dateType={dateType}
      currentDate={currentDate}
      onScale={onScale}
      onPrev={onPrev}
      onNext={onNext}
    />
  </div>
);

export default ToolBar;
