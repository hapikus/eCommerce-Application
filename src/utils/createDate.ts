export default function getDataFromString(dateStr: string): Date | string {
  const parts = dateStr.split('-');

  if (parts.length === 3) {
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const day = parseInt(parts[2], 10);

    if (!Number.isNaN(year) && !Number.isNaN(month) && !Number.isNaN(day)) {
      const parsedDate = new Date(year, month - 1, day);
      return parsedDate;
    }
    return 'Invalid date components';
  }
  return 'Invalid date format';
}
