import React from "react";
import Image from "next/image";
import SocialLinks from "@/components/shared/SocialLinks";
import { getAboutPageData } from "@/lib/markdownUtils";

// Translation constants
const TRANSLATIONS = {
  en: {
    name: "MARI MIAVKA",
    tagline:
      "A spirit of rebellion and endless curiosity drives me to cast light into the shadows.",
    storyText:
      "My small story will be here, but for now you can look at my instagram to have an idea at least",
    instagramLabels: {
      lifestyle: "MY LIFESTYLE",
      art: "MY ART",
      sportDesigns: "SPORT CLOTH DESIGNS",
      sportPhotography: "SPORT PHOTOGRAPHY/ VIDEOGRAPHY",
      ukrainianArt: "Українською про мистецтво",
    },
  },
  ua: {
    name: "МАРІ МЯВКА",
    tagline:
      "Дух бунту та нескінченна цікавість змушують мене проливати світло в тіні.",
    storyText:
      "Моя невелика історія буде тут, але поки що можете подивитися мій інстаграм, щоб хоча б мати уявлення",
    instagramLabels: {
      lifestyle: "МІЙ СТИЛЬ ЖИТТЯ",
      art: "МОЄ МИСТЕЦТВО",
      sportDesigns: "ДИЗАЙН СПОРТИВНОГО ОДЯГУ",
      sportPhotography: "СПОРТИВНА ФОТОГРАФІЯ/ ВІДЕОЗЙОМКА",
      ukrainianArt: "Українською про мистецтво",
    },
  },
};

const Page = async ({ params }: { params: { locale: string } }) => {
  const { locale } = params;
  console.log("About page locale:", locale); // Debug log

  // Handle different locale formats
  const normalizedLocale = locale === "uk" ? "ua" : locale;
  const translations =
    TRANSLATIONS[normalizedLocale as keyof typeof TRANSLATIONS] ||
    TRANSLATIONS.en;

  // Get about page content from markdown
  const aboutData = await getAboutPageData(normalizedLocale);

  const imageIndexes = Array.from({ length: 6 }, (_, index) => index);

  return (
    <>
      <section className="hero-bg flex h-80 w-full flex-wrap justify-between px-20 pr-10 pt-5">
        <div className="flex">
          <Image
            src={`/assets/img/avatar.jpg`}
            alt="hero"
            width={290}
            height={15}
            className="mx-10 hidden rounded-lg md:block"
          />
          <div className="relative mt-7 xl:ml-5">
            <p className="mb-5 font-namu text-4xl font-extrabold text-my-color-light sm:text-6xl">
              {translations.name}
            </p>
            <SocialLinks locale={normalizedLocale} />
            <p className="not-white fw-300 font-namu text-lg">
              {translations.tagline}
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto p-4 md:mt-20">
        <div className="grid grid-cols-3 gap-4 md:grid-cols-6">
          {imageIndexes.map((index) => (
            <div key={index} className="relative h-32 w-full md:h-48">
              <Image
                src={`/assets/img/about/${index + 1}.png`}
                alt={`Placeholder ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
      {/* About me section */}
      <section className="container mx-auto my-10 px-4">
        <div className="rounded-2xl border border-neutral-200 bg-white/80 p-6 shadow-lg md:p-10">
          <div
            className="about-content"
            dangerouslySetInnerHTML={{ __html: aboutData.contentHtml }}
          />
        </div>
      </section>
    </>
  );
};

export default Page;
