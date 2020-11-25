const { MessageEmbed } = require('discord.js')
const moment = require("moment")

module.exports = {
	name: "stats",
	description: "Checks the bot's statistics.",
	category: "Info",
	usage: "stats",
	run: async (client, message, args) => {
		let totalSeconds = (client.uptime / 1000);
		let days = Math.floor(totalSeconds / 86400);
		totalSeconds %= 86400
		let hours = Math.floor(totalSeconds / 3600);
		totalSeconds %= 3600;
		let minutes = Math.floor(totalSeconds / 60);
		let seconds = Math.floor(totalSeconds % 60);
		let embed = new	MessageEmbed()
		.setTitle("Slimer.JS Statistics")
		.setAuthor(client.user.username, client.user.displayAvatarURL())
		.addFields(
			{ name: "Node.JS Version", value: "v12.19.0" },
			{ name: "Discord.JS Version", value: "v12.3.1" },
			{ name: "Bot Version", value: "v1.4.0" },
			{ name: "Server Count", value: `${client.guilds.cache.size}` },
			{ name: "Member Count", value: `${client.users.cache.size}` },
			{ name: "Memory Usage", value: `${Math.floor(process.memoryUsage().rss / 1024 / 1024)}mb` },
			{ name: "Uptime", value: `Days: ${days} | Hours: ${hours} | Minutes: ${minutes} | Seconds: ${seconds}` },
		)
		.setColor("RED")
		message.channel.send(embed)
	},
}