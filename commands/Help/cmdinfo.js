const discord = require('discord.js')

module.exports = {
	name: "cmdinfo",
	description: "Show info about a command.",
	usage: "cmdinfo [command]",
	aliases: ["cmdhelp"],
	category: "Help",
	run: async (client, message, args) => {
		const prefix = process.env.PREFIX;
		if (!args[0]) {
			return message.channel.send("You must provide a command to show info about!")
		}
		const command = await client.commands.get(args[0]);
		
    if (!command) {
      return message.channel.send(`Unknown Command: **${args[0]}**`);
    }
		
		let aliases = command.aliases
		if (aliases === undefined) {
			aliases = "None Provided"
		} else {
			aliases = command.aliases.join(", ")
		}

    let embed = new discord.MessageEmbed()
      .setAuthor(`Command Name: ${command.name}`, client.user.displayAvatarURL())
      .addField("Description", "`" + command.description + "`" || "Not Provided")
      .addField("Usage", "`" + `${prefix}${command.usage}` + "`" || "Not Provided")
			.addField("Category", "`" + command.category + "`" || "Not Provided")
			.addField("Aliases", "`" + aliases + "`" || "Not Provided")
	    .setThumbnail(client.user.displayAvatarURL())
      .setColor("CYAN")
      .setFooter(client.user.username, client.user.displayAvatarURL());

    return message.channel.send(embed);
  }
}