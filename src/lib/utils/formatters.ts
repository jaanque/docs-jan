/**
 * Formats a number for professional UI display.
 * Converts large numbers to a "k" shorthand (e.g., 2300 -> 2.3k, 856 -> 856).
 * 
 * @param num - The raw number to format.
 * @returns A formatted string representation.
 */
export function formatNumber(num: number): string {
  if (num < 1000) {
    return num.toString();
  }
  
  const formatted = (num / 1000).toFixed(1);
  
  // Remove .0 if it exists (e.g., "1.0k" -> "1k")
  return formatted.replace(/\.0$/, '') + 'k';
}
