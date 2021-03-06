import { useState, useEffect } from "react";
import { addMonths, addYears, addDays, addWeeks } from "date-fns/esm";
import { startOfYear, getDaysInMonth, startOfMonth } from "date-fns";

import { TDateType, DaysInMonth } from "../types";

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
