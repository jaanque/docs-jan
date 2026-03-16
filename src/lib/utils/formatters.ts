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
  // Passing 'undefined' allows the API to use the user's system locale for global scalability.
  return new Intl.NumberFormat(undefined, {
    notation: 'compact',
    maximumFractionDigits: 1
  }).format(num).toLowerCase();
}
