"use client";

import { useState } from "react";
import * as Yup from "yup";
import { CalcResult } from "./calcResult";
import { depositAccumPersent, depositTermPersent } from "@/const/depositData";
import { ModalWindow } from "../modalWindow";

const schema = Yup.object().shape({
  targetSum: Yup.number()
    .min(1000, "Не менше 1000грн.")
    .max(50000, "Не більше 50000грн.")
    .required("Обов'язкове поле"),
  duration: Yup.number().required("Обов'язкове поле"),
});

export const SectionDepositCalc = () => {
  const [formData, setFormData] = useState({
    deposits: "Строковий",
    paymentTime: "Щомісячно",
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

  const handleDepositChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
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
      console.log(errors.targetSum, errors.duration);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsModalOpen(true);
    // console.log(formData);
  };

  return (
    <section className="pt-[82px] md:pt-[50px] lg:pt-[82px] pb-[50px] bg-netural_100">
      <div className="div-container">
        <h2 className="title">Депозитний калькулятор:</h2>
        <div className="mt-6 bg-netural_200 rounded-md px-4 md:px-10 py-10 md:max-w-[844px] lg:max-w-full">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col lg:grid lg:grid-cols-2 gap-4"
          >
            <div className="flex flex-col gap-1 md:gap-[34px]">
              <div className="flex flex-col gap-2">
                <label className="text-netural_400 text-base">
                  Назва вкладу
                </label>
                <select
                  className="rounded-md px-[10px] py-[14px] ring-2 ring-transparent hover:ring-primary_300 focus:ring-primary_300 
        transition-all duration-300 w-full max-w-[552px] md:max-w-full lg:max-w-[552px] outline-none 
         focus-within:ring-primary_300 active:ring-primary_300 text-primary_700"
                  name="deposits"
                  value={formData.deposits}
                  onChange={handleChange}
                  required
                >
                  <option value="Строковий">Строковий</option>
                  <option value="Накопичувальний">Накопичувальний</option>
                  <option value="На вимогу">На вимогу</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-netural_400 text-base">
                  Сума вкладу
                </label>
                <div className="relative">
                  <input
                    className={`input-calc ${
                      errors.targetSum ? "!ring-red-500" : ""
                    }`}
                    type="text"
                    name="depositSum"
                    value={formData.targetSum}
                    onChange={handleDepositChange}
                    onBlur={validate}
                    required
                  />
                  {errors.targetSum && (
                    <p className="absolute left-2.5 bottom-0 text-red-500 text-xs  bg-white  rounded-md">
                      {errors.targetSum}
                    </p>
                  )}{" "}
                  <input
                    className="absolute left-0 -bottom-1 w-full max-w-[552px] md:max-w-full lg:max-w-[552px] -mt-3.5 appearance-none rounded-md h-1"
                    style={{
                      background: `linear-gradient(to right, #79C2E1 ${
                        formData.targetSum / 500
                      }%, #808080 ${formData.targetSum / 500}%)`,
                    }}
                    type="range"
                    name="targetSum"
                    value={formData.targetSum}
                    onChange={handleDepositChange}
                    onBlur={validate}
                    step={500}
                    min={1000}
                    max={50000}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-netural_400 text-base">
                  Строк вкладу (к-сть місяців)
                </label>
                <div className="relative">
                  <select
                    className="rounded-md px-[10px] py-[14px] ring-2 ring-transparent hover:ring-primary_300 focus:ring-primary_300 
        transition-all duration-300 w-full max-w-[552px] md:max-w-full lg:max-w-[552px] outline-none 
         focus-within:ring-primary_300 active:ring-primary_300 text-primary_700"
                    name="duration"
                    value={formData.duration}
                    onChange={handleDepositChange}
                    required
                  >
                    {formData.deposits === "Строковий" &&
                      depositTermPersent.map((item) => (
                        <option key={item.term} value={item.term}>
                          {item.term}
                        </option>
                      ))}
                    {formData.deposits === "На вимогу" &&
                      depositTermPersent.map((item) => (
                        <option key={item.term} value={item.term}>
                          {item.term}
                        </option>
                      ))}
                    {formData.deposits === "Накопичувальний" &&
                      depositAccumPersent.map((item) => (
                        <option key={item.term} value={item.term}>
                          {item.term}
                        </option>
                      ))}
                  </select>
                  {errors.duration && (
                    <p className="absolute left-2.5 bottom-0 text-red-500 text-xs z-10 bg-white  rounded-xl max-w-[100px]">
                      {errors.duration}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-netural_400 text-base">
                  Виплата відсотків
                </label>
                <select
                  className="rounded-md px-[10px] py-[14px] ring-2 ring-transparent hover:ring-primary_300 focus:ring-primary_300 
        transition-all duration-300 w-full max-w-[552px] md:max-w-full lg:max-w-[552px] outline-none 
         focus-within:ring-primary_300 active:ring-primary_300 text-primary_700"
                  name="paymentTime"
                  value={formData.paymentTime}
                  onChange={handleChange}
                  required
                >
                  <option value="Щомісячно">Щомісячно</option>
                  <option value="В кінці терміну">В кінці терміну</option>
                </select>
              </div>
            </div>

            <CalcResult formData={formData} />
          </form>
        </div>
      </div>
      {isModalOpen && (
        <ModalWindow
          formData={formData}
          title="Заявка на депозит"
          textButton="Надіслати заявку"
          style="yes"
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </section>
  );
};
