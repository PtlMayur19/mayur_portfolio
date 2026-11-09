"use client";

import { useRef, useEffect, useCallback } from "react";

/**
 * Hook to smoothly track mouse position inside a container and position
 * an inversion lens element using requestAnimationFrame for 60fps/120fps performance.
 *
 * Matches the exact behavior of Portfoliofy Creative Artsy template:
 * updates style.left and style.top percentages relative to the container.
 */
export function useInversionLens(bounds = [3, 97]) {
  const lensRef = useRef(null);
  const rafRef = useRef(0);

  useEffect(() => {
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const onMouseMove = useCallback(
    (e) => {
      const el = lensRef.current;
      if (!el) return;
      const target = e.currentTarget;
      const { clientX, clientY } = e;

      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const rect = target.getBoundingClientRect();
        if (!rect.width || !rect.height) return;

        let xPct = ((clientX - rect.left) / rect.width) * 100;
        let yPct = ((clientY - rect.top) / rect.height) * 100;

        if (bounds) {
          xPct = Math.min(bounds[1], Math.max(bounds[0], xPct));
          yPct = Math.min(bounds[1], Math.max(bounds[0], yPct));
        }

        el.style.left = `${xPct}%`;
        el.style.top = `${yPct}%`;
      });
    },
    [bounds]
  );

  return { lensRef, onMouseMove };
}

