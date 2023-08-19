const TelegramBot = require('node-telegram-bot-api');

// Ganti dengan token bot Telegram Anda
const token = '6363574106:AAH2dDNg5XYEzuFQOCTSEAYY_6piZHMPHcY';

// Inisialisasi bot dengan token
const bot = new TelegramBot(token, { polling: true });

// Menangani pesan masuk
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;

  if (messageText === '/waktu') {
    const currentTime = new Date().toLocaleString();
    bot.sendMessage(chatId, `Waktu terkirim: ${currentTime}`);
  }
});

console.log('Bot sedang berjalan...');
