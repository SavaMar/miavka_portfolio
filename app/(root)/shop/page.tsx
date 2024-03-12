import HeroSection from "@/components/HeroSection";
import React from "react";

const page = () => {
  return (
    <section>
      <HeroSection
        imageName="shop"
        backgroundClass=""
        mainTitle="Shop with unique items"
        descriptionText="Posters. Art. T-shirts. Personalization."
      />
      <p>Shop</p>
    </section>
  );
};

export default page;
