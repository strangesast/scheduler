export const DAYS_OF_WEEK: string[] = (() => {
  const locale = navigator.languages?.length ? navigator.languages[0] : navigator.language;
  const now = new Date();
  now.setDate(now.getDate() - now.getDay());
  const [y, m, d] = [now.getFullYear(), now.getMonth(), now.getDate()];
  const options = { weekday: 'short' };
  return Array.from(Array(7)).map((_, i) => new Date(y, m, d + i).toLocaleDateString(locale, options));
})();
