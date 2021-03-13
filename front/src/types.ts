import { MONTH_NAMES_RU } from "./constants";

export type TDateType = "month" | "year";

export interface DaysInMonth {
  key: number;
  date: Date;
}

export type MonthNameRu = typeof MONTH_NAMES_RU[number];

export type MonthIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

export type VariableIterator = (date: number | Date, amount: number) => Date;

export interface CalendarStateController {
  state: CalendarState;
  setType: (type: CalendarState["type"]) => void;
  offsetDate: (val: number) => void;
  setDateMonth: (val: number) => void;
  setDateYear: (val: number) => void;
}

export interface CalendarState {
  type: TDateType;
  currentDate: Date;
}
