const { Collection, Client, Discord, Activity, Guild } = require('discord.js');
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
const fs = require('fs');
const client = new Client({
    disableEveryone: true
})
const disbut = require('discord-buttons');
disbut(client);
const { token } = require("./config.json");


client.commands = new Collection();
client.aliases = new Collection();


["commands"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.on('ready', () => {
    require('./events/client/ready')(client)
})
client.on('message', async message => {
    require('./events/guild/message.js')(client, message)
})

client.login(process.env.TOKEN);