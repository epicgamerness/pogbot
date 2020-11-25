const Timeout = new Set();
const ms = require('ms');
const discord = require('discord.js');
const functions = require('../utils/functions.js');
const fs = require('fs')

module.exports = async (client, message) => {
  
  if(message.author.bot) return;
  if(!message.guild) return;

  let prefix = process.env.PREFIX
  
	if(message.content.startsWith("<@733635808824655903>")) {
		let embed = new discord.MessageEmbed()
			.setTitle("Slimer.JS")
			.setDescription(
				`Hello! My name is Slimer.JS!\My command prefix is **${prefix}**\`\n\nI am multipurpose bot with features such as:\n● Per User Prefix\n● Admin and User Utility\n● Fun\n● Economy\n● And Much More To Come!\n\nMy invite links are:\n[Support Server](https://discord.gg/xwFDQXa)\n\n[Bot Invite](https://discord.com/oauth2/authorize?client_id=733635808824655903&scope=bot&permissions=2146958847)`
			)
			.setColor(`YELLOW`)
		message.channel.send(embed)
	}

	if(!message.content.startsWith(prefix)) return;

		fs.readdir("./commands")

		if (!message.member) message.member = await message.guild.fetchMember(message);

		const args = message.content.slice(prefix.length).trim().split(/ +/g);
		const cmd = args.shift().toLowerCase();
		
		if (cmd.length === 0) return;

		let command = client.commands.get(cmd);
		
		if (!command) command = client.commands.get(client.aliases.get(cmd));


		if (command) {
			command.run(client, message, args, functions);
			let embed = new discord.MessageEmbed()
			.setAuthor("New Command Triggered!", client.user.displayAvatarURL())
			.setDescription(`Command: ${message.content}\n\nExecuted by: ${message.author.tag} (${message.author.id})\n\nChannel: #${message.channel.name} (${message.channel.id})\n\nServer: ${message.guild.name} (${message.guild.id})`)
			.setColor("RED")
			.setTimestamp(Date.now())
			.setFooter("New Command Triggered!")
			client.channels.cache.get('771465041852760104').send(embed)
		}
}