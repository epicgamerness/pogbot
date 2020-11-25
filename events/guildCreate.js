 module.exports = (client, guild) => {
  console.log(`Slimer.JS has been added to ${guild.name}`);
	client.channels.cache.get('765582365548347453').send(`Slimer.JS has been added to **${guild.name}** with the ID of: **${guild.id}**`)
}