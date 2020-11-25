const { Discord, MessageEmbed} = require("discord.js"), 
      { post } = require("node-superfetch");

module.exports = {
  name: "eval",
  category: "Owner",
  usage: "eval [arguments]",
  description: "Evaluate the specified arguments.",
  run: async (client, message, args, functions) => {
    if (message.author.id !== '544646066579046401') return message.channel.send('Eval is a command only for Blockster!');
    
    const embed = new MessageEmbed()
    .addField("Input", "```js\n" + args.join(" ") + "```");
    
    try {
      const code = args.join(" "); 
      if (!code) return message.channel.send("Please include the code."); 
      let evaled;
      if (code.includes(`SECRET`) || code.includes("client.token") || code.includes("process.env")) { 
        evaled = "MY TOKEN!";
      } else { 
        evaled = eval(code); 
      }
      
      if (typeof evaled !== "string") evaled = require("util").inspect(evaled, {depth: 0});
      let output = clean(evaled); 
      if (output.length > 1024) {
        const {body} = await post("https://hastebin.com/documents").send(output); 
        embed.addField("Output", `https://hastebin.com/${body.key}.js`).setColor(0x7289DA);
      } else { 
        embed.addField("Output", "```js\n" + output + "```").setColor(0x00ffff)
        const msg = await message.channel.send(embed) 
        await msg.edit(embed) 
        await msg.react('✅') 
        await msg.react('❌') 
        const filter = (reaction, user) => (reaction.emoji.name === '❌' || reaction.emoji.name === '✅') && (user.id === message.author.id);
        msg.awaitReactions(filter, { max: 1 }) 
          .then((collected) => { 
            collected.map((emoji) => { 
              switch (emoji._emoji.name) {
                  case '✅': 
                    msg.reactions.removeAll(); 
                      break; 
                  case '❌':
                    message.delete()
                    message.channel.send("Evaluation has been hidden!")
                    msg.delete() 
                      break; 
              } 
            }) 
        }) 
      }
    } catch (error) { 
      let err = clean(error); 
      if (err.length > 1020) { 
        const {body} = await post("https://hastebin.com/documents").send(err); 
        embed.addField("Output", `https://hastebin.com/${body.key}.js`).setColor("RED"); 
      } else { 
        embed.addField("Output", "```js\n" + err + "```").setColor("RED"); 
      } 
      message.channel.send(embed); 
    }
  }
}

function clean(string) { 
  if (typeof text === "string") { 
    return string.replace(/`/g, "`" + String.fromCharCode(8203)) .replace(/@/g, "@" + String.fromCharCode(8203)) } 
  else { 
    return string;
  }
}