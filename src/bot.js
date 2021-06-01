import Discord from 'discord.js'

class ERUSBot {
  constructor(commandChar) {
    this.client = new Discord.Client();
    this.commandChar = commandChar;
    this.token = process.env['TOKEN'];
    this.initClient();
  }

  setCommandChar(commandChar) {
    this.commandChar = commandChar;
  }

  initClient() {
    this.client.login(this.token);
    this.client.on('ready', () => {
      console.log(`ERUSBot logged in as ${this.client.user.tag}`);
    })
    this.client.on('message', message => {
      console.log(message.content);
      console.log(message.content[0]);
      if(message.content[0] === this.commandChar) {
        message.reply('read!');
      }
    })
  }

}

export default ERUSBot;
