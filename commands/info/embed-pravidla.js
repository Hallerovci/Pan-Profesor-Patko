const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "embed-pravidla",
    category: "info",
    run: async(client, message) => {
        const embed = new MessageEmbed()
            .setTitle("Pravidla")
            .addField("**1.**", "Rob si čo chceš, len nerieš zbytočné blbosti")
            .addField("**2.**", "Spamovať si choď niekam inam, tu to moc ľudí zaujímať nebude")
            .addField("**3.**", "NSFW a iné nechutnosti neposielaj, lebo ťa vynesiem von.")
        message.channel.send(embed)
    }
}