import {
  addDays,
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfYear,
  format,
  getDate,
  getDaysInMonth,
  getMonth,
  getYear,
  isBefore,
  isSameMonth,
  isSameYear,
  isSaturday,
  isSunday,
  isValid,
  isWithinInterval,
  min,
  startOfMonth,
  startOfYear,
} from "date-fns";
import { ru } from "date-fns/locale";

import { MONTH_NAMES_RU } from "../constants";
import { StupidType } from "../store/types";
import { TDateType, MonthNameRu } from "../types";

const countMonthInYear = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const getPercentWidth = (from: Date, to: Date): string => {
  const fromMonth = getMonth(from);
  const toMonth = getMonth(to);
  const countDayFrom = getDate(from);
  const countDayTo = getDate(to);
  const summa = countMonthInYear.reduce((acc, i) => {
    const item = i - 1;
    if (fromMonth <= item && toMonth >= item) {
      const countInMonth = getDaysInMonth(new Date(getYear(from), item));
      const oneBlockSum = 8.3333333333 / countInMonth;
      if (fromMonth === item && toMonth === item) {
        const countActiveDate = countDayTo - countDayFrom + 1;
        return acc + oneBlockSum * countActiveDate;
      }
      if (fromMonth === item && toMonth > item) {
        const countActiveDate = countInMonth - countDayFrom + 1;
        return acc + oneBlockSum * countActiveDate;
      }
      if (fromMonth < item && toMonth === item) {
        return acc + oneBlockSum * countDayTo;
      }
      if (fromMonth < item && toMonth > item) {
        return acc + oneBlockSum * countInMonth;
      }
    }
    return acc;
  }, 0);
  return String(summa);
};

const getCountDayInMonths = (date: Date): {} => {
  return countMonthInYear.reduce((acc, item) => {
    return { ...acc, [item]: getDaysInMonth(addMonths(date, item - 1)) };
  }, {});
};

const getPercentForDayLeft = (activeDate: Date, day: Date): string => {
  const months: StupidType = getCountDayInMonths(activeDate);
  const summa = countMonthInYear.reduce((acc, month) => {
    const dateMonth = new Date(getYear(activeDate), month - 1);
    let percentDay = 0;
    if (isBefore(dateMonth, day)) {
      if (isSameMonth(dateMonth, day)) {
        const daysInMonth = months[month];
        percentDay = (8.3333333333 / daysInMonth) * (getDate(day) - 1);
      } else {
        percentDay = 8.3333333333;
      }
      return acc + percentDay;
    }
    return acc;
  }, 0);
  return String(summa);
};

const styleYear = ({
  from,
  to,
  activeDate,
}: {
  from: Date;
  to: Date;
  activeDate: Date;
}): React.CSSProperties => {
  const startYear = startOfYear(activeDate);
  const endYear = endOfYear(activeDate);

  if (isSameYear(from, activeDate)) {
    const width = getPercentWidth(from, isBefore(to, endYear) ? to : endYear);
    const left = getPercentForDayLeft(startYear, from);
    return {
      width: `${width}%`,
      left: `${left}%`,
    };
  }
  if (isWithinInterval(startYear, { start: from, end: to })) {
    const width = getPercentWidth(
      startYear,
      isBefore(to, endYear) ? to : endYear
    );
    return {
      width: `${width}%`,
      left: "0",
    };
  }
  return {
    display: "none",
  };
};

const styleMonth = ({
  from,
  to,
  activeDate,
}: {
  from: Date;
  to: Date;
  activeDate: Date;
}): React.CSSProperties => {
  const countDays = getDaysInMonth(activeDate);
  const startMonth = startOfMonth(activeDate);
  const endMonth = endOfMonth(activeDate);

  const startDate = new Date(from.setHours(0, 0, 0, 0));
  const endDate = new Date(to.setHours(0, 0, 0, 0));

  const getPercentForMonth = (interval?: Date[]): number => {
    const percentDay = 100 / countDays;
    return interval ? percentDay * interval.length : 0;
  };

  if (isSameMonth(startDate, activeDate)) {
    const dateLeft = eachDayOfInterval({
      start: startMonth,
      end: startDate,
    });
    dateLeft.pop();
    const widthLeft = getPercentForMonth(dateLeft);
    const width = getPercentForMonth(
      eachDayOfInterval({
        start: startDate,
        end: min([endDate, endMonth]),
      })
    );
    return {
      width: `${width}%`,
      left: `${widthLeft}%`,
    };
  }
  if (isWithinInterval(startMonth, { start: startDate, end: endDate })) {
    const left = getPercentForMonth(
      eachDayOfInterval({ start: startDate, end: addDays(startMonth, -1) })
    );
    const width = getPercentForMonth(
      eachDayOfInterval({
        start: startDate,
        end: endDate,
      })
    );
    let right = 0;
    const endDayMonth = addDays(endMonth, 1);
    if (endDate > endDayMonth) {
      right = getPercentForMonth(
        eachDayOfInterval({
          start: endDayMonth,
          end: endDate,
        })
      );
    }
    return {
      width: `${width - left - right}%`,
      left: `0%`,
    };
  }
  return {
    display: "none",
  };
};

export const positionEvent = (
  { from, to, activeDate }: { from: Date; to: Date; activeDate: Date },
  type: TDateType
): React.CSSProperties => {
  if (from && to) {
    if (type === "month") {
      return styleMonth({ from, to, activeDate });
    }
    if (type === "year") {
      return styleYear({ from, to, activeDate });
    }
  }
  return {};
};

export const toDayLine = (activeDate: Date): React.CSSProperties => {
  const toDay = new Date(new Date().setHours(0, 0, 0, 0));
  const startYear = startOfYear(activeDate);
  const left = getPercentForDayLeft(startYear, toDay);

  return {
    left: `${left}%`,
  };
};

export const isWeekend = (date: Date, type: TDateType): boolean => {
  if (type === "month") {
    return isSunday(date) || isSaturday(date);
  }
  return false;
};

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

export const ruNominativeMonth = (monthToken: number): MonthNameRu =>
  MONTH_NAMES_RU[monthToken];
