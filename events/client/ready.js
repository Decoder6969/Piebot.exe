const config = require(`../../config`);
const Discord = require('discord.js')
module.exports = async (client) => {
	client.user.setPresence({
		activity: {
			name: `${config.prefix}help`,
			type: "PLAYING"
		},
		status: "idle"
	});
};
console.log("Ready!")