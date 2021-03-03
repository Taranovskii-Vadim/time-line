import React from "react";

import Calendar from "./components/Calendar";
import ToolBar from "./components/ToolBar";

const App: React.FC = (): JSX.Element => {
  return (
    <div style={{ maxWidth: 1200, margin: "auto" }}>
      <ToolBar />
      <Calendar />
    </div>
  );
};

export default App;
