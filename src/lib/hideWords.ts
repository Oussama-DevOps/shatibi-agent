export function hideWords(
  text: string,
  percentage: number = 0.3
) {
  const words = text.split(" ");

  const wordsToHide = Math.floor(
    words.length * percentage
  );

  const copy = [...words];

  for (let i = 0; i < wordsToHide; i++) {
    const index = Math.floor(
      Math.random() * words.length
    );

    copy[index] = "______";
  }

  return copy.join(" ");
}