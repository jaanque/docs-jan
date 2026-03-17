/**
 * Utility to extract the dominant vibrant color from an image.
 */
export function extractDominantColor(imgElement: HTMLImageElement): string | null {
  try {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    // Sample a small grid for performance
    const size = 10;
    canvas.width = size;
    canvas.height = size;
    
    ctx.drawImage(imgElement, 0, 0, size, size);
    const imageData = ctx.getImageData(0, 0, size, size).data;
    
    const candidates: { r: number, g: number, b: number, score: number }[] = [];

    for (let i = 0; i < imageData.length; i += 4) {
      const r = imageData[i];
      const g = imageData[i + 1];
      const b = imageData[i + 2];
      const a = imageData[i + 3];

      if (a < 128) continue; // Skip semi-transparent pixels

      // Calculate perceived lightness (0-255)
      const lightness = (0.299 * r) + (0.587 * g) + (0.114 * b);
      
      // Skip if too white (> 235) or too dark (< 20) for better vibrancy
      if (lightness > 235 || lightness < 20) continue;

      // Simple scoring: favor saturation
      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      const saturation = max === 0 ? 0 : (max - min) / max;
      
      candidates.push({ r, g, b, score: saturation });
    }

    if (candidates.length > 0) {
      // Sort by saturation to find the most "vibrant" representative color
      candidates.sort((a, b) => b.score - a.score);
      const winner = candidates[0];
      return `${winner.r}, ${winner.g}, ${winner.b}`;
    }
  } catch {
    // Silent fail for color extraction
  }
  return null;
}
