import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(80, "Name is too long"),

  email: z.string().email("Please enter a valid email address"),

  phone: z
    .string()
    .regex(/^\+?[\d\s\-().]{7,20}$/, "Please enter a valid phone number")
    .optional()
    .or(z.literal("")),

  message: z
    .string()
    .min(10, "Please provide at least 10 characters about your project")
    .max(2000, "Message is too long"),
});
