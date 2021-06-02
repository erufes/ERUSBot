const logChannelId = process.env['LOG_CHANNEL']

class Logger {
  constructor(client) {
    this._client = client;
    this._channel = this._client.channels.cache.get(logChannelId);
  }

  logError(msg) {
    this._channel.send(`\`\`\`diff
- [ERROR]: ${msg}\`\`\``);
  }

  log(msg) {
    this._channel.send(`
    \`\`\`
- [LOG] ${msg}\`\`\`
    `);
  }

  logWarning(msg) {
    this._channel.send(`
    \`\`\`fix
- [WARNING]: ${msg}\`\`\`
    `);
  }

}

export default Logger;