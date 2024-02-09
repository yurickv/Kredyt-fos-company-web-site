import * as React from "react";
import "./styles.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import heroPic360 from "../../../public/woman-showing-coins-360.webp";
import heroPic744 from "../../../public/woman-showing-coins-744.webp";
import heroPic1280 from "../../../public/woman-showing-coins-1440.webp";
import Image from "next/image";
import HeroFotoDepsit from "./heroFoto";
import { HeroText } from "./heroText";

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
    <>
      <div
        ref={sliderRef}
        className="keen-slider w-[743px] md:w-[1279px] lg:w-[1440px] h-[548px] md:h-[448px] relative"
      >
        <div className="keen-slider__slide w-full">
          <HeroFotoDepsit
            mobileFoto="/woman-showing-coins-744.webp"
            desktopFoto="/woman-showing-coins-1440.webp"
          />
          <HeroText
            title="Депозити нового покоління"
            text="Кращі пропозиції для вас"
          />
        </div>
        <div className="keen-slider__slide number-slide2 w-full">2</div>
        <div className="keen-slider__slide number-slide3 w-full">3</div>
        <div className="keen-slider__slide number-slide4 w-full">4</div>
      </div>
    </>
  );
};
