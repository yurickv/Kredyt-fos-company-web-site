"use client";
import { useState } from "react";

export const SectionDepositCalc = () => {
  const [formData, setFormData] = useState({
    deposits: "",
    paymentDate: "",
    scaleInput1: "",
    scaleInput2: "",
    dateInput: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleScaleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };
  return (
    <section className="px-4 md:px-[78px] lg:px-[120px] pt-[82px] md:pt-[50px] lg:pt-[82px] pb-[50px] bg-netural_100">
      <h2 className="title">Депозитний калькулятор:</h2>
      <div className="mt-6 bg-netural_200 rounded-md px-4 md:px-10 py-10">
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1 md:gap-[34px]">
            <div className="flex flex-col gap-2">
              <label className="text-netural_400 text-base">Назва вкладу</label>
              <select
                className="rounded-md px-[10px] py-[14px] ring-2 ring-transparent hover:ring-primary_300 focus:ring-primary_300 
        transition-all duration-300 w-full max-w-[360px] outline-none  focus-within:ring-primary_300 active:ring-primary_300 text-primary_700"
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
              <label className="text-netural_400 text-base">Сума вкладу</label>
              <input
                className="rounded-md px-[10px] py-[14px] ring-2 ring-transparent hover:ring-primary_300 focus:ring-primary_300 
        transition-all duration-300 w-full max-w-[360px] outline-none  focus-within:ring-primary_300 active:ring-primary_300 text-primary_700"
                type="number"
                name="scaleInput1"
                value={formData.scaleInput1}
                onChange={handleScaleChange}
                min={200}
                max={20000}
                step={100}
                required
              />
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-netural_400 text-base">
                  Строк вкладу (к-сть місяців)
                </label>
                <input
                  className="rounded-md px-[10px] py-[14px] ring-2 ring-transparent hover:ring-primary_300 focus:ring-primary_300 
        transition-all duration-300 w-full max-w-[360px] outline-none  focus-within:ring-primary_300 active:ring-primary_300 text-primary_700"
                  type="number"
                  name="scaleInput2"
                  value={formData.scaleInput2}
                  onChange={handleScaleChange}
                  min={1}
                  max={12}
                  step={1}
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-netural_400 text-base">
                  Дата підписання договору
                </label>
                <input
                  className="rounded-md px-[10px] py-[14px] ring-2 ring-transparent hover:ring-primary_300 focus:ring-primary_300 
        transition-all duration-300 w-full max-w-[360px] outline-none  focus-within:ring-primary_300 active:ring-primary_300 text-primary_700"
                  type="date"
                  name="dateInput"
                  value={formData.dateInput}
                  onChange={handleChange}
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
        transition-all duration-300 w-full max-w-[360px] outline-none  focus-within:ring-primary_300 active:ring-primary_300 text-primary_700"
                name="paymentDate"
                value={formData.paymentDate}
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

          <div></div>
        </form>
      </div>
    </section>
  );
};
