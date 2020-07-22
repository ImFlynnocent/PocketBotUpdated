const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '&'
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
client.once('ready', () => {
    client.user.setActivity("Type &help For Commands List");
    console.log('PocketBot is online!');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'hello'){
        client.commands.get('hello').execute(message, args);
    } else if (command === 'info'){
        client.commands.get('info').execute(message, args);
    } else if (command === 'help'){
        client.commands.get('help').execute(message, args);
    } else if (command === 'mute'){
        client.commands.get('mute').execute(message, args);
    } else if (command === 'loop'){
        client.commands.get('loop').execute(message, args);
    } else if (command === 'lyrics'){
        client.commands.get('lyrics').execute(message, args);
    } else if (command === 'np'){
        client.commands.get('np').execute(message, args);
    } else if (command === 'pause'){
        client.commands.get('pause').execute(message, args);
    } else if (command === 'play'){
        client.commands.get('play').execute(message, args);
    } else if (command === 'playlist'){
        client.commands.get('playlist').execute(message, args);
    } else if (command === 'pruning'){
        client.commands.get('pruning').execute(message, args);
    } else if (command === 'queue'){
        client.commands.get('queue').execute(message, args);
    } else if (command === 'remove'){
        client.commands.get('remove').execute(message, args);
    } else if (command === 'resume'){
        client.commands.get('resume').execute(message, args);
    } else if (command === 'search'){
        client.commands.get('search').execute(message, args);
    } else if (command === 'shuffle'){
        client.commands.get('shuffle').execute(message, args);
    } else if (command === 'skip'){
        client.commands.get('skip').execute(message, args);
    } else if (command === 'skipto'){
        client.commands.get('skipto').execute(message, args);
    } else if (command === 'stop'){
        client.commands.get('stop').execute(message, args);
    } else if (command === 'volume'){
        client.commands.get('volume').execute(message, args);
    } else if (command === 'invite'){
        client.commands.get('invite').execute(message, args);
    }
});
 
client.login(process.env.token);
