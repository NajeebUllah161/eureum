"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const gold = "#cfa670";

const WaitlistSchema = z.object({
  firstName: z.string().min(2, "Please enter your first name"),
  lastName: z.string().min(2, "Please enter your surname"),
  email: z.string().email("Enter a valid email"),
  phone: z
    .string()
    .min(7, "Phone number looks too short")
    .max(20, "Phone number looks too long")
    .regex(/^\+?[0-9 ()-]+$/, "Use digits and optional +, (), -"),
});
type WaitlistForm = z.infer<typeof WaitlistSchema>;

export default function WaitingListSection() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<WaitlistForm>({
    resolver: zodResolver(WaitlistSchema),
    mode: "onTouched",
  });

  async function onSubmit(values: WaitlistForm) {
    console.log("🚀 ~ onSubmit ~ values:", values)
    // TODO: send to your API/CRM
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <section className="bg-black text-white px-4 py-10 sm:py-14">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-2xl sm:text-4xl font-semibold tracking-wide">
          EXCLUSIVE WAITING LIST
        </h2>
        <p className="mt-3 text-center text-white/70 text-base sm:text-lg">
          Enter your details to get your invite
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto mt-8 grid w-full max-w-xl grid-cols-1 gap-5"
          noValidate
        >
          {/* Name + Surname */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <input
                type="text"
                placeholder="Name"
                aria-label="Name"
                {...register("firstName")}
                className="w-full rounded-2xl bg-neutral-200 px-4 py-3 text-black placeholder:text-neutral-500 focus:outline-none focus:ring-2"
              />
              {errors.firstName && (
                <p className="mt-1 text-sm text-red-400">{errors.firstName.message}</p>
              )}
            </div>

            <div>
              <input
                type="text"
                placeholder="Surname"
                aria-label="Surname"
                {...register("lastName")}
                className="w-full rounded-2xl bg-neutral-200 px-4 py-3 text-black placeholder:text-neutral-500 focus:outline-none focus:ring-2"
              />
              {errors.lastName && (
                <p className="mt-1 text-sm text-red-400">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email Address"
              aria-label="Email Address"
              {...register("email")}
              className="w-full rounded-2xl bg-neutral-200 px-4 py-3 text-black placeholder:text-neutral-500 focus:outline-none focus:ring-2"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <input
              type="tel"
              placeholder="Phone Number with country code"
              aria-label="Phone Number with country code"
              {...register("phone")}
              className="w-full rounded-2xl bg-neutral-200 px-4 py-3 text-black placeholder:text-neutral-500 focus:outline-none focus:ring-2"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-400">{errors.phone.message}</p>
            )}
          </div>

          {/* Submit */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full max-w-[15rem] rounded-2xl px-6 py-3 text-black text-base sm:text-lg
                         transition-opacity disabled:opacity-70"
              style={{ backgroundColor: gold }}
            >
              {isSubmitting ? "Submitting..." : "Join waiting list"}
            </button>
          </div>

          {submitted && (
            <p className="mx-auto mt-1 text-center text-sm" style={{ color: gold }} role="status">
              Thanks! You’re on the list — we’ll be in touch soon.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
