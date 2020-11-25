const { MessageEmbed, MessageAttachment } = require('discord.js');
const vacefron = require('vacefron')

module.exports = {
	name: "emeeting",
	aliases: ["emergencymeeting"],
	description: "Put some text for the emergency meeting meme.",
	usage: "emeeting [text]",
	category: "Fun",
	run: async (client, message, args) => {
		let meetingreason = args.slice(0).join(" ");
		if(!meetingreason) {
			return message.channel.send("Put some text for the emergency meeting meme!")
		};

		let text = await vacefron.emergencyMeeting(meetingreason);
		let attach = new MessageAttachment(text, "emergencymeeting.png")

		message.channel.send(attach)
	}
}