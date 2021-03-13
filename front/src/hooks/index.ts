import { useState, useEffect } from "react";
import { addMonths, addDays, setMonth, setYear } from "date-fns/esm";
import { startOfYear, getDaysInMonth, startOfMonth } from "date-fns";

import { DATE_INCREMENTOR_MAP } from "../constants";

import {
  TDateType,
  DaysInMonth,
  CalendarStateController,
  CalendarState,
  VariableIterator,
} from "../types";

export const useDateMap = (activeDate: Date, type: TDateType) => {
  const [dates, setDates] = useState<DaysInMonth[]>([]);

  useEffect(() => {
    const daysInMonth: DaysInMonth[] = [];
    if (type === "year") {
      for (let i = 0; i < 12; i++) {
        daysInMonth.push({
          key: i,
          date: addMonths(startOfYear(activeDate), i),
        });
      }
    } else if (type === "month") {
      for (let i = 0; i < getDaysInMonth(activeDate); i++) {
        daysInMonth.push({
          key: i,
          date: addDays(startOfMonth(activeDate), i),
        });
      }
    }
    setDates(daysInMonth);
  }, [activeDate, type]);

  return dates;
};

export const useCalendarState = (): CalendarStateController => {
  const [state, setState] = useState<CalendarState>({
    type: "month",
    currentDate: new Date(),
  });

  return {
    state,
    setType: type => {
      setState({ ...state, type });
    },
    offsetDate: val => {
      const { type } = state;
      const iterator: VariableIterator | undefined = DATE_INCREMENTOR_MAP[type];
      if (typeof iterator === "function") {
        const currentDate = iterator(state.currentDate, val);
        setState({ ...state, currentDate });
      }
    },
    setDateMonth: val => {
      const currentDate = setMonth(state.currentDate, val);
      setState({ ...state, currentDate });
    },
    setDateYear: val => {
      const currentDate = setYear(state.currentDate, val);
      setState({ ...state, currentDate });
    },
  };
};
