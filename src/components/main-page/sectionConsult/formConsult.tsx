"use client";
import { useState } from "react";

export const SectionConsultForm = () => {
  const [formData, setFormData] = useState({
    userName: "",
    phoneNumber: "",
    userMessage: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: `Customer: ${formData.userName}\nPhone Number: ${formData.phoneNumber}\nMessage: ${formData.userMessage}`,
        }),
      });

      if (response.ok) {
        console.log("Message sent successfully!");
        // Clear form fields
        setFormData({
          userName: "",
          phoneNumber: "",
          userMessage: "",
        });
      } else {
        console.error("Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="userName"
        value={formData.userName}
        onChange={handleChange}
        placeholder="Your Name"
        required
      />
      <input
        type="tel"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        placeholder="Phone Number"
        required
      />
      <textarea
        name="userMessage"
        value={formData.userMessage}
        onChange={handleChange}
        placeholder="Your Message"
        required
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};
