import { timeline, stagger } from "motion";

export const fadeInUpAnimate = (element: HTMLElement | string) => {
  timeline([
    [element, { opacity: 0, transform: "translateY(-100%)" }, { duration: 0 }],
    [
      element,
      { opacity: 1, transform: "none" },
      { delay: stagger(0.2), duration: 0.5 },
    ],
  ]);
};
