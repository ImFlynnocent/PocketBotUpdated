const { GuildMember } = require("discord.js");

module.exports = {
    name: 'mute',
    description: "Mute people For rule breach.",
    execute(message, args){
        if (guild.client.role.cache.get() !== ('732244276557250621')
        )message.reply(message.author.tag + ',' + 'you do not have permission to do that!');
        else if(guild.client.role.cache.get() == ('732244276557250621')
        )message.reply(message.author.tag + ',' + user.mention + 'has been muted.');
    }
}
