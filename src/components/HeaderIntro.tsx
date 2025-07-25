import React from "react";
// import Button from "./Button";
import RadialGradient from "./RadialGradient";
import { headerIntroData } from "../assets/lib/data";
import { useSectionInView } from "../assets/lib/hooks";
// import { useActiveSectionContext } from "../context/active-section-context";
import { useLanguage } from "../context/language-context";
import { BsMouse } from "react-icons/bs";
// import { icons } from "react-icons/lib";
import { CiMail } from "react-icons/ci";
import resume from "../assets/cv.pdf";

// import ReactWhatsapp from "react-whatsapp";
import { IoDocumentTextOutline } from "react-icons/io5";

const HeaderIntro: React.FC = () => {
  const { language } = useLanguage();
  const { ref } = useSectionInView("Home", 0.5);
  // const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      className="flex flex-col items-center justify-center h-full gap-10 hero max-lg:h-full max-lg:gap-6"
      ref={ref}
      id="home"
    >
      <RadialGradient scale="scale-y-125" opacity="opacity-30" />

      <img
        src={headerIntroData.profilepicture}
        alt={headerIntroData.profilepicture}
        className="w-64 h-64 rounded-full shadow-2xl drop-shadow-2xl avatar-img "
      />
      <h1>
        {language === "DE"
          ? headerIntroData.title.de
          : headerIntroData.title.en}
        <span className="wave text-7xl">&#128075;&#127997;</span>
      </h1>
      <h2>{headerIntroData.subtitle}</h2>
      <p className="w-1/2 text-[15px] text-center max-lg:hidden">
        {language === "DE"
          ? headerIntroData.description.de
          : headerIntroData.description.en}
      </p>

      <div className="flex items-center justify-center gap-10 mb-12 mr-8 button-container max-lg:flex-col max-lg:items-center">
        <a
          href="mailto:hamadqur447@gmail.com"
          className="px-4 relative z-50 flex items-center gap-2 py-4 rounded-md bg-[#ff6a3d] hover:cursor-pointer text-xl text-white"
        >
          <CiMail className="text-3xl" />
          Contact Me
        </a>
        <a
          href={resume}
          className="px-4 relative z-50 flex items-center gap-2 py-4 rounded-md bg-[#1a2238] text-xl text-white hover:cursor-pointer"
        >
          <IoDocumentTextOutline className="text-3xl" />
          Dowload Resume
        </a>
      </div>
      <div className="flex gap-6 scroll-down-container animate-bounce">
        <BsMouse className="text-[2.6rem]" />
      </div>
    </section>
  );
};

export default HeaderIntro;
