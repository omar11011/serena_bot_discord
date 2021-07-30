const { Client } = require('discord.js');
const client = new Client({
  autoReconnect: true,
});

// Atributos
client.commands = [];

// Módulos
client.config = require('../../config.json');
client.package = require('../../package.json');

// Métodos
client.findCommand = require('../functions/findCommand');
client.syncDB = require('../functions/syncDatabases');

// Procesos
client.syncDB();

// votes

// Get the top.gg API token from the config file
const apiToken = require('../../config.json').bot.top_gg;

// Make sure to install this with 'npm install dblapi.js`
const DBL = require('dblapi.js');
// The webhookPort can be whatever you want but make sure you open that port in the firewall settings (for linux for example you can use `sudo ufw allow 8000`)
// The webhookAuth is set by you, make sure you keep it secure and don\'t leak it
const dbl = new DBL(apiToken, {
  webhookPort: 8151,
  webhookAuth: 'omaresgei',
});

// When the webhook is ready log it to the console, this will log `Webhook up and running at http://0.0.0.0:8000/dblwebhook`
dbl.webhook.on('ready', (hook) => {
  console.log(
    `Webhook up and running at http://${hook.hostname}:${hook.port}${hook.path}`
  );
});

// This will just log errors if there are any
dbl.on('error', (e) => {
  console.log(`Oops! ${e}`);
});

// When the webhook receives a vote
dbl.webhook.on('vote', async (vote) => {
  // This will log the whole vote object to the console
  console.log(vote);
  // Get the Discord ID of the user who voted
  const userID = vote.user;
  // If the channel to send messages in exists, we send a message in it with the ID of the user who votes
  console.log(userID);
});

// END OF IMPORTANT PART

client.login(client.config.dev.token);

module.exports = client;
