const { MessageEmbed, MessageAttachment } = require('discord.js');
const vacefron = require('vacefron')

module.exports = {
	name: "grave",
	description: "Put someone into a grave.",
	usage: "grave <@user>",
	category: "Fun",
	run: async (client, message, args) => {
		let user = message.mentions.users.first() || message.author;

		let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
		let grave = await vacefron.grave(avatar);
		let attach = new MessageAttachment(grave, "grave.png");

		message.channel.send(attach)
	}
}