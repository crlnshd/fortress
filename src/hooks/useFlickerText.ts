import { useEffect, useMemo, useState } from "react";

export const useFlickerText = (
  text: string,
  flickerProbability = 0.2,
  flickerDuration = 300,
  intervalDuration = 1200
) => {
  const [hiddenIndices, setHiddenIndices] = useState<number[]>([]);

  const textArray = useMemo(() => text.split(" "), [text]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;

    const intervalId = setInterval(() => {
      const randomIndices = textArray
        .map((_, index) => (Math.random() < flickerProbability ? index : -1))
        .filter((index) => index !== -1);

      setHiddenIndices(randomIndices);

      timeoutId = setTimeout(() => setHiddenIndices([]), flickerDuration);
    }, intervalDuration);

    return () => {
      clearInterval(intervalId);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [textArray, flickerProbability, flickerDuration, intervalDuration]);

  return { textArray, hiddenIndices };
};
