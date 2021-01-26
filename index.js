const {Collection, Client, Discord} = require('discord.js')
const fs = require('fs')
const client = new Client({
    disableEveryone: true,
    partials : ["MESSAGE", "CHANNEL", "REACTION"]
})
const config = require('./config.json')
const prefix = config.prefix
const token = config.token
client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
}); 

client.on('message', async message =>{
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    if(!message.guild) return;
    if(!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if(cmd.length == 0 ) return;
    let command = client.commands.get(cmd)
    if(!command) command = client.commands.get(client.aliases.get(cmd));
    if(command) command.run(client, message, args) 
})

client.on('ready', () => {
    client.user.setActivity(`${prefix}help`)
    console.log(`Name: ${client.user.username}\nTag: ${client.user.tag}\nID: ${client.user.id}`);
    client.user.setPresence({
        status: "online",
        activity: { 
            name: "decúlenky milované",
            type: "WATCHING"
        }
    })
})

client.on('messageReactionAdd', async(reaction, user) => {
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;
    if(!reaction.message.guild) return;
    if(reaction.message.id === '802570578451365898'){
        if(reaction.emoji.name === '♂️') {
            await reaction.message.guild.members.cache.get(user.id).roles.add('802148536585027605')
            const embed = {
                "description": "Odteraz si muž moj",
                "color": "#00cfff",
                "title": "**Role**"
            };
            user.send({ embed })
        }
    }
    if(reaction.message.id === '802570578451365898'){
        if(reaction.emoji.name === '♀️') {
            await reaction.message.guild.members.cache.get(user.id).roles.add('802570835420250143')
            const embed = {
                "description": "Odteraz si ž*na moja",
                "color": "#ff00e5",
                "title": "**Role**"
            };
            user.send({ embed })       
        }
    }
    if(reaction.message.id === '802570578451365898'){
        if(reaction.emoji.name === '🚁') {
            await reaction.message.guild.members.cache.get(user.id).roles.add('802570838384836638')
            const embed = {
                "description": "Odteraz si bojova helikoptera :)",
                "color": "#f82500",
                "title": "**Role**"
            };
            user.send({ embed })
        }
    }
})

client.on('messageReactionRemove', async(reaction, user) => {
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;
    if(!reaction.message.guild) return;
    if(reaction.message.id === '802570578451365898'){
        if(reaction.emoji.name === '♂️') {
            await reaction.message.guild.members.cache.get(user.id).roles.remove('802148536585027605')
            const embed = {
                "description": "Odteraz si už neni muž moj",
                "color": "#00cfff",
                "title": "**Role**"
            };
            user.send({ embed })
        }
    }
    if(reaction.message.id === '802570578451365898'){
        if(reaction.emoji.name === '♀️') {
            await reaction.message.guild.members.cache.get(user.id).roles.remove('802570835420250143')
            const embed = {
                "description": "Odteraz si už neni ž*na moja",
                "color": "#ff00e5",
                "title": "**Role**"
            };
            user.send({ embed })       
        }
    }
    if(reaction.message.id === '802570578451365898'){
        if(reaction.emoji.name === '🚁') {
            await reaction.message.guild.members.cache.get(user.id).roles.add('802570838384836638')
            const embed = {
                "description": "Odteraz si už neni bojova helikoptera :(",
                "color": "#f82500",
                "title": "**Role**"
            };
            user.send({ embed })
        }
    }
})

client.login(token)
