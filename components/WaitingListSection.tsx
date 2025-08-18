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
    formState: { errors },
    reset,
  } = useForm<WaitlistForm>({
    resolver: zodResolver(WaitlistSchema),
    mode: "onTouched",
  });

  async function onSubmit(values: WaitlistForm) {
    const { firstName, lastName, email, phone } = values;

    const subject = encodeURIComponent("Join Waiting List");
    const body = encodeURIComponent(
      `Name: ${firstName}\nSurname: ${lastName}\nEmail: ${email}\nPhone: ${phone}`
    );

    const mailtoLink = `mailto:Info@aureum.social?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;

    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <section className="bg-black text-white px-4 py-10 sm:py-14" id="waiting-list">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-[clamp(1.5rem,3vw,2.25rem)] font-semibold tracking-wide">
          EXCLUSIVE WAITING LIST
        </h2>
        <p
          style={{ fontFamily: "Heiti SC" }}
          className="mt-3 text-center text-[#F3F3F3B2] text-[clamp(1.5rem,2vw,1.125rem)] font-normal"
        >
          Enter your details to get your invite
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto mt-10 grid w-full max-w-xl grid-cols-1 gap-5"
          noValidate
        >
          {/* Name + Surname */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <input
                style={{ fontFamily: "Heiti SC" }}
                type="text"
                placeholder="Name"
                aria-label="Name"
                {...register("firstName")}
                className="w-full rounded-2xl bg-neutral-200 px-4 py-[clamp(0.6rem,1.2vw,0.9rem)] text-black placeholder:text-black text-[clamp(0.9rem,1.2vw,1rem)] focus:outline-none focus:ring-2 font-medium"
              />
              {errors.firstName && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div>
              <input
                style={{ fontFamily: "Heiti SC" }}
                type="text"
                placeholder="Surname"
                aria-label="Surname"
                {...register("lastName")}
                className="w-full rounded-2xl bg-neutral-200 px-4 py-[clamp(0.6rem,1.2vw,0.9rem)] text-black placeholder:text-black text-[clamp(0.9rem,1.2vw,1rem)] focus:outline-none focus:ring-2 font-medium"
              />
              {errors.lastName && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          {/* Email */}
          <div className="mt-3.5">
            <input
              style={{ fontFamily: "Heiti SC" }}
              type="email"
              placeholder="Email Address"
              aria-label="Email Address"
              {...register("email")}
              className="w-full rounded-2xl bg-neutral-200 px-4 py-[clamp(0.6rem,1.2vw,0.9rem)] text-black placeholder:text-black text-[clamp(0.9rem,1.2vw,1rem)] focus:outline-none focus:ring-2 font-medium"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-400">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone */}
          <div className="mt-3.5">
            <input
              style={{ fontFamily: "Heiti SC" }}
              type="tel"
              placeholder="Phone Number with country code"
              aria-label="Phone Number with country code"
              {...register("phone")}
              className="w-full rounded-2xl bg-neutral-200 px-4 py-[clamp(0.6rem,1.2vw,0.9rem)] text-black placeholder:text-black text-[clamp(0.9rem,1.2vw,1rem)] focus:outline-none focus:ring-2 font-medium"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-400">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            style={{ fontFamily: "Heiti SC" }}
            className="mt-6 w-full max-w-[clamp(12rem,20vw,15.5rem)] h-[clamp(2.8rem,4vw,3rem)]
               rounded-2xl bg-[#C39E6F] text-black 
               text-[clamp(0.9rem,1.5vw,1rem)] font-semibold 
               active:scale-[0.98] mx-auto"
          >
            Join waiting list
          </button>

          {submitted && (
            <p
              className="mx-auto mt-1 text-center text-sm"
              style={{ color: gold }}
              role="status"
            >
              Thanks! You’re on the list — we’ll be in touch soon.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
