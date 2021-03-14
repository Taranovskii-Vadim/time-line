import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Calendar from "./components/Calendar";
import ToolBar from "./components/ToolBar";

import { fetchUsers } from "./store/models/users/actions";

import { useCalendarState } from "./hooks";

import { selectLoading } from "./store/models/users/selectors";

const App: React.FC = (): JSX.Element => {
  const {
    state,
    setType,
    offsetDate,
    setDateMonth,
    setDateYear,
  } = useCalendarState();
  const dispatch = useDispatch();

  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div style={{ maxWidth: 1350, margin: "auto" }}>
      <ToolBar
        dateType={state.type}
        isLoading={isLoading}
        currentDate={state.currentDate}
        onScale={type => setType(type)}
        onPrev={() => offsetDate(-1)}
        onNext={() => offsetDate(1)}
        onSetMonth={setDateMonth}
        onSetYear={setDateYear}
      />
      <Calendar
        dateType={state.type}
        currentDate={state.currentDate}
        isLoading={isLoading}
      />
    </div>
  );
};

export default App;
