const express = require('express');
const bodyParser = require('body-parser');
const TelegramBot = require('node-telegram-bot-api');

const app = express();

const token = '6363574106:AAH2dDNg5XYEzuFQOCTSEAYY_6piZHMPHcY';
const bot = new TelegramBot(token);

// Middleware untuk menghandle pesan dari Telegram
app.use(bodyParser.json());

// Endpoint untuk menerima pesan dari Telegram
app.post(`/webhook/${token}`, (req, res) => {
  const { message } = req.body;

  if (message) {
    const chatId = message.chat.id;
    const receivedMessage = message.text;
  }

  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

bot.setWebHook(`https://api.telegram.org/bot/webhook/${token}`);
