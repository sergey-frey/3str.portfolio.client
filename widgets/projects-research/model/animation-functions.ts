import type { HTMLMotionProps } from "framer-motion";

export const getSkillsAnimationProps = (
	skillIndex: number,
): HTMLMotionProps<"li"> => {
	return {
		initial: {
			y: -50,
			opacity: 0,
		},
		animate: {
			y: 0,
			opacity: 1,
		},
		transition: {
			type: "spring",
			damping: 10,
			stiffness: 120,
			duration: 0.4,
			delay: 0.05 * skillIndex,
		},
		viewport: {
			once: true,
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
