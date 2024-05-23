const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds,
GatewayIntentBits.GuildMessages,
GatewayIntentBits.MessageContent] });

const token = 'input YOUR TOKEN HERE';

client.once('ready', () => {
  console.log('Ready!');
});

client.on('messageCreate', (message) => {
  if (message.content === '!ping')
  {
    message.channel.send('Pong!');
  }
});

client.login(token);
