const TelegramApi = require('node-telegram-bot-api');

const token = '5228838419:AAG_J9fH9x24Jp-L4MSRMyHyt8Kb0WBxa8Y';

const bot = new TelegramApi(token, { polling: true });

bot.on('message', async (msg) => {
  const { text } = msg;
  const chatId = msg.chat.id;
  // await bot.sendMessage(chatId, `ты написал мне ${text}`);
  if (text === '/start') {
    await bot.sendMessage(chatId, 'Добро пожаловать в телеграм бот EasyTripBot!');
  }
  if (text === '/ticket') {
    await bot.sendDocument(chatId, '../5.png');
    await bot.sendMessage(chatId, 'Добро пожаловать в телеграм бот EasyTripBot!');
  }
});
