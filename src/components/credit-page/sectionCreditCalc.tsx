"use client";
import { useState } from "react";
import * as Yup from "yup";
import { CalcCreditResult } from "./calcResult";
import { SuccessIcon } from "../icons/depositPage/successIcon";
import { FailureIcon } from "../icons/depositPage/failureIcon";

const schema = Yup.object().shape({
  creditSum: Yup.number()
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
    dateInput: "",
    creditSum: 10000,
    creditDuration: 12,
  });
  const [errors, setErrors] = useState<{
    creditSum?: number;
    creditDuration?: number;
  }>({});

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
      // console.log(errors.creditSum, errors.creditDuration);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <section className="pt-[82px] md:pt-[50px] lg:pt-[82px] pb-[50px] bg-netural_100">
      <div className="div-container">
        <h2 className="title">Кредитний калькулятор:</h2>
        <div className="mt-6 bg-netural_200 rounded-md px-4 md:px-10 py-10 md:max-w-[844px] lg:max-w-full">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col lg:grid lg:grid-cols-2 gap-4"
          >
            <div className="flex flex-col gap-1 md:gap-[34px]">
              <div className="flex flex-col gap-2">
                <label className="text-netural_400 text-base">
                  Підвид кредиту
                </label>
                <select
                  className="input-calc"
                  name="credits"
                  value={formData.credits}
                  onChange={handleChange}
                  required
                >
                  <option value="Споживчий">Споживчий</option>
                  <option value="Під заставу депозиту">
                    Під заставу депозиту
                  </option>
                  <option value="Інноваційний">Інноваційний</option>
                  <option value="Підприємницький">Підприємницький</option>
                  <option value="Для діяльності в селі">
                    Для діяльності в селі
                  </option>
                  <option value="Сільськогосподарський">
                    Сільськогосподарський
                  </option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-netural_400 text-base">
                  Сума кредиту
                </label>
                <div className="relative">
                  <input
                    className={`input-calc ${
                      errors.creditSum ? "!ring-red-500" : ""
                    }`}
                    type="text"
                    name="creditSum"
                    value={formData.creditSum}
                    onChange={handleCreditChange}
                    min={1000}
                    max={200000}
                    onBlur={validate}
                    required
                  />{" "}
                  {errors.creditSum && (
                    <p className="absolute left-2.5 bottom-0 text-red-500 text-xs  bg-white  rounded-md">
                      {errors.creditSum}
                    </p>
                  )}{" "}
                  <input
                    className="absolute left-0 -bottom-1 w-full max-w-[552px] md:max-w-full lg:max-w-[552px] -mt-3.5 appearance-none rounded-md bg-netural_400 h-1"
                    type="range"
                    name="creditSum"
                    value={formData.creditSum}
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
                        errors.creditDuration ? "!ring-red-500" : ""
                      }`}
                      type="text"
                      name="creditDuration"
                      value={formData.creditDuration}
                      onChange={handleCreditChange}
                      min={1}
                      max={24}
                      onBlur={validate}
                      required
                    />
                    {errors.creditDuration && (
                      <p className="absolute left-2.5 bottom-0 text-red-500 text-xs  bg-white  rounded-md">
                        {errors.creditDuration}
                      </p>
                    )}{" "}
                    <input
                      className="absolute left-0 -bottom-1 w-full max-w-[552px] md:max-w-full lg:max-w-[552px] -mt-3.5 appearance-none rounded-md bg-netural_400 h-1"
                      type="range"
                      name="creditDuration"
                      value={formData.creditDuration}
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
                    className="input-calc"
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
              <div className="flex gap-4 w-full max-w-[552px] justify-around">
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

            <CalcCreditResult formData={formData} />
          </form>
        </div>
      </div>
    </section>
  );
};
