const { MessageEmbed } = require('discord.js');

module.exports = {
	name: "announce",
	description: "Announce whatever you want in your server.",
	usage: "announce [your-announcement]",
	category: "Admin Utility",
	run: async (client, message, args) => {
		let prefix = process.env.PREFIX
		
		if (!message.member.hasPermission('MANAGE_GUILD'))
      return message.channel.send(
        `${message.author.username}, You need the \`MANAGE_GUILD\` permission to use this command`
    	);

		if(!args[0]) {
			return message.channel.send("Please provide a valid announcement.")
		}
		let announcement = message.content
      .split(`${prefix}announce `)
      .join("");

		message.delete();

		if (!announcement)
      return message.channel.send(`You did not specify your announcement!`);

		let announce = new MessageEmbed()
		.setTitle(`Announcement!`)
		.setAuthor(message.author.tag, message.author.displayAvatarURL())
		.setDescription(announcement)
		.setColor(`RANDOM`)
		
		message.channel.send(announce)
	}
}