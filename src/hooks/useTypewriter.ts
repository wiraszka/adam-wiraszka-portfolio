import { useEffect, useRef, useState } from "react";

export function useTypewriter(
  strings: string[],
  typeSpeed = 80,
  deleteSpeed = 40,
  pauseDuration = 1600
): { text: string } {
  const [text, setText] = useState("");

  const state = useRef({
    stringIndex: 0,
    charIndex: 0,
    isDeleting: false,
    isPaused: false,
  });

  useEffect(() => {
    state.current = { stringIndex: 0, charIndex: 0, isDeleting: false, isPaused: false };

    let timeoutId: ReturnType<typeof setTimeout>;

    const tick = () => {
      const s = state.current;
      const current = strings[s.stringIndex];

      if (s.isPaused) {
        s.isPaused = false;
        s.isDeleting = true;
        timeoutId = setTimeout(tick, deleteSpeed);
        return;
      }

      if (s.isDeleting) {
        if (s.charIndex > 0) {
          s.charIndex--;
          setText(current.slice(0, s.charIndex));
          timeoutId = setTimeout(tick, deleteSpeed);
        } else {
          s.isDeleting = false;
          s.stringIndex = (s.stringIndex + 1) % strings.length;
          timeoutId = setTimeout(tick, typeSpeed);
        }
        return;
      }

      if (s.charIndex < current.length) {
        s.charIndex++;
        setText(current.slice(0, s.charIndex));
        timeoutId = setTimeout(tick, typeSpeed);
      } else {
        s.isPaused = true;
        timeoutId = setTimeout(tick, pauseDuration);
      }
    };

    timeoutId = setTimeout(tick, typeSpeed);
    return () => clearTimeout(timeoutId);
  }, [strings, typeSpeed, deleteSpeed, pauseDuration]);

  return { text };
}
