module.exports = {
  name: "pog",
  aliases: ["pogchamp"],
  category: "Fun",
  description: "Pog champ.",
  usage: "pog",
  run: async (client, message, args) => {
    message.channel.send("Pog champ!")
  }
}