const { MessageEmbed, MessageAttachment } = require('discord.js');
const vacefron = require('vacefron')

module.exports = {
	name: "carreverse",
	aliases: ["reversecar"],
	description: "Put some text for the car reverse meme.",
	usage: "carreverse [text]",
	category: "Fun",
	run: async (client, message, args) => {
		let carReverse = args.slice(0).join(" ");
		if(!carReverse) {
			return message.channel.send("Put some text for the car reverse meme!")
		};

		let text = await vacefron.carReverse(carReverse);
		let attach = new MessageAttachment(text, "reversecar.png")

		message.channel.send(attach)
	}
}