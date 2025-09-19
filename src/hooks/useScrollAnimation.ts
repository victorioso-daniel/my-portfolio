import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const useScrollAnimation = (threshold = 0.3) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    margin: "-100px", 
    amount: threshold,
    once: false 
  });

  return { ref, isInView };
}; 