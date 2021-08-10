const math = require('mathjs');

const Discord = require('discord.js');

module.exports = {
    name: "calculator",
    description: "Get the answer to a math problem",
    category: "utility",
    aliases: ["math"],
    usage: "calculate <problem>",


    run: async (client, message, args) => {

        if(!args[0]) return message.channel.send(' ❌ Please provide a question');

        let resp;

        try {
            resp = math.evaluate(args.join(" "))
        } catch (e) {
            return message.channel.send('❌ Please provide a **valid** question')
        }

        const embed = new Discord.MessageEmbed()
        .setColor("04FF00")
        .setTitle('Calculater')
        .addField('Equation :-', `\`\`\`css\n${args.join(' ')}\`\`\``)
        .addField('Answer :-', `\`\`\`css\n${resp}\`\`\``)

        message.channel.send(embed);

    }
}