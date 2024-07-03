import { z, ZodError } from 'zod';

// Define the schema using Zod
const registerSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .max(100, { message: "Name must not be more than 100 characters long." })
    .regex(/^[A-Za-z\s]+$/, { message: "Name must contain only alphabets." }),
  email: z
    .string()
    .min(3, { message: "Email must be at least 5 characters long." })
    .max(100, { message: "Email must not be more than 100 characters long." })
    .email({ message: "Invalid email address." }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters long.' })
    .max(100, { message: 'Password must not be more than 100 characters long.' }),
});

// Custom validation function
export const validate = (values: { name: string; email: string; password: string }) => {
  try {
    registerSchema.parse(values);
    return {};
  } catch (error) {
    if (error instanceof ZodError) {
      const errors: Record<string, string> = {};
      error.errors.forEach((err) => {
        if (err.path.length > 0) {
          errors[err.path[0]] = err.message;
        }
      });
      return errors;
    }
    return {};
  }
};
