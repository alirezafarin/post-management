export const getNoteDate = (date: Date): string =>
  date.toLocaleDateString('en', { month: 'long', year: 'numeric', day: 'numeric' });

export const getNoteTime = (date: Date): string => `${date.getHours()}:${date.getMinutes()}`;
