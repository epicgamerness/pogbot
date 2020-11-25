const { MessageEmbed, MessageAttachment } = require('discord.js');
const vacefron = require('vacefron')

module.exports = {
	name: "heaven",
	description: "Go to heaven.",
	usage: "heaven <@user>",
	category: "Fun",
	run: async (client, message, args) => {
		let user = message.mentions.users.first() || message.author;

		let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
		let heaven = await vacefron.heaven(avatar);
		let attach = new MessageAttachment(heaven, "heaven.png");

		message.channel.send(attach)
	}
}