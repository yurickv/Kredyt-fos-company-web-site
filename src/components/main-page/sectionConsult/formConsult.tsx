"use client";
import { useState } from "react";

export const ConsultForm = () => {
  const [formData, setFormData] = useState({
    userName: "",
    phoneNumber: "",
    userMessage: "",
  });

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
      const messageData = {
        userName: formData.userName,
        phoneNumber: formData.phoneNumber,
        userMessage: formData.userMessage,
      };

      const response = await fetch("/api/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messageData }),
      });

      if (response.ok) {
        // Handle success (e.g., show a success message)
        console.log("Message sent successfully");
        setFormData({
          userName: "",
          phoneNumber: "",
          userMessage: "",
        });
      } else {
        // Handle errors (e.g., show an error message)
        console.error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
      <input
        className="rounded-md px-[10px] py-[14px]"
        type="text"
        name="userName"
        value={formData.userName}
        onChange={handleChange}
        placeholder="Ваше ім'я*"
        required
      />
      <input
        className="rounded-md px-[10px] py-[14px]"
        type="tel"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        placeholder="+380*"
        required
      />
      <textarea
        className="rounded-md px-[10px] py-[14px] hidden lg:block"
        name="userMessage"
        value={formData.userMessage}
        onChange={handleChange}
        placeholder="Коментар"
        rows={4}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
