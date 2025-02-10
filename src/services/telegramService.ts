const BOT_TOKEN = import.meta.env.VITE_BOT_TOKEN;
const CHAT_ID = import.meta.env.VITE_CHAT_ID;
const TELEGRAM_API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

export const sendTelegramMessage = async (name: string, email: string, phone: string): Promise<void> => {
  if (!BOT_TOKEN || !CHAT_ID) {
    throw new Error("Missing bot token or chat ID.");
  }

  const message = `📩 Nová registrace\n\n👤 Jméno: ${name}\n✉️ Email: ${email}\n📞 Telefon: ${phone}`;

  const response = await fetch(TELEGRAM_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: CHAT_ID, text: message }),
  });

  if (!response.ok) {
    throw new Error("Ошибка при отправке данных.");
  }
};
