import { format, isSaturday, isSunday, isValid } from "date-fns";
import { ru } from "date-fns/locale";

import { MONTH_NAMES_RU } from "../constants";
import { TDateType, MonthNameRu } from "../types";

export const formatDate = (
  date: Date,
  formatStr: string,
  locale?: string
): string => {
  if (isValid(date)) {
    if (locale === "en") {
      return format(date, formatStr);
    }
    return format(date, formatStr, {
      locale: ru,
    });
  }
  console.warn(`${date} не является типом Date `);
  return "N/A";
};

export const isWeekend = (date: Date, type: TDateType): boolean => {
  if (type === "month") {
    return isSunday(date) || isSaturday(date);
  }
  return false;
};

export const ruNominativeMonth = (monthToken: number): MonthNameRu =>
  MONTH_NAMES_RU[monthToken];
