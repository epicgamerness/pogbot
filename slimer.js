require('dotenv').config()

const discord = require('discord.js');
const client = new discord.Client();
const fs = require('fs')
const { connectBdlBot } = require('bdl.js');
const DBL = require('dblapi.js');

client.commands = new discord.Collection();
client.aliases = new discord.Collection();

const dbl = new DBL(process.env.DBLTOKEN, client)
dbl.on('posted', () => {
  	console.log('Server count posted!');
});

// Command Handler

require('./utils/cmdHandler.js')(client);

// Event Handler

require("./utils/eventHandler.js")(client)

client.login(process.env.TOKEN);