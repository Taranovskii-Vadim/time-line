import { addMonths, addYears } from "date-fns/esm";

export const DATE_INCREMENTOR_MAP = {
  month: addMonths,
  year: addYears,
};

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
