import { useEffect, useRef } from "react";

const useFadeIn = () => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = "opacity 1s";
      current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};

export default useFadeIn;
