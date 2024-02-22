"use client";
import { useState } from "react";

export const ConsultForm = () => {
  const [formData, setFormData] = useState({
    userName: "",
    phoneNumber: "",
    userMessage: "",
  });
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // console.log("Message sent successfully");
        setFormData({
          userName: "",
          phoneNumber: "",
          userMessage: "",
        });
      } else {
        console.error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4  mt-6">
      <input
        className="rounded-md px-[10px] py-[14px] border hover:border-primary_300 transition-colors duration-300 w-full max-w-[350px]"
        type="text"
        name="userName"
        value={formData.userName}
        onChange={handleChange}
        placeholder="Ваше ім'я*"
        required
      />
      <input
        className="rounded-md px-[10px] py-[14px] border-2 hover:border-primary_300 transition-colors duration-300 max-w-[350px]"
        type="tel"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        placeholder="+380*"
        required
      />
      <textarea
        className="rounded-md px-[10px] py-[14px] hidden lg:block border col-span-2
         hover:border-primary_300 transition-colors duration-300"
        name="userMessage"
        value={formData.userMessage}
        onChange={handleChange}
        placeholder="Коментар"
        rows={4}
      />
      <div className="flex flex-col md:flex-row gap-4 justify-between md:items-center col-span-2 mt-[34px]">
        <label className="max-w-[407px] flex gap-4">
          <input
            className="w-6 h-6 hover:border-primary_300 transition-colors duration-300 indeterminate:border-none"
            type="checkbox"
            checked={isCheckboxChecked}
            onChange={handleCheckboxChange}
          />{" "}
          Я погоджуюсь з умовами обробки персональних даних
        </label>
        <button
          type="submit"
          disabled={!isCheckboxChecked}
          className="text-netural_100 text-lg font-extrabold leading-4 relative overflow-hidden
      bg-gradient_1 rounded-md px-[34px] py-5 text-mainTitleBlack text-center block md:min-w-[250px] md:w-[250px] w-full"
        >
          Замовити дзвінок
          <span
            className="absolute inset-0 flex items-center justify-center text-lg font-extrabold leading-4 text-netural_100
      bg-gradient_2 opacity-0 hover:opacity-100 transition-opacity duration-300 z-10 focus:opacity-100"
          >
            Замовити дзвінок
          </span>
        </button>
      </div>
    </form>
  );
};
