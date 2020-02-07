const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'Njc1MzEwMjA1NTEyMTg3OTE0.Xj1w7w.9mNW26d5EsAz9HjnLnnhQlKuAvY';

bot.on('ready', () => {
    console.log('Bot online!')
})

bot.login(token);