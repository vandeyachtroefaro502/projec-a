export function calculateBMI(height: number, weight: number): number {
  return weight / (height * height) * 10000;
}
