"use client";
import { useState } from "react";
import * as Yup from "yup";
import { CalcCreditResult } from "./calcResult";
import { depositAccumPersent, depositTermPersent } from "@/const/depositData";

const schema = Yup.object().shape({
  depositSum: Yup.number().required("Обов'язкове поле"),
  depositDuration: Yup.number().required("Обов'язкове поле"),
  dateInput: Yup.date()
    .required("Обов'язкове поле")
    .min(new Date(), "Дата має бути в майбутньому або поточна"),
});

export const SectionCreditCalc = () => {
  const [formData, setFormData] = useState({
    deposits: "Строковий",
    paymentTime: "Щомісячно",
    dateInput: "",
    depositSum: 10000,
    depositDuration: 12,
  });
  const [errors, setErrors] = useState<{
    depositSum?: number;
    depositDuration?: number;
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
  const handleDepositSumChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const parsedValue = parseFloat(value);
    if (!isNaN(parsedValue)) {
      setFormData((prevState) => ({
        ...prevState,
        depositSum: parsedValue,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        depositSum: 0,
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
      console.log(errors.depositSum, errors.depositDuration);
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
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1 md:gap-[34px]">
              <div className="flex flex-col gap-2">
                <label className="text-netural_400 text-base">
                  Назва вкладу
                </label>
                <select
                  className="rounded-md px-[10px] py-[14px] ring-2 ring-transparent hover:ring-primary_300 focus:ring-primary_300 
        transition-all duration-300 w-full max-w-[552px] outline-none  focus-within:ring-primary_300 active:ring-primary_300 text-primary_700"
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
                  className="rounded-md px-[10px] py-[14px] ring-2 ring-transparent hover:ring-primary_300 focus:ring-primary_300 
        transition-all duration-300 w-full max-w-[552px] outline-none  focus-within:ring-primary_300 active:ring-primary_300 text-primary_700"
                  type="number"
                  name="depositSum"
                  value={formData.depositSum}
                  onChange={handleScaleChange}
                  min={200}
                  max={20000}
                  onBlur={validate}
                  required
                />
                <input
                  className="w-full max-w-[552px] -mt-3"
                  type="range"
                  name="depositSum"
                  value={formData.depositSum}
                  onChange={handleScaleChange}
                  step={100}
                  min={200}
                  max={20000}
                />
              </div>
              <div className="flex gap-4 w-full max-w-[552px]">
                <div className="flex flex-col gap-2 grow">
                  <label className="text-netural_400 text-base">
                    Строк вкладу (к-сть місяців)
                  </label>
                  <input
                    className="rounded-md px-[10px] py-[14px] ring-2 ring-transparent hover:ring-primary_300 focus:ring-primary_300 
        transition-all duration-300 outline-none  focus-within:ring-primary_300 active:ring-primary_300 text-primary_700"
                    type="number"
                    name="depositDuration"
                    value={formData.depositDuration}
                    onChange={handleScaleChange}
                    min={1}
                    max={12}
                    step={1}
                    onBlur={validate}
                    required
                  />
                  <input
                    className="w-full max-w-[552px] -mt-3"
                    type="range"
                    name="depositDuration"
                    value={formData.depositDuration}
                    onChange={handleScaleChange}
                    min={1}
                    max={12}
                  />
                </div>
                <div className="flex flex-col gap-2 grow">
                  <label className="text-netural_400 text-base">
                    Дата підписання договору
                  </label>
                  <input
                    className="rounded-md px-[10px] py-[14px] ring-2 ring-transparent hover:ring-primary_300 focus:ring-primary_300 
        transition-all duration-300 outline-none  focus-within:ring-primary_300 active:ring-primary_300 text-primary_700"
                    type="date"
                    name="dateInput"
                    value={formData.dateInput}
                    onChange={handleChange}
                    onBlur={validate}
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-netural_400 text-base">
                  Виплата відсотків
                </label>
                <select
                  className="rounded-md px-[10px] py-[14px] ring-2 ring-transparent hover:ring-primary_300 focus:ring-primary_300 
        transition-all duration-300 w-full max-w-[552px] outline-none  focus-within:ring-primary_300 active:ring-primary_300 text-primary_700"
                  name="paymentTime"
                  value={formData.paymentTime}
                  onChange={handleChange}
                  required
                >
                  <option value="Щомісячно">Щомісячно</option>
                  <option value="В кінці терміну">В кінці терміну</option>
                </select>
              </div>
              <div className="col-span-2">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Submit
                </button>
              </div>
            </div>

            <CalcCreditResult formData={formData} />
          </form>
        </div>
      </div>
    </section>
  );
};
