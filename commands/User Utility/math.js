const math = require('mathjs');
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "math",
  aliases: ["solve", "equation"],
  description: "Solve a math problem.",
  usage: "math [num1] [+ | - | * | /] [num2]",
  category: "User Utility",
  run: async (client, message, args) => {
    const accepted = ["+", "-", "*", "/"];
    
    const num1 = args[0]
    if (isNaN(num1)) {
      return message.channel.send("That is not a valid integer!");
    }
    
    const mathChoice = args[1];
    if (!accepted.includes(mathChoice)) {
			return message.channel.send(`Please choose from \`+, -, *, /\` because those are the valid math signs!`);
		}
    
    const num2 = args[2]
    if (isNaN(num2)) {
      return message.channel.send("That is not a valid integer!");
    }
    
    let response = await math.evaluate(`${num1} ${mathChoice} ${num2}`);
    
    let embed = new MessageEmbed()
    .setAuthor(`Math Problem: ${args.join(" ")}`, message.author.displayAvatarURL())
    .setDescription(`The Math problem you provided \`(${args.join(" ")})\` is equal to \`${response}\`!`)
    .setColor("RED")
    .setTimestamp(Date.now())
    .setFooter(`Requested By ${message.author.username}!`)
    message.channel.send(embed)
  }
}