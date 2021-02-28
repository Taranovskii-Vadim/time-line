import React from "react";
import { DateType } from "../../types";
import DateLine from "./components/DateLine";
import DateTools from "./components/DateTools";

const ToolBar = () => {
  const validDate = new Date();
  const initialType: DateType = "month";

  return (
    <div>
      <div style={{ display: "flex", marginTop: 20 }}>content</div>
      <div style={{ display: "flex", marginTop: 20 }}>
        <DateTools type={initialType} />
        <DateLine activeDate={validDate} type={initialType} />
      </div>
    </div>
  );
};

export default ToolBar;
