"use client";

import React from "react";
import ContactForm from "@/components/ContactForm";
import { useTranslations } from "next-intl";
import { Mail, MessageCircle, Heart } from "lucide-react";
import HeroSection from "@/components/shared/HeroSection";

const ContactPage = () => {
  const t = useTranslations("contact");

  return (
    <div className="min-h-screen bg-gradient-to-br ">
      {/* Hero Section */}
      <HeroSection title={t("title")} description="" />

      {/* Content Section */}
      <div className="mx-auto mt-10 max-w-6xl bg-white px-4 py-8 sm:px-6 sm:py-12 md:px-20">
        {/* Welcome Message */}
        <div className="mb-8 text-center sm:mb-12">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">
              {t("welcome.title")}
            </h2>
          </div>
        </div>

        {/* Contact Options */}
        <div className="mb-8 grid gap-6 sm:mb-12 sm:grid-cols-2 lg:grid-cols-3">
          {/* Email */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">
            <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-blue-100">
              <Mail className="size-6 text-blue-600" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              {t("options.email.title")}
            </h3>
            <p className="text-gray-600">{t("options.email.description")}</p>
          </div>

          {/* Chat */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">
            <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-green-100">
              <MessageCircle className="size-6 text-green-600" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              {t("options.chat.title")}
            </h3>
            <p className="text-gray-600">{t("options.chat.description")}</p>
          </div>

          {/* Connection */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg sm:col-span-2 lg:col-span-1">
            <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-purple-100">
              <Heart className="size-6 text-purple-600" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              {t("options.connection.title")}
            </h3>
            <p className="text-gray-600">
              {t("options.connection.description")}
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="rounded-2xl border border-gray-200 bg-white shadow-xl">
          <div className="border-b border-gray-100 p-6 sm:p-8">
            <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
              {t("form.title")}
            </h3>
            <p className="mt-2 text-gray-600">{t("form.subtitle")}</p>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
