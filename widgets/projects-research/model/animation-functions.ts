import type { HTMLMotionProps } from "framer-motion";

export const getSkillsAnimationProps = (): HTMLMotionProps<"ul"> => {
	return {
		initial: {
			x: -50,
			opacity: 0,
		},
		animate: {
			x: 0,
			opacity: 1,
		},
		transition: {
			type: "spring",
			damping: 10,
			stiffness: 120,
			duration: 0.4,
		},
	};
};

export const getProjectsAnimationProps = (
	projectIndex: number,
): HTMLMotionProps<"base"> => {
	return {
		initial: {
			zoom: 0.8,
		},
		animate: {
			zoom: 1,
		},
		transition: {
			type: "tween",
			duration: 0.25,
			delay: 0.1 * projectIndex,
		},
	};
};
