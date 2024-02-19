"use client";

import React, { useEffect, useState } from "react";
import "../styles.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { NewsCard } from "./newsCard";

const NewsSlider = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slides: {
      perView: getSlidesPerView(),
      spacing: 24,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        instanceRef.current?.update();
      };

      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [instanceRef]);

  function getSlidesPerView() {
    if (window.innerWidth < 744) {
      return 1;
    } else if (window.innerWidth < 1280) {
      return 2;
    } else {
      return 3;
    }
  }

  return (
    <section className="max-w-[1536px] mx-auto py-[50px] px-4 md:px-[78px] lg:px-[120px]">
      <div
        className="navigation-wrapper xl:w-[1200px] lg:w-[1040px] md:w-[588px] w-[328px] 
       min-[1536px]:w-[1296px] min-[1024px]:w-[868px] min-[944px]:w-[788px]
      min-[844px]:w-[688px] min-[660px]:w-[628px] min-[560px]:w-[528px] min-[460px]:w-[428px]"
      >
        <div className="flex justify-between">
          <h2 className="title pb-6">Новини</h2>{" "}
          {loaded && instanceRef.current && (
            <div className="flex gap-4">
              <Arrow
                left
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
              />

              <Arrow
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                }
              />
            </div>
          )}
        </div>

        <div
          ref={sliderRef}
          className="keen-slider h-[370px] md:h-[438px] lg:h-[386px]"
        >
          <div className="keen-slider__slide">
            <NewsCard
              title="Загальні збори вкладників"
              text="15 квітня 2023 року проведено загальні збори вкладників. Розлянуто підсумки роботи за рік, затверджені плани роботи на наступний. Обрано нового голову кредитного комітету."
              route="/about-us"
              foto="/Rectangle-21.webp"
            />
          </div>
          <div className="keen-slider__slide">
            <NewsCard
              title="Отримано ліцензію від НБУ"
              text="15 лютого 2023 року отримано ліцензію на право проведення фінансових операцій з населенням. маємо можливість брати депозити і надавати кредити громадянам України."
              route="/about-us"
              foto="/Rectangle-21-(1).webp"
            />
          </div>
          <div className="keen-slider__slide">
            <NewsCard
              title="Ми переїхали в нове приміщення"
              text="15 лютого 2022 року спілка придбала за свої кошти нове приміщення по вул.Франка 1 і зробила там ремонт. Маємо можливість обслуговувати членів за новою адресою."
              route="/about-us"
              foto="/Rectangle-21-(2).webp"
            />
          </div>
          <div className="keen-slider__slide number-slide4">4</div>
          <div className="keen-slider__slide number-slide5">5</div>
          <div className="keen-slider__slide number-slide6">6</div>
        </div>
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            );
          })}
        </div>
      )}
    </section>
  );
};

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabled = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}

export default NewsSlider;
