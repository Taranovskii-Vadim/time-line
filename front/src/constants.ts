import { addMonths, addYears } from "date-fns/esm";
import { MonthIndex } from "./types";

export const DATE_INCREMENTOR_MAP = {
  month: addMonths,
  year: addYears,
};

export const MONTHS_INDEXES: MonthIndex[] = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
];

export const MONTH_NAMES_RU = [
  "январь",
  "февраль",
  "март",
  "апрель",
  "май",
  "июнь",
  "июль",
  "август",
  "сентябрь",
  "октябрь",
  "ноябрь",
  "декабрь",
] as const;
