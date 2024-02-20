import axios, { AxiosResponse } from "axios";
import { NextApiRequest, NextApiResponse } from "next";

interface FormData {
  userName: string;
  phoneNumber: string;
  userMessage?: string;
}

export const POST = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.body || !req.body.userName || !req.body.phoneNumber) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const formData: FormData = req.body;

  const telegramBotToken = "YOUR_BOT_TOKEN";
  const chatId = "YOUR_CHAT_ID";

  try {
    const response: AxiosResponse = await axios.post(
      `https://api.telegram.org/bot${telegramBotToken}/sendMessage?chat_id=${chatId}`,
      {
        text: `**Form Submitted:**

        Name: ${formData.userName}
        Phone Number: ${formData.phoneNumber}
        Message: ${formData.userMessage}`,
      }
    );

    if (response.status === 200) {
      return res.status(200).json({ message: "Form data sent successfully!" });
    } else {
      throw new Error("Telegram API error: " + response.statusText);
    }
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "An error occurred while sending data" });
  }
};
