 "use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormData, UserSchema } from "@/types"; // Import Zod schema and FormData type
import FormField from "./FormField";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormData>({
    resolver: zodResolver(UserSchema), // Use zodResolver for validation
  });

  const onSubmit = async (data: FormData) => {
    console.log("SUCCESS", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid col-auto space-y-4">
        <h1 className="text-3xl font-bold mb-4 text-purple-600">
          Zod & React-Hook-Form
        </h1>
        {/* Email Field */}
        <FormField
          type="email"
          placeholder="Email"
          name="email"
          register={register}
          error={errors.email}
        />
        {/* GitHub URL Field */}
        <FormField
          type="text"
          placeholder="GitHub URL"
          name="githubUrl"
          register={register}
          error={errors.githubUrl}
        />
        {/* Years of Experience Field */}
        <FormField
          type="number"
          placeholder="Years of Experience (1 - 10)"
          name="yearsOfExperience"
          register={register}
          error={errors.yearsOfExperience}
          valueAsNumber
        />
        {/* Password Field */}
        <FormField
          type="password"
          placeholder="Password"
          name="password"
          register={register}
          error={errors.password}
        />
        {/* Confirm Password Field */}
        <FormField
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          register={register}
          error={errors.confirmPassword}
        />
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:from-blue-500 hover:to-purple-500 focus:ring-4 focus:ring-purple-300 focus:ring-offset-2"
        >
          Submit
        </button>
        <div className="mt-4 text-center text-sm font-serifg text-black hover:text-gray-600">
          Made by Erum Azeemi Qaimkhani
        </div>
      </div>
    </form>
  );
}

export default Form;
