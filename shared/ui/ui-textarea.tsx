import clsx from "clsx";
import type {
	ChangeEvent,
	Dispatch,
	SetStateAction,
	TextareaHTMLAttributes,
} from "react";

type UITextareaProps = Omit<
	TextareaHTMLAttributes<HTMLTextAreaElement>,
	"onChange"
> & {
	value?: string;
	onChange: ((value: string) => void) | Dispatch<SetStateAction<string>>;
};

export const UITextarea = ({
	id,
	className,
	value = "",
	onChange,
	...props
}: UITextareaProps) => {
	const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		onChange(e.target.value);
	};

	return (
		<div className="flex flex-col gap-1">
			<textarea
				{...props}
				className={clsx(
					className,
					"px-4 py-2 rounded-lg bg-neutral-1 text-neutral-100 resize-none",
					"focused",
				)}
				value={value}
				onChange={handleChange}
			/>
		</div>
	);
};
