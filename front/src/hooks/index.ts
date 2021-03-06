import { useState, useEffect } from "react";
import { addMonths, addYears, addDays, addWeeks } from "date-fns/esm";
import { startOfYear, getDaysInMonth, startOfMonth } from "date-fns";

import {
  TDateType,
  DaysInMonth,
  CalendarStateController,
  CalendarState,
  VariableIterator,
} from "../types";

const DATE_INCREMENTOR_MAP = {
  month: addMonths,
  year: addYears,
};

export const useDateMap = (activeDate: Date, type: TDateType) => {
  const [dates, setMonths] = useState<DaysInMonth[]>([]);

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
    setMonths(daysInMonth);
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
    setDate: date => {
      setState({ ...state, currentDate: date });
    },
    offsetDate: val => {
      const { type } = state;
      const iterator: VariableIterator | undefined = DATE_INCREMENTOR_MAP[type];
      if (typeof iterator === "function") {
        const currentDate = iterator(state.currentDate, val);
        setState({ ...state, currentDate });
      }
    },
  };
};
