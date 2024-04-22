import { type Input, minLength, object, string } from "valibot";

export const contactMessageSchema = object({
	message: string([minLength(1)]),
});

export type ContactMessageDTO = Input<typeof contactMessageSchema>;
