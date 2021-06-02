import Discord from 'discord.js'
import awakenListener from './listeners/awaken.js';
import messageListener from './listeners/message.js';
import Logger from './logger.js';

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
    this._commandChar = commandChar;
    const devChannel = this._client.channels.cache.get(devChannelId);
    this._logger.log(`Updated commandChar to ${commandChar}`);
    this._logger.logError(`Updated commandChar to ${commandChar}`);
    this._logger.logWarning(`Updated commandChar to ${commandChar}`);
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
    this._client.on('ready', () => {
      this._logger = new Logger(this._client);
    })
  }

  _setupListeners() {
    awakenListener(this._client);
    messageListener(this);
  }

  getLogger() {
    return this._logger;
  }


}

export default ERUSBot;
