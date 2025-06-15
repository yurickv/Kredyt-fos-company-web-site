import axios, { AxiosResponse } from "axios";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const {
    userName,
    phoneNumber,
    userMessage,
    titleMessage,
    credits,
    deposits,
    duration,
    targetSum,
    dateInput,
  } = (await req.json()) as {
    userName: string;
    phoneNumber: string;
    userMessage: string;
    titleMessage: string;
    credits: string;
    deposits: string;
    duration: number;
    targetSum: number;
    dateInput: string;
  };

  if (!userName || !phoneNumber) {
    return NextResponse.json(
      { message: "All fields are required" },
      { status: 400 }
    );
  }

  const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.BOT_CHAT_ID;

  let message = "";
  if (credits) {
    message = `${titleMessage}
Ім'я: ${userName}
Номер телефону: ${phoneNumber}
Повідомлення: ${userMessage || "N/A"}
Вид кредиту - ${credits}
Термін - ${duration} міс.
Сума - ${targetSum} грн.
Початок договору - ${dateInput}`;
  } else if (deposits) {
    message = `${titleMessage}
Ім'я: ${userName}
Номер телефону: ${phoneNumber}
Повідомлення: ${userMessage || "N/A"}
Вид депозиту - ${deposits}
Термін - ${duration} міс.
Сума - ${targetSum} грн.`;
  } else {
    message = `${titleMessage}
Ім'я: ${userName}
Номер телефону: ${phoneNumber}
Повідомлення: ${userMessage || "N/A"}`;
  }

  try {
    const response: AxiosResponse = await axios.post(
      `https://api.telegram.org/bot${telegramBotToken}/sendMessage`,
      {
        chat_id: chatId,
        text: message,
      }
    );

    if (response.status === 200) {
      return NextResponse.json(
        { message: "Form data sent successfully!" },
        { status: 200 }
      );
    } else {
      throw new Error("Telegram API error: " + response.statusText);
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "An error occurred while sending data" },
      { status: 500 }
    );
  }
};
