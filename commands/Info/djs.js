const discord = require('discord.js')
const axios = require('axios')

module.exports = {
	name: "djs",
	description: "Search the specified arguments on the Discord.JS documentation.",
	usage: "djs [search]",
	category: "Info",
	run: async (client, message, args) => {
		const uri = `https://djsdocs.sorta.moe/v2/embed?src=stable&q=${encodeURIComponent(args)}`

		if (!args[0]) {
			message.reply("Here is the Discord.JS docs link (https://discord.js.org/). But next time provide some arguements.")
			return;
		}

		axios
			.get(uri)
			.then((embed) => {
				const { data } = embed

				if (data && !data.error) {
					message.channel.send({ embed: data })
				} else {
					message.reply(`Could not find that documentation`)
				}
			})		
			.catch(err => {
				console.error(err)
			})
	}
}