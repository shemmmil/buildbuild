/**
 *
 * Example: kFormatter(2400) -> 2.4k
 *
 * @param num number
 * @returns formatting number
 */
export function kFormatter(num: number) {
  if (Math.abs(num) < 1000) return Math.sign(num) * Math.abs(num);

  return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
}
