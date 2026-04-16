import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollReveal = (ref, animationProps) => {
  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
          ...animationProps.scrollTrigger
        },
        ...animationProps
      });
    }, ref);

    return () => ctx.revert();
  }, [ref, animationProps]);
};

export default useScrollReveal;
