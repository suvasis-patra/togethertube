import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { User, Mail, Lock, LogIn } from "lucide-react";
import { ZUserRegister } from "@togethertube/schema/user";
import { Link } from "react-router-dom";

type RegisterFormData = z.infer<typeof ZUserRegister>;

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(ZUserRegister),
  });

  const onSubmit = (data: RegisterFormData) => {
    console.log("Form submitted:", data);
  };

  const handleGoogleRegister = () => {
    console.log("Google Register clicked");
    // Add Google OAuth flow here
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="md:min-w-[550px] mx-auto p-8 bg-gray-800 border border-gray-700 rounded-lg shadow-lg space-y-6 text-gray-100"
      >
        <h2 className="text-3xl font-bold text-center text-white">
          Create your{" "}
          <span className="text-transparent bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text">
            TogetherTube
          </span>{" "}
          account
        </h2>

        {/* Google Register Button */}
        <button
          type="button"
          onClick={handleGoogleRegister}
          className="bg-black/30 w-full cursor-pointer backdrop-blur-sm border border-red-500/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-500/20 hover:border-red-500/50 transition-all duration-300 inline-flex items-center justify-center gap-3"
        >
          <img
            src="/images/google_icon.svg"
            alt="Google icon"
            className="w-5 h-5"
          />
          Register with Google
        </button>

        <div className="flex items-center gap-2 text-gray-400 text-sm justify-center">
          <span>Or register with your email</span>
        </div>

        {/* Username */}
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2 font-medium">
            <User className="w-4 h-4 text-gray-300" /> Username
          </label>
          <input
            type="text"
            {...register("username")}
            className="mt-1 p-2 border border-gray-700 rounded bg-gray-800 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Enter your username"
          />
          {errors.username && (
            <span className="text-red-500 text-sm mt-1">
              {errors.username.message}
            </span>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2 font-medium">
            <Mail className="w-4 h-4 text-gray-300" /> Email
          </label>
          <input
            type="email"
            {...register("email")}
            className="mt-1 p-2 border border-gray-700 rounded bg-gray-800 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Enter your email"
          />
          {errors.email && (
            <span className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </span>
          )}
        </div>

        {/* Password */}
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2 font-medium">
            <Lock className="w-4 h-4 text-gray-300" /> Password
          </label>
          <input
            type="password"
            {...register("password")}
            className="mt-1 p-2 border border-gray-700 rounded bg-gray-800 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Enter your password"
          />
          {errors.password && (
            <span className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </span>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="cursor-pointer mt-3 bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-red-600 hover:to-orange-600 transform transition-all duration-300 shadow-lg hover:shadow-red-500/25 w-full"
        >
          {isSubmitting ? "Registering..." : "Register"}
        </button>

        {/* Login Link */}
        <p className="text-center text-gray-400 text-sm">
          Already have an account?{" "}
          <Link
            to="/auth/login"
            className="text-red-500 hover:underline flex items-center justify-center gap-1"
          >
            <LogIn className="w-4 h-4" /> Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
