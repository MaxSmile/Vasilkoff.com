import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export function SplitText({ children }) {
  const [isBrowser, setIsBrowser] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const words = children.split(" ");

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  let characterIndex = 0;

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  useEffect(() => {
    if (inView) setIsVisible(true);
  }, [inView]);

  return words.map((word, wordIndex) => {
    return (
      isBrowser && (
        <span
          ref={ref}
          key={`word-${wordIndex}`}
          className={`split-word ${word === "<br/>" ? "word-break" : ""}`}
        >
          {Array.from(word).map((letter, i) => {
            characterIndex++;
            return (
              <span
                className={isVisible ? "split-letter" : ""}
                key={children + i}
                style={{ "--char-index": characterIndex }}
              >
                {word !== "<br/>" ? letter : ""}
              </span>
            );
          })}

          {words.length - 1 !== wordIndex && word !== "<br/>" ? "\u00A0" : ""}
        </span>
      )
    );
  });
}
