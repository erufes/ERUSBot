import Discord from 'discord.js'
import helloListener from './listeners/hello.js';
import awakenListener from './listeners/awaken.js';
import messageListener from './listeners/message.js';

const devChannelId = process.env['DEV_CHANNEL']

class ERUSBot {
  constructor(commandChar) {
    this._client = new Discord.Client();
    this._commandChar = commandChar;
    this._token = process.env['TOKEN'];
    this._initClient();
    this._setupListeners();
  }

  setCommandChar(commandChar) {
    //this._commandChar = commandChar;
    const devChannel = this._client.channels.cache.get(devChannelId);
    devChannel.send(`Updated commandChar to ${commandChar}`);
  }

  getCommandChar(commandChar) {
    return this._commandChar;
  }

  getClient() {
    return this._client;
  }

  _initClient() {
    this._client.login(this._token);
  }

  _setupListeners() {
    awakenListener(this._client);
    //helloListener(this.client, this.commandChar);
    messageListener(this);

  }

}

export default ERUSBot;
