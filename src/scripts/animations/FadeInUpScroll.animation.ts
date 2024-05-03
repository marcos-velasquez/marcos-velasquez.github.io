import { scroll, timeline, stagger } from "motion";

export const fadeInUpScrollAnimate = (element: HTMLElement | string) => {
  scroll(
    timeline([
      [element, { opacity: 0, transform: "translateY(-100%)" }],
      [element, { opacity: 1, transform: "none" }, { delay: stagger(0.3) }],
    ]),
    { offset: ["0%", "25%"] }
  );
};
