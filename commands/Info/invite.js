const { MessageEmbed } = require('discord.js')

module.exports = {
	name: "invite",
	description: "Shows the invite links related to the bot.",
	category: "Info",
	usage: "invite",
	run: async (client, message, args) => {
		let embed = new MessageEmbed()
			.setTitle("Slimer.JS Invites")
			.addFields(
				{ name: "Support Server", value: `[Click Here](https://discord.gg/xwFDQXa)` },
				{ name: "Bot Invite", value: `[Click Here](https://discord.com/oauth2/authorize?client_id=733635808824655903&scope=bot&permissions=2146958847)` },
				{ name: "Blockster's Blocky World", value: `[Click Here](https://discord.gg/ZdUj8V2)` }
			)
		message.channel.send(embed)
	},
}