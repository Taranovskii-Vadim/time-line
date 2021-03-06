import React from "react";

import Calendar from "./components/Calendar";
import ToolBar from "./components/ToolBar";

import { useCalendarState } from "./hooks";

const App: React.FC = (): JSX.Element => {
  const { state, setType, offsetDate } = useCalendarState();

  return (
    <div style={{ maxWidth: 1350, margin: "auto" }}>
      <ToolBar
        dateType={state.type}
        currentDate={state.currentDate}
        onScale={type => setType(type)}
        onPrev={() => offsetDate(-1)}
        onNext={() => offsetDate(1)}
      />
      <Calendar dateType={state.type} currentDate={state.currentDate} />
    </div>
  );
};

export default App;
