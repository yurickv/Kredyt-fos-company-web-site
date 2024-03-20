"use client";
import { useState } from "react";
import * as Yup from "yup";
import { CalcCreditResult } from "./calcResult";
import { SuccessIcon } from "../icons/depositPage/successIcon";
import { FailureIcon } from "../icons/depositPage/failureIcon";
import { creditTypesPersent } from "@/const/creditData";
import { ModalWindow } from "../modalWindow";

const schema = Yup.object().shape({
  targetSum: Yup.number()
    .min(1000, "Не менше 1000грн.")
    .max(200000, "Не більше 200000грн.")
    .required("Обов'язкове поле"),
  creditDuration: Yup.number()
    .min(1, "Не менше 1міс.")
    .max(24, "Не більше 24міс.")
    .required("Обов'язкове поле"),
});

export const SectionCreditCalc = () => {
  const [formData, setFormData] = useState({
    credits: "Споживчий",
    dateInput: new Date().toISOString().split("T")[0],
    targetSum: 10000,
    duration: 12,
  });
  const [errors, setErrors] = useState<{
    targetSum?: number;
    duration?: number;
  }>({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCreditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const parsedValue = parseFloat(value);
    if (!isNaN(parsedValue)) {
      setFormData((prevState) => ({
        ...prevState,
        [name]: parsedValue,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: 0,
      }));
    }
  };

  const validate = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      await schema.validate(formData, { abortEarly: false });
      setErrors({});
    } catch (err) {
      const validationErrors: Record<string, string> = {};
      (err as Yup.ValidationError).inner.forEach((error) => {
        if (error.path) {
          validationErrors[error.path] = error.message;
        }
      });
      setErrors(validationErrors);
      // console.log(errors.targetSum, errors.duration);
    }
  };

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setIsModalOpen(true);
    // console.log(formData);
  };

  return (
    <section className="pt-[82px] md:pt-[50px] lg:pt-[82px] pb-[50px] bg-netural_100">
      <div className="div-container">
        <h2 className="title">Кредитний калькулятор:</h2>
        <div className="mt-6 bg-netural_200 rounded-md px-4 md:px-10 py-10 md:max-w-[844px] lg:max-w-full">
          <form
            // onSubmit={handleSubmit}
            className="flex flex-col lg:grid lg:grid-cols-2 gap-4"
          >
            <div className="flex flex-col gap-1 md:gap-[34px]">
              <div className="flex flex-col gap-2">
                <label className="text-netural_400 text-base">
                  Підвид кредиту
                </label>
                <select
                  className="rounded-md px-[10px] py-[14px] ring-2 ring-transparent hover:ring-primary_300 focus:ring-primary_300 
        transition-all duration-300 w-full max-w-[552px] md:max-w-full lg:max-w-[552px] outline-none 
         focus-within:ring-primary_300 active:ring-primary_300 text-primary_700"
                  name="credits"
                  value={formData.credits}
                  onChange={handleChange}
                  required
                >
                  {creditTypesPersent.map((item) => (
                    <option
                      key={Object.keys(item)[0]}
                      value={Object.keys(item)[0]}
                    >
                      {Object.keys(item)[0]}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-netural_400 text-base">
                  Сума кредиту
                </label>
                <div className="relative">
                  <input
                    className={`input-calc ${
                      errors.targetSum ? "!ring-red-500" : ""
                    }`}
                    type="text"
                    name="targetSum"
                    value={formData.targetSum}
                    onChange={handleCreditChange}
                    min={1000}
                    max={200000}
                    onBlur={validate}
                    required
                  />{" "}
                  {errors.targetSum && (
                    <p className="absolute left-2.5 bottom-0 text-red-500 text-xs  bg-white  rounded-md">
                      {errors.targetSum}
                    </p>
                  )}{" "}
                  <input
                    className="absolute left-0 -bottom-1 w-full max-w-[552px] md:max-w-full lg:max-w-[552px] -mt-3.5 appearance-none rounded-md h-1"
                    // className="appearance-none w-full h-2 rounded-md bg-gray-200 outline-none"
                    style={{
                      background: `linear-gradient(to right, #79C2E1 ${
                        formData.targetSum / 2000
                      }%, #808080 ${formData.targetSum / 2000}%)`,
                    }}
                    type="range"
                    name="targetSum"
                    value={formData.targetSum}
                    onChange={handleCreditChange}
                    step={1000}
                    min={1000}
                    max={200000}
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 w-full max-w-[552px] md:max-w-full lg:max-w-[552px]">
                <div className="flex flex-col gap-2 grow">
                  <label className="text-netural_400 text-base">
                    Строк кредиту (к-сть місяців)
                  </label>
                  <div className="relative">
                    <input
                      className={`input-calc ${
                        errors.duration ? "!ring-red-500" : ""
                      }`}
                      type="text"
                      name="duration"
                      value={formData.duration}
                      onChange={handleCreditChange}
                      min={1}
                      max={24}
                      onBlur={validate}
                      required
                    />
                    {errors.duration && (
                      <p className="absolute left-2.5 bottom-0 text-red-500 text-xs  bg-white  rounded-md">
                        {errors.duration}
                      </p>
                    )}{" "}
                    <input
                      className="absolute left-0 -bottom-1 w-full max-w-[552px] md:max-w-full lg:max-w-[552px] -mt-3.5 appearance-none rounded-md h-1"
                      style={{
                        background: `linear-gradient(to right, #79C2E1 ${
                          formData.duration / 0.25
                        }%, #808080 ${formData.duration / 0.25}%)`,
                      }}
                      type="range"
                      name="duration"
                      value={formData.duration}
                      onChange={handleCreditChange}
                      min={1}
                      max={24}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2 grow">
                  <label className="text-netural_400 text-base">
                    Дата підписання договору
                  </label>
                  <input
                    className="rounded-md px-[10px] pr-[20px] py-[14px] ring-2 ring-transparent hover:ring-primary_300 focus:ring-primary_300 
        transition-all duration-300 w-full max-w-[552px] md:max-w-full lg:max-w-[552px] outline-none 
         focus-within:ring-primary_300 active:ring-primary_300 text-primary_700"
                    type="date"
                    name="dateInput"
                    value={formData.dateInput}
                    onChange={handleChange}
                    onBlur={validate}
                    required
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4 w-full max-w-[552px]">
                <div className="flex gap-2 items-center">
                  <SuccessIcon />
                  <span className="text-[18px] text-primary_700">Ануїтет</span>
                </div>
                <div className="flex gap-2 items-center">
                  <FailureIcon />
                  <span className="text-[18px] text-primary_700">Знижка</span>
                </div>
              </div>
            </div>
            <div className="bg-netural_100 rounded-md px-4 md:px-6 py-6">
              <CalcCreditResult formData={formData} />
              <button
                type="submit"
                onClick={handleSubmit}
                className="text-netural_100 text-lg font-bold leading-4 tracking-wide relative overflow-hidden 
      bg-gradient_1 rounded-md px-[34px] py-5 text-mainTitleBlack text-center block w-full mt-[34px] md:mt-[17px]"
              >
                Надіслати заявку
                <span
                  className="absolute inset-0 flex items-center justify-center text-lg font-bold leading-4 tracking-wide text-netural_100
      bg-gradient_2 opacity-0 hover:opacity-100 transition-opacity duration-300 z-10 focus:opacity-100"
                >
                  Надіслати заявку
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
      {isModalOpen && (
        <ModalWindow
          formData={formData}
          title="Заявка на кредит"
          textButton="Надіслати заявку"
          style="yes"
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </section>
  );
};
