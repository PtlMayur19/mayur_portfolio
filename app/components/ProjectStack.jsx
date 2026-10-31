"use client";

import { useRef, useMemo } from "react";
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion";
import ProjectCard from "./ProjectCard";

/**
 * Compute strictly monotonic scroll progress mappings for any number of cards.
 *
 * For each card `index`:
 * - As each subsequent card `k` (k > index) arrives and covers this card:
 *   - Scale reduces progressively (e.g. 1.0 -> 0.945 -> 0.89 -> 0.835)
 *   - Card moves slightly upward (e.g. 0 -> -10px -> -20px -> -30px)
 *   - Subtle brightness drop creates realistic paper depth
 * - The final card remains at scale 1.0, un-dimmed and fully readable.
 */
function computeCardRanges(index, totalCards) {
  const numTransitions = totalCards - 1;
  const step = 0.9 / Math.max(numTransitions, 1);
  const progressPoints = [0];
  const scalePoints = [1];
  const yPoints = [0];
  const brightnessPoints = [1];

  for (let k = index + 1; k < totalCards; k++) {
    const t = k - 1;
    const startP = Number((t * step + step * 0.15).toFixed(4));
    const endP = Number(((t + 1) * step).toFixed(4));
    const depth = k - index;
    const targetScale = Number(Math.max(0.82, 1 - depth * 0.055).toFixed(3));
    const targetY = -(depth * 10);
    const targetBrightness = Number(Math.max(0.78, 1 - depth * 0.06).toFixed(3));

    // Before incoming card starts overlapping
    progressPoints.push(startP);
    scalePoints.push(scalePoints[scalePoints.length - 1]);
    yPoints.push(yPoints[yPoints.length - 1]);
    brightnessPoints.push(brightnessPoints[brightnessPoints.length - 1]);

    // After incoming card has finished covering
    progressPoints.push(endP);
    scalePoints.push(targetScale);
    yPoints.push(targetY);
    brightnessPoints.push(targetBrightness);
  }

  // Ensure 1.0 boundary is covered
  if (progressPoints[progressPoints.length - 1] < 1) {
    progressPoints.push(1);
    scalePoints.push(scalePoints[scalePoints.length - 1]);
    yPoints.push(yPoints[yPoints.length - 1]);
    brightnessPoints.push(brightnessPoints[brightnessPoints.length - 1]);
  }

  return { progressPoints, scalePoints, yPoints, brightnessPoints };
}

/**
 * StackedCardItem – Manages sticky positioning and scroll-driven scale transforms
 * for a single project card in the stack.
 */
function StackedCardItem({
  project,
  index,
  totalCards,
  scrollYProgress,
  shouldReduceMotion,
}) {
  const isLast = index === totalCards - 1;

  // Staggered sticky top offsets:
  // Card 0: 5.75rem (~92px)
  // Card 1: 5.75rem + 22px (~114px)
  // Card 2: 5.75rem + 44px (~136px)
  // Card 3: 5.75rem + 66px (~158px)
  // This keeps every top tab and colored rim cleanly visible above subsequent cards.
  const stickyTop = `calc(5.75rem + ${index * 22}px)`;

  const { progressPoints, scalePoints, yPoints, brightnessPoints } = useMemo(
    () => computeCardRanges(index, totalCards),
    [index, totalCards]
  );

  const rawScale = useTransform(scrollYProgress, progressPoints, scalePoints);
  const rawY = useTransform(scrollYProgress, progressPoints, yPoints);
  const rawBrightness = useTransform(scrollYProgress, progressPoints, brightnessPoints);

  // Organic spring physics for ultra-smooth trackpad and mouse wheel interaction
  const smoothScale = useSpring(rawScale, { stiffness: 300, damping: 30, mass: 0.25 });
  const smoothY = useSpring(rawY, { stiffness: 300, damping: 30, mass: 0.25 });

  const scale = shouldReduceMotion ? 1 : smoothScale;
  const translateY = shouldReduceMotion ? 0 : smoothY;
  const filter = shouldReduceMotion
    ? undefined
    : useTransform(rawBrightness, (b) => `brightness(${b})`);

  return (
    <div
      className={`w-full relative md:sticky transition-none ${
        !isLast
          ? "mb-16 sm:mb-20 md:mb-[70vh] lg:mb-[75vh]"
          : "mb-8 sm:mb-12 md:mb-24"
      }`}
      style={{
        top: stickyTop,
        zIndex: 10 + index * 10,
      }}
    >
      <motion.div
        style={{
          scale,
          y: translateY,
          filter,
          transformOrigin: "top center",
        }}
      >
        <ProjectCard
          project={project}
          index={index}
          totalCards={totalCards}
        />
      </motion.div>
    </div>
  );
}

/**
 * ProjectStack – Scroll-driven sticky stacking folder interaction for 4 project cards.
 *
 * Sequence:
 * 1. Project 01 (Wayline, Blue) pins at designated sticky top.
 * 2. As user scrolls, Project 02 (Tandem, Charcoal) slides smoothly upward and covers Card 01.
 *    Card 01 scales down to ~0.94 and remains layered behind.
 * 3. Project 03 (Forge, Yellow) slides smoothly over Card 02.
 *    Cards 02 and 01 remain layered behind it.
 * 4. Project 04 (Orbit, Green) slides smoothly over Card 03 as the final focused card.
 * 5. After Card 04 has been revealed, the entire stack naturally unpins and scrolls away.
 * 6. Scrolling upward smoothly reverses the sequence continuously.
 */
export default function ProjectStack({ projects }) {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const totalCards = projects.length;

  // Track scroll progress through the entire stack track
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 5.75rem", "end end"],
  });

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-6xl mx-auto pb-12 sm:pb-16 md:pb-28"
    >
      {projects.map((project, index) => (
        <StackedCardItem
          key={project.id}
          project={project}
          index={index}
          totalCards={totalCards}
          scrollYProgress={scrollYProgress}
          shouldReduceMotion={shouldReduceMotion}
        />
      ))}
    </div>
  );
}
