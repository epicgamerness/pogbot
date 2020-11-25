const child = require('child_process');

module.exports = {
	name: "exec",
	description: "Execute the arguements in the console.",
	usage: "exec [args]",
	aliases: ["execute"],
	category: "Owner",
	run: async (client, message, args) => {
		if (message.author.id !== '544646066579046401') return message.channel.send('Execute is a command only for Blockster!');
		
		child.exec(args.join(" "), function(error, stdout) {
			let response = (error || stdout)
			message.channel.send(response, { code: "asciidoc", split: "\n" }).catch(err => {
				message.channel.send(err)
			})
		})
	}
}