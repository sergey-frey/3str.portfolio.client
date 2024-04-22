import { DETAILS } from "@/shared/constants/details";
import { UILink } from "@/shared/ui";
import { TelegramIcon } from "@/shared/ui/icons";
import { ContactMeForm } from "@/widgets/contact-me-form";
import { AtSymbolIcon, PhoneIcon } from "@heroicons/react/24/outline";

export const ContactsPage = () => {
	return (
		<section className="px-4 lg:px-10 pb-[100px] max-w-[800px] mx-auto">
			<h1 className="text-h2 font-h2 lg:text-h1 lg:font-h1">
				Как со мной можно связаться?
			</h1>

			<div className="mt-14 grid gap-10">
				<div className="flex items-center gap-4 flex-wrap">
					<TelegramIcon className="text-primary-300 w-7 h-7" />
					<UILink component="a" inNewTab href={DETAILS.TELEGRAM_LINK}>
						Telegram
					</UILink>
					<span className="text-neutral-300 whitespace-nowrap ml-auto">
						[&nbsp;{DETAILS.TELEGRAM_USERNAME}&nbsp;]
					</span>
				</div>

				<div className="flex items-center gap-4 flex-wrap">
					<PhoneIcon className="text-primary-300 w-7 h-7" />
					<UILink component="a" inNewTab href={`tel:${DETAILS.PHONE_NUMBER}`}>
						{DETAILS.PHONE_NUMBER}
					</UILink>
					<span className="text-neutral-300 whitespace-nowrap ml-auto">
						[&nbsp;+WhatsApp&nbsp;]
					</span>
				</div>

				<div className="flex items-center gap-4 text-primary-300">
					<AtSymbolIcon className="w-7 h-7" />
					{DETAILS.EMAIL}
				</div>
			</div>

			<ContactMeForm className="mt-14" />
		</section>
	);
};
