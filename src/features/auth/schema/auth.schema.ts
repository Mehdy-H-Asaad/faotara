import { z } from "zod";

export const authSchema = z.object({
	email: z
		.string()
		.min(1, "Required")
		.max(100, "Maximum 100 characters allowed. Please shorten your text"),
	password: z
		.string()
		.min(1, "Required")
		.max(100, "Maximum 100 characters allowed. Please shorten your text"),
});
