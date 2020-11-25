const { MessageEmbed, MessageAttachment } = require('discord.js');
const vacefron = require('vacefron')

module.exports = {
	name: "eject",
	description: "Eject someone into space.",
	usage: "eject <@user>",
	category: "Fun",
	run: async (client, message, args) => {
		let user = message.mentions.users.first() || message.author;

		let username = user.username
		let ejected = await vacefron.ejected(username);
		let attach = new MessageAttachment(ejected, "ejected.png");

		message.channel.send(attach)
	}
}