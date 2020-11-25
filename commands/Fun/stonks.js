const { MessageEmbed, MessageAttachment } = require('discord.js');
const vacefron = require('vacefron')

module.exports = {
	name: "stonks",
	description: "Stonks.",
	usage: "stonks <@user>",
	category: "Fun",
	run: async (client, message, args) => {
		let user = message.mentions.users.first() || message.author;

		let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
		let stonks = await vacefron.stonks(avatar);
		let attach = new MessageAttachment(stonks, "stonks.png");

		message.channel.send(attach)
	}
}