import React, { useState } from "react";

import Calendar from "./components/Calendar";
import ToolBar from "./components/ToolBar";
import { TDateType } from "./types";

const App: React.FC = (): JSX.Element => {
  const [dateType, setDateType] = useState<TDateType>("month");
  return (
    <div style={{ maxWidth: 1350, margin: "auto" }}>
      <ToolBar dateType={dateType} />
      <Calendar dateType={dateType} />
    </div>
  );
};

export default App;
