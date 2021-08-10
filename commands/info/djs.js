const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
 name: "djs",
 aliases: ["discordjs", "djsdocs"],
 description: "Look at the discord.js docs",
 category: "Utility",
 usage: "djs (query)",
 run: async (client, message, args) => {
  try {
   const query = args[0];
   let version = message.content.split("--src=")[1];
   if (!version) version = "stable";
   if (!query)
    return message.reply({
     embed: {
      color: 16734039,
      description: ":x: | Please enter a term to search!",
     },
    });
   const res = await fetch(`https://djsdocs.sorta.moe/v2/embed?src=${version}&q=${query}`);
   const body = await res.json();
   return message
    .reply({
     embed: body,
    })
    .catch((c) => {
     message.reply({
      embed: {
       color: 16734039,
       description: "<:error:872104702626639922> | Invaild query!",
      },
     });
    });
  } catch (err) {
   console.log(err)
   message.reply({
    embed: {
     color: 16734039,
     description: "Something went wrong... :cry:",
    },
   });
  }
 },
};