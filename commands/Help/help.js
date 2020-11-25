const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  description: "Shows list of all commands in the specified category.",
  usage: "help <category>",
  category: "Help",
	aliases: ["cmds", "commands"],
  run: async (client, message, args) => {
    let prefix = process.env.PREFIX

		const acceptedOptions = ['info', 'fun', 'adminutil', 'userutil'];

		const choice = args[0];
		if (!choice) {
			let embed = new MessageEmbed()
			.setTitle("Categories of Commands!")
			.addField("📄 | Info", `${prefix}help info`)
			.addField("🔨 | Admin Utility", `${prefix}help adminutil`)
			.addField("🐸 | Fun", `${prefix}help fun`)
			.addField("🔨 | User Utility", `${prefix}help userutil`)
			.addField("💸 | Currency", `(Beta | Not Available)`)
      		.addField("🎵 | Music", `(Beta | Not Available)`)
			.setColor("RED")
			.setTimestamp(Date.now())
			.setFooter(`Requested by ${message.author.username}! | Do ${prefix}cmdinfo <command> to see info about a command!`);
			return message.channel.send(embed)
		}
		if (!acceptedOptions.includes(choice)) {
			return message.channel.send(`Please choose from \`${acceptedOptions.join(', ')}\`!`)
		}

		switch (choice) {
			case 'info': {
				let embed = new MessageEmbed()
				.setTitle("Info Commands!")
				.setDescription("| `djs` | `invite` | `ping` | `stats` | `vote` |")
				.setColor("RED")
				.setTimestamp(Date.now())
				.setFooter(`Requested by ${message.author.username}! | Do ${prefix}cmdinfo <command> to see info about a command!`);
				return message.channel.send(embed)
			}
      case 'music': {
        let embed = new MessageEmbed()
        .setTitle("Music Commands!")
				.setDescription("| `play` | `loop` | `queue` | `skip` | `skip` | `stop` | `volume` |")
				.setColor("RED")
				.setTimestamp(Date.now())
				.setFooter(`Requested by ${message.author.username}! | Do ${prefix}cmdinfo <command> to see info about a command!`);
				return message.channel.send(embed)
      }
 			case 'fun': {
				let embed = new MessageEmbed()
				.setTitle("Fun Commands!")
				.setDescription("| `carreverse` | `eject` | `emeeting` | `firsttime` | `grave` | `heaven` | `sip` | `stonks` | `water` | `pog` |")
				.setColor("RED")
				.setTimestamp(Date.now())
				.setFooter(`Requested by ${message.author.username}! | Do ${prefix}cmdinfo <command> to see info about a command!`);
				return message.channel.send(embed)
			}
			case 'adminutil': {
				let embed = new MessageEmbed()
				.setTitle("Admin Utility Commands!")
				.setDescription("| `announce` | `nickname` |")
				.setColor("RED")
				.setTimestamp(Date.now())
				.setFooter(`Requested by ${message.author.username}! | Do ${prefix}cmdinfo <command> to see info about a command!`);
				return message.channel.send(embed)
			}
			case 'userutil': {
				let embed = new MessageEmbed()
				.setTitle("User Utility Commands!")
				.setDescription("| `avatar` | `math` |")
				.setColor("RED")
				.setTimestamp(Date.now())
				.setFooter(`Requested by ${message.author.username}! | Do ${prefix}cmdinfo <command> to see info about a command!`);
				return message.channel.send(embed)
			}
			case 'currency': {
				let embed = new MessageEmbed()
				.setTitle("Currency Commands!")
				.setDescription("| `bal` | `daily` | `coinflip` | `work` | `pay` |")
				.setColor("RED")
				.setTimestamp(Date.now())
				.setFooter(`Requested by ${message.author.username}! | Do ${prefix}cmdinfo <command> to see info about a command!`)
				return message.channel.send(embed)
			}
			default: {
				return message.channel.send(`Please choose from \`${acceptedOptions.join(', ')}\`!`)
			}
		}
	},
}