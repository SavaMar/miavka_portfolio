"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "./ui/input"; // Assuming these are correctly imported
import { Button } from "./ui/button"; // Assuming these are correctly imported
import { Textarea } from "./ui/textarea"; // Assuming these are correctly imported
import { ContactFormInputs } from "@/types/contactForm"; // Make sure the path is correct

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInputs>();

  const [messageSent, setMessageSent] = useState(false); // State to handle success message visibility

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
        setMessageSent(true); // Set the success message to be visible
        reset(); // Reset form fields
        setTimeout(() => setMessageSent(false), 5000); // Hide the message after 5 seconds
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
      className="mx-auto max-w-xl space-y-6 p-6"
    >
      {messageSent && (
        <div
          className="mb-4 rounded-lg bg-green-100 p-4 text-sm text-green-700 dark:bg-green-200 dark:text-green-800"
          role="alert"
        >
          <span className="font-medium">Success!</span> Message sent
          successfully.
        </div>
      )}

      {/* Name Field */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-my-color-light"
        >
          Name
        </label>
        <Input
          id="name"
          type="text"
          {...register("name", { required: "Name is required" })}
          className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
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
          Email
        </label>
        <Input
          id="email"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter a valid email address",
            },
          })}
          className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
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
          Message
        </label>
        <Textarea
          id="message"
          {...register("message", { required: "Message is required" })}
          className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
        {errors.message?.message && (
          <p className="mt-2 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className={`w-full rounded-md px-4 py-2 text-white ${
          isSubmitting
            ? "bg-gray-500"
            : "bg-my-color-light hover:bg-my-color-dark"
        } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;
