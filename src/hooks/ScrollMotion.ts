import { useEffect, useRef } from "react";
import { useColorNavStore } from "./../store/useStore";

export const ScrollMotion = () => {
  const setIsColorNav = useColorNavStore((state) => state.setIsColorNav);

  const sectionRef = useRef<HTMLElement | null>(null);

  const moveScroll = () => {
    let targetY = sectionRef.current?.getBoundingClientRect().y;

    if (targetY && targetY < 50) setIsColorNav(true);
    else setIsColorNav(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", moveScroll);
    return () => {
      window.removeEventListener("scroll", moveScroll);
    };
  }, []);

  return { sectionRef };
};
