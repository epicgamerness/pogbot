const { MessageEmbed } = require('discord.js');

module.exports = {
	name: "ping",
	aliases: ["pong", "latency"],
	description: "Show the bot latency.",
	usage: "ping",
	category: "Info",
	run: async (client, message, args, functions) => {
		let embed = new MessageEmbed()
		.setTitle("Pong!")
		.setDescription(
			`Bot Latency: **${Date.now() - message.createdTimestamp}**ms\nAPI Latency: **${Math.round(client.ws.ping)}**ms`
		)
		.setColor("RED")
		.setTimestamp(Date.now());

		message.channel.send(embed)
	}
}