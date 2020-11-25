const { MessageEmbed, MessageAttachment } = require('discord.js');
const vacefron = require('vacefron')

module.exports = {
	name: "water",
	description: "Put some text into a water meme.",
	usage: "water [text]",
	category: "Fun",
	run: async (client, message, args) => {
		let watertext = args.slice(0).join(" ");
		if(!watertext) {
			return message.channel.send("Put some text into a water meme!")
		};

		let text = await vacefron.water(watertext);
		let attach = new MessageAttachment(text, "watertext.png")

		message.channel.send(attach)
	}
}