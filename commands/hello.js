module.exports = {
    name: 'hello',
    description: "Greeting Command",
    execute(message, args){
        message.channel.send('Hello there!');
    }
}