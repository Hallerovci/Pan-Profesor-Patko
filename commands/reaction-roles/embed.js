const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "embed",
    category: "reaction-roles",
    run: async(client, message) => {
        const embed =  new MessageEmbed()
            .setTitle("**Vyber si svoje pohlavie**")
            .setDescription("♂️ - muž\n♀️ - ž*na\n🚁 - bojová helikoptéra")
            .setColor(0x0b8fd6)
        const msg = await message.channel.send(embed)
        await msg.react("♂️")
        await msg.react("♀️")
        await msg.react("🚁")
    }
}