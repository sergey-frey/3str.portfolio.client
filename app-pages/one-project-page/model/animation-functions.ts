import type { HTMLMotionProps } from "framer-motion";

const getDefaultAnimationProps = (delay?: number) => ({
	transition: {
		type: "spring",
		damping: 10,
		stiffness: 120,
		duration: 0.4,
		delay,
	},
	viewport: {
		once: true,
	},
});

export const getHeaderAnimationProps = (): HTMLMotionProps<"h1"> => {
	return {
		...getDefaultAnimationProps(),
		initial: {
			opacity: 0,
			x: -50,
		},
		animate: {
			opacity: 1,
			x: 0,
		},
	};
};

export const getDescriptionAnimationProps = (): HTMLMotionProps<"p"> => {
	return {
		initial: {
			opacity: 0,
			x: -50,
		},
		animate: {
			opacity: 1,
			x: 0,
		},
		...getDefaultAnimationProps(),
	};
};

export const getLinksAnimationProps = (
	delay: number,
): HTMLMotionProps<"div"> => {
	return {
		initial: {
			opacity: 0,
			x: -50,
		},
		animate: {
			opacity: 1,
			x: 0,
		},
		...getDefaultAnimationProps(),
	};
};
