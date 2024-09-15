import { useEffect } from "react";

const useBeforeLeave = (onBefore) => {
  if (typeof onBefore !== "function") return;
  const handle = (event) => {
    if (event.clientY <= 0) onBefore();
    console.log(event);
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};
export default useBeforeLeave;
