module.exports = {
	name: "shutdown",
	aliases: ["sd"],
	description: "Shut the bot down.",
	usage: "shutdown",
	category: "Owner",
	run: async (client, message, args) => {
		if (message.author.id !== '544646066579046401') return message.channel.send('Shutdown is a command only for Blockster!');

		message.channel.send("Shutting down...")

		await process.exit(69);
	}
}