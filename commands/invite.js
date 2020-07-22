module.exports = {
    name: 'invite',
    description: "Greeting Command",
    execute(message, args){
        message.channel.send('Hey! Do you want to invite me to your server?') 
        let inviteEmbed = new MessageEmbed()
        .setTitle("Invite PocketBot!")
        .setDescription("Invite PocketBot to your server by clicking on this link! https://discord.com/api/oauth2/authorize?client_id=733710721191247892&permissions=8&scope=bot")
        .setColor("#F8AA2A");
  
      commands.forEach((cmd) => {
        inviteEmbed.addField(
          `**${message.client.prefix}${cmd.name} ${cmd.aliases ? `(${cmd.aliases})` : ""}**`,
          `${cmd.description}`,
          true
        );
      });
  
      inviteEmbed.setTimestamp();
  
      return message.channel.send(inviteEmbed).catch(console.error);
    }
}