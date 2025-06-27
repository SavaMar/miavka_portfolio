"use client";
import React from "react";
import HeroSection from "@/components/shared/HeroSection";

export default function TheEveryDayPage() {
  return (
    <section>
      <HeroSection
        title="The Every Day"
        description="Story about routines in our life"
      />
      <div className="mx-auto max-w-4xl px-4 py-8">
        <div className="relative mb-8 overflow-hidden rounded-lg pt-[56.25%]">
          <iframe
            src="https://www.youtube.com/embed/H-s-j1d7P2k?si=D2PFgxZkUhYzymmA"
            title="The Every Day"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute left-0 top-0 size-full border-0"
          />
        </div>
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-slate-300">
            Project about routines in our life
          </p>
        </div>
      </div>
    </section>
  );
}
