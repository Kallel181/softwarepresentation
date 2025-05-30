import { Txt } from '@motion-canvas/2d';
import { waitFor, easeOutBack, easeInBack, all } from '@motion-canvas/core';


export function* revealTextScramble(
  node: Txt,
  finalText: string,
  delayPerChar = 0.05,
) {
  const characters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890";
  node.opacity(1);

  for (let i = 0; i <= finalText.length; i++) {
    const currentText =
      finalText.slice(0, i) +
      finalText
        .slice(i)
        .split('')
        .map(c => (c === ' ' ? ' ' : characters[Math.floor(Math.random() * characters.length)]))
        .join('');

    node.text(currentText);
    yield* waitFor(delayPerChar);
  }

  node.text(finalText);
}


export function* highlightText(
  node: Txt,
  highlightColor: string,
  scaleAmount: number,
  duration: number,
) {
  // Escala e cor ao destacar
  yield* all(
    node.fill(highlightColor, duration),
    node.scale(scaleAmount, duration/2, easeOutBack),
  );

  // Retorna ao normal
  yield* all(
    node.scale(1, duration/2, easeInBack)
  );
}