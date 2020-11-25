const discord = require('discord.js')
const fs = require('fs')
const DBL = require("dblapi.js")

module.exports = client => {
  const dbl = new DBL(process.env.DBLTOKEN, client)
  
	setInterval(() => {
  	dbl.postStats(client.guilds.size);
	}, 1800000);
  
  console.log(`${client.user.tag} is now ready in ${client.guilds.cache.size} Servers!`)
	
	const activities = [
    `${client.guilds.cache.size} Servers!`,
		`Made By Blockster!`,
    `Use the vote command to vote for Slimer.JS!`
  ];
	let i = 0;
	setInterval(() => client.user.setActivity(`${activities[i++ % activities.length]}`), 15000);

	let fetch = require('node-fetch')
	fetch(`https://voidbots.net/api/auth/stats/${client.user.id}`, {
		method: "POST",
		headers: {
			Authorization: process.env.VBTOKEN,
			"Content-Type": "application/json"
		},
		body: JSON.stringify({"server_count": client.guilds.cache.size })
	}).then(response => response.text())

	let restartembed = new discord.MessageEmbed()
	.setAuthor("Slimer.JS Online")
	.setDescription("Slimer.JS is now online!")
	.setTimestamp(Date.now())
	.setFooter("Time is in CDT America.")
	.setColor(`YELLOW`)
	client.channels.cache.get('764931984710434886').send(restartembed)
	client.channels.cache.get('764931984710434886').send("Pings: ||<@&764937345005781042>||")

	const cmds = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
	for(const file of cmds) {
		const cmd = require(`../../commands/${file}`);

		client.commands.set(cmd.name, cmd);
	}
}