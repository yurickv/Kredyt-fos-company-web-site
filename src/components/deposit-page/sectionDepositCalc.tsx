"use client";

import { useState } from "react";
import * as Yup from "yup";
import { CalcResult } from "./calcResult";
import { depositTermPersent } from "@/const/depositData";

const schema = Yup.object().shape({
  depositSum: Yup.number()
    .min(1000, "Не менше 1000грн.")
    .max(50000, "Не більше 50000грн.")
    .required("Обов'язкове поле"),
});

export const SectionDepositCalc = () => {
  const [formData, setFormData] = useState({
    deposits: "Строковий",
    paymentTime: "Щомісячно",
    depositSum: 10000,
    depositDuration: 12,
  });
  const [errors, setErrors] = useState<{
    depositSum?: number;
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

  const handleScaleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    // Ensure that value is a number
    const parsedValue = parseFloat(value);
    if (!isNaN(parsedValue)) {
      setFormData((prevState) => ({
        ...prevState,
        [name]: parsedValue,
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
      // console.log(errors.depositSum);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <section className="pt-[82px] md:pt-[50px] lg:pt-[82px] pb-[50px] bg-netural_100">
      <div className="div-container ">
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
                  className="input-calc"
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
                <input
                  className="input-calc"
                  type="number"
                  name="depositSum"
                  value={formData.depositSum}
                  onChange={handleScaleChange}
                  min={1000}
                  max={50000}
                  onBlur={validate}
                  required
                />
                <input
                  className="w-full max-w-[552px] md:max-w-full lg:max-w-[552px] -mt-3"
                  type="range"
                  name="depositSum"
                  value={formData.depositSum}
                  onChange={handleScaleChange}
                  onBlur={validate}
                  step={500}
                  min={1000}
                  max={50000}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-netural_400 text-base">
                  Строк вкладу (к-сть місяців)
                </label>
                <select
                  className="input-calc"
                  name="depositDuration"
                  value={formData.depositDuration}
                  onChange={handleScaleChange}
                  required
                >
                  {depositTermPersent.map((item) => (
                    <option
                      key={item.term}
                      value={item.term}
                      disabled={formData.deposits === "Накопичувальний"}
                    >
                      {item.term}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-netural_400 text-base">
                  Виплата відсотків
                </label>
                <select
                  className="input-calc"
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
    </section>
  );
};
