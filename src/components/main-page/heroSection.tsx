"use client";
import * as React from "react";
import "./styles.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { HeroText } from "./heroText";
import Image from "next/image";
import profileCredit from "../../../public/Main-screen-1.webp";
import profileDeposit from "../../../public/Main-screen1.webp";

export const HeroSlider = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <section>
      <div
        ref={sliderRef}
        className="keen-slider w-[743px] md:w-[1279px] lg:w-[1440px] h-[548px] md:h-[448px] relative"
      >
        <div className="keen-slider__slide w-full h-full flex flex-col justify-center items-center">
          <Image
            alt="Kredyt FOS service foto"
            src={profileCredit}
            placeholder="blur"
            fill
            priority
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
          <HeroText
            title="Кредити з гнучкими умовами"
            text="Кращі пропозиції для вас"
            textButton="Дізнатитсь більше"
            route="/credit"
          />
        </div>
        <div className="keen-slider__slide w-full  h-full flex flex-col justify-center items-center">
          <Image
            alt="Kredyt FOS service foto"
            src={profileDeposit}
            placeholder="blur"
            fill
            priority
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
          <HeroText
            title="Депозити нового покоління"
            text="Кращі пропозиції для вас"
            textButton="Дізнатитсь більше"
            route="/deposit"
          />
        </div>
        <div className="keen-slider__slide number-slide3 w-full  h-full">3</div>
        <div className="keen-slider__slide number-slide4 w-full  h-full">4</div>
      </div>
    </section>
  );
};
