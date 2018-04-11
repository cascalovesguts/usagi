const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json');

client.on('ready',() => {
	console.log('I\'m Online\nI\'m Online');
});

var prefix = "~"
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'tag1')) {
		message.channel.sendMessage('Warning! Proceed with caution, because the following message contains mentions of violence or violent imagery!');
	}
});

var prefix = "~"
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'tag2')) {
		message.channel.sendMessage('Warning! Proceed with caution, because the following message contains mentions of sexual violence!');
	}
});

var prefix = "~"
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'tag3')) {
		message.channel.sendMessage('Warning! Proceed with caution, because the following message contains mentions of pedophilia!');
	}
});

var prefix = "~"
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'tag4')) {
		message.channel.sendMessage('Warning! Proceed with caution, because the following message contains mentions of self harm!');
	}
});

var prefix = "~"
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'reqtag')) {
		message.channel.sendMessage('Warning! Proceed with caution, because the following message contains mentions or content involving one of the requested trigger tags!');
	}
});

var prefix = "~"
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'in the name of the moon')) {
		message.channel.sendMessage('i will destroy you!');
	}
});

var prefix = "~"
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'help me usagi!')) {
		message.channel.sendMessage('i am on my way!');
	}
});

client.login(process.env.BOT_TOKEN);
