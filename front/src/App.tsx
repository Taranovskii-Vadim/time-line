import React from "react";
import ToolBar from "./components/ToolBar";

const App: React.FC = (): JSX.Element => {
  return (
    <div style={{ maxWidth: 1200, margin: "auto" }}>
      <ToolBar />
    </div>
  );
};

export default App;
