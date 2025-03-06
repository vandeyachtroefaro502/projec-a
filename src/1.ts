function getRandomTsCode(): string {
  const lines = [];
  for (let i = 0; i < 10; i++) {
    lines.push(Math.random().toString());
  }
  return lines.join('\n');
}
