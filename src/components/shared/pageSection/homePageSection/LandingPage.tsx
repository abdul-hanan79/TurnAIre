"use client";
import * as React from "react";
// import { StatusIcon } from "./components/StatusIcon";
// import { LanguageSelector } from "./components/LanguageSelector";
import { LanguageSelectorProps, StatusIconProps } from "@/types";
import { CTAButton } from "@/components/template/button/Button";
import Image from "next/image";
import { ICONS, IMAGES } from "../../../../../public";
import { useRouter } from "next/navigation";

export const StatusIcon: React.FC<StatusIconProps> = ({
  src,
  alt,
  width,
  className,
}) => (
  <Image
    height={200}
    width={200}
    loading="lazy"
    src={src}
    alt={alt}
    className={`object-contain shrink-0 ${className}`}
    style={{ width }}
  />
);

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  language,
}) => (
  <div className="flex gap-1.5 mt-6 text-base font-extrabold text-primary whitespace-nowrap">
    <div className="grow">{language}</div>

    {/* <Image
      height={200}
      width={200}
      loading="lazy"
      src={iconSrc}
      alt="Language selector"
      className="object-contain shrink-0 w-5 aspect-square"
    /> */}
  </div>
);
export const LandingPage: React.FC = () => {
  const router=useRouter()
  const goToDashboard=()=>{
router.push("/dashboard")
  }
  return (
    <main className="flex overflow-hidden flex-col mx-auto w-full bg-white min-h-[100vh] ">
      <section className="flex relative flex-col pt-4 w-full">
        <Image
          height={200}
          width={200}
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/501857dd4f1c40f4a47a652b4b27bf3b/40c47c0a73b27916daf7b1b3d7b3bb228bda75985e5a11983662d2c18101e11e?apiKey=501857dd4f1c40f4a47a652b4b27bf3b&"
          alt="Travel background"
          className="object-cover absolute inset-0 size-full"
        />
        <header className="flex relative gap-10 self-center w-full">
          <div className="flex flex-col grow shrink-0 basis-0 w-fit">
            <div className="flex flex-col self-end w-[78px]">
              <LanguageSelector language="English" />
            </div>
            <div className="mx-auto">
              <Image
                loading="lazy"
                height={300}
                width={300}
                src={IMAGES.logo}
                alt="logo"
              />
            </div>
            {/* <h1 className="self-start mt-44 text-6xl font-semibold text-center text-white">
              Travel<span className="text-green-800">in</span>
            </h1> */}
          </div>
        </header>
        <section className="flex relative flex-col  px-10 py-16 mt-80 text-center rounded-3xl shadow-sm bg-neutral-100 ">
          <h2 className="text-4xl font-bold text-cyan-700">
            Ready to explore beyond boundaries?
          </h2>
          <CTAButton className="mt-11" handleClick={goToDashboard}>Your Journey Starts Here</CTAButton>
          <Image
            loading="lazy"
            height={200}
            width={200}
            src={ICONS.AIROPLAN}
            alt="Decorative element"
            className="object-contain z-10 self-end -mt-9 mr-11 aspect-[1.08] w-[26px]"
          />
        </section>
      </section>
    </main>
  );
};
