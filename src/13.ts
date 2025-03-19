// Function to retrieve a random integer between 1 and 10
function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max) + 1;
}

// Function to retrieve a random element from an array
function getRandomElement<T>(arr: T[]): T | undefined {
  const index = getRandomInt(arr.length);
  if (index >= 0 && index < arr.length) {
    return arr[index];
  }
}

// Function to retrieve a random string from an array of strings
function getRandomString(arr: string[]): string | undefined {
  const element = getRandomElement(arr);
  if (element !== undefined && typeof element === 'string') {
    return element;
  }
}
