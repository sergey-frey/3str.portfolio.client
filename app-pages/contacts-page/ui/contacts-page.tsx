import { ContactMeForm } from "@/widgets/contact-me-form";
import { ContactsInfo } from "./contacts-info";

export const ContactsPage = () => {
	return (
		<section className="px-4 lg:px-10 pb-[100px] max-w-[800px] mx-auto">
			<h1 className="text-h2 font-h2 lg:text-h1 lg:font-h1">
				Как со мной можно связаться?
			</h1>

			<ContactsInfo className="mt-14" />

			<ContactMeForm className="mt-14" />
		</section>
	);
};
