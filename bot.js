const Discord = require('discord.js');
const client = new Discord.Client();

const ytdl = require("ytdl-core");

const PREFIX = '!';

var servers = {};

client.on('ready', () =>{
    console.log('Il bot è pronto, Rek.');
})

client.on('message', message=>{
   
    let args = message.content.slice(PREFIX.lenght).split(" ");

    switch(args[0]){
        case '-ping':
            message.channel.send('pong!')
            break;
        case '-info':
            const embed = new Discord.MessageEmbed()
            .setTitle('Informazioni')
            .addField('Utente', message.author.username)
            .addField('Server Attuale', message.guild.name)
            .addField('IP Server Minecraft', 'mc.galaxite.it')
            .addField('Sponsor', '𝕭𝖑𝖆𝖈𝖐𝕳𝖔𝖑𝖊')
            .setColor(0x380A7A)
            .setThumbnail(message.author.displayAvatarURL())
            message.channel.send(embed);              
        break;
        case '-clear':
            if(!message.member.roles.cache.find(r => r.name === "Con Permesso")) return message.channel.send('`Non hai il permesso!`')
            if(!args[1]) return message.reply('Devi aggiungere un numero.')
            message.channel.bulkDelete(args[1]);
            message.channel.send('**La chat è stata pulita.**')
            break;

    }
})

client.login(token);
