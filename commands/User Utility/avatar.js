const { MessageEmbed } = require('discord.js');

module.exports = {
	name: "avatar",
	description: "Shows the avatar for you or a mentioned user.",
	usage: "avatar <@user>",
	category: "User Utility",
	run: async (client, message, args) => {
		let user = message.mentions.users.first() || message.author;

		const avembed = new MessageEmbed()
		.setTitle(`${user.username}'s Avatar`)
		.setColor(13632027)
		.setImage(`${user.avatarURL({ format: 'png', dynamic: true, size: 2048 })}`)
		message.channel.send(avembed)
	}
}