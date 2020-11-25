const { MessageEmbed, MessageAttachment } = require('discord.js');
const vacefron = require('vacefron')

module.exports = {
	name: "firsttime",
	description: "Put someone for the first time meme.",
	usage: "firsttime <@user>",
	category: "Fun",
	run: async (client, message, args) => {
		let user = message.mentions.users.first() || message.author;

		let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
		let firsttime = await vacefron.firstTime(avatar);
		let attach = new MessageAttachment(firsttime, "firsttime?.png");

		message.channel.send(attach)
	}
}