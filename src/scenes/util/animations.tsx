import { Txt } from '@motion-canvas/2d';
import { waitFor} from '@motion-canvas/core';


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