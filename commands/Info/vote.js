const { MessageEmbed } = require('discord.js')

module.exports = {
	name: "vote",
	description: "Shows the links to vote for Slimer.JS.",
	category: "Info",
	usage: "vote",
	run: async (client, message, args) => {
		let embed = new MessageEmbed()
			.setTitle("Slimer.JS Vote Links")
			.addFields(
				{ name: "VoidBots", value: `[Click Here](https://voidbots.net/bot/733635808824655903/vote)` },
				{ name: "Discord-BotList (eu)", value: `[Click Here](https://discord-botlist.eu/bots/733635808824655903/vote)` },
				{ name: "Boatz", value: "[Click Here](http://o.zwolfy.tech:3000/bots/733635808824655903/vote)" },
				{ name: "ParadiseBots", value: "[Click Here (then press vote)](https://paradisebots.net/bots/733635808824655903)" },
				{ name: "DiscordBotList (com)", value: "[Click here](https://discordbotlist.com/bots/slimerjs/upvote/)" },
				{ name: "BotsForDiscord", value: "[Click Here](https://botsfordiscord.com/bot/733635808824655903/vote)" },
				{ name: "Top.GG", value: "[Click Here](https://top.gg/bot/733635808824655903/vote)" }
			)
			.setColor("RED")
		message.channel.send(embed)
	},
}