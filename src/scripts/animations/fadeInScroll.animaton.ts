import { scroll, animate } from "motion";

export const fadeInScroll = (element: Element) => {
  scroll(animate(element, { opacity: [0, 1, 1, 0] }), {
    target: element,
    offset: ["start end", "end end", "start start", "end start"],
  });
};
