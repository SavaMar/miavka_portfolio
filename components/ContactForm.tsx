"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useTranslations } from "next-intl";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { ContactFormInputs } from "@/types/contactForm";

const ContactForm: React.FC = () => {
  const t = useTranslations("contact.form");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInputs>();

  const [messageSent, setMessageSent] = useState(false);

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setMessageSent(true);
        reset();
        setTimeout(() => setMessageSent(false), 5000);
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto max-w-xl space-y-6 p-6 sm:p-8"
    >
      {messageSent && (
        <div
          className="mb-4 rounded-lg bg-green-100 p-4 text-sm text-green-700 dark:bg-green-200 dark:text-green-800"
          role="alert"
        >
          <span className="font-medium">{t("success.title")}</span>{" "}
          {t("success.message")}
        </div>
      )}

      {/* Name Field */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-my-color-light"
        >
          {t("fields.name")}
        </label>
        <Input
          id="name"
          type="text"
          {...register("name", { required: t("validation.nameRequired") })}
          className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder={t("fields.namePlaceholder")}
        />
        {errors.name?.message && (
          <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-my-color-light"
        >
          {t("fields.email")}
        </label>
        <Input
          id="email"
          type="email"
          {...register("email", {
            required: t("validation.emailRequired"),
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: t("validation.emailInvalid"),
            },
          })}
          className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder={t("fields.emailPlaceholder")}
        />
        {errors.email?.message && (
          <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-my-color-light"
        >
          {t("fields.message")}
        </label>
        <Textarea
          id="message"
          {...register("message", {
            required: t("validation.messageRequired"),
          })}
          className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder={t("fields.messagePlaceholder")}
          rows={5}
        />
        {errors.message?.message && (
          <p className="mt-2 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className={`w-full rounded-md px-4 py-3 text-white transition-all duration-200 ${
          isSubmitting
            ? "bg-gray-500"
            : "bg-my-color-light hover:bg-my-color-dark hover:shadow-lg"
        } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
      >
        {isSubmitting ? t("button.sending") : t("button.send")}
      </Button>
    </form>
  );
};

export default ContactForm;
