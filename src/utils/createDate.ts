export default function getDataFromString(dateStr: string): Date | string {
  const parts = dateStr.split('-');

  if (parts.length === 3) {
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const day = parseInt(parts[2], 10);

    if (!Number.isNaN(year) && !Number.isNaN(month) && !Number.isNaN(day)) {
      if (month >= 1 && month <= 12) {
        const parsedDate = new Date(year, month - 1, day);
        if (
          parsedDate.getFullYear() === year &&
          parsedDate.getMonth() === month - 1 &&
          parsedDate.getDate() === day
        ) {
          return parsedDate;
        }
        return 'Invalid day for the given month';
      }
      return 'Invalid month';
    }
    return 'Invalid date components';
  }
  return 'Invalid date format';
}
