"use client";

import { UIButton, UITextarea } from "@/shared/ui";
import clsx from "clsx";
import { type HTMLAttributes, useState } from "react";
import { useContactMe } from "../model/use-contact-me";

type ContactMeFormProps = HTMLAttributes<HTMLElement>;

export const ContactMeForm = ({ className, ...props }: ContactMeFormProps) => {
	const [queryMessage, setQueryMessage] = useState<string>("");
	const { handleSubmit } = useContactMe({
		onSuccess: () => setQueryMessage(""),
	});

	const hasMessage = queryMessage.length > 0;

	return (
		<article {...props} className={clsx("", className)}>
			<h2 className="text-m lg:text-h2 font-medium">
				Вы можете связаться со мной прямо здесь
			</h2>
			<p className="text-neutral-300 text-md">
				Только не забудьте указать ваш контакт чтобы я мог ответить :)
			</p>
			<form className="mt-3" onSubmit={handleSubmit(queryMessage)}>
				<UITextarea
					onChange={setQueryMessage}
					value={queryMessage}
					rows={7}
					placeholder="Расскажите о своём предложении, вакансии или задайте вопрос, который вас интересует"
				/>
				<UIButton type="submit" className="mt-3" disabled={!hasMessage}>
					Отправить
				</UIButton>
			</form>
		</article>
	);
};
