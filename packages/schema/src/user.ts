import * as z from "zod";

export const ZUserRegister = z.union([
  // Standard registration with email, password, optional username
  z.object({
    email: z.email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" }),
    username: z.string().min(3).max(30).optional(),
    googleId: z.never(),
  }),
  // Google registration using Google OAuth ID token or Google ID
  z.object({
    email: z.email({ message: "Invalid email address" }),
    password: z.never(), // disallow password in Google flow
    username: z.string().min(3).max(30).optional(),
    googleId: z.string({ message: "Google ID is required" }),
  }),
]);

export const ZUserLogin = z.union([
  // Standard login with email and password
  z.object({
    email: z.email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" }),
    googleId: z.never(),
  }),
  // Login via Google OAuth ID
  z.object({
    email: z.email({ message: "Invalid email address" }).optional(),
    password: z.never(),
    googleId: z.string({ message: "Google ID is required" }),
  }),
]);
