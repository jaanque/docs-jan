/* -------------------------------------------------------------------------- */
/*                                 FORMATTERS                                 */
/* -------------------------------------------------------------------------- */

/**
 * Formats a number for professional UI display using the standard Intl API.
 * Converts large numbers to a compact shorthand (e.g., 2300 -> 2.3k, 856 -> 856).
 * 
 * @param num - The raw number to format.
 * @returns A formatted string representation.
 */
export function formatNumber(num: number): string {
  // We use Intl.NumberFormat with compact notation for robust, internationalized shorthand.
  // We then lowercase the result (e.g., "K" -> "k") to match our premium design aesthetic.
  return new Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 1
  }).format(num).toLowerCase();
}
