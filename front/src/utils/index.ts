import { format, isValid } from "date-fns";
import { ru } from "date-fns/locale";

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
  // eslint-disable-next-line no-console
  console.warn(`${date} не является типом Date `);
  return "N/A";
};
