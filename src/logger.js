const logChannelId = process.env['LOG_CHANNEL']

class Logger {
  constructor(client) {
    this._client = client;
    this._channel = this._client.channels.cache.get(logChannelId);
  }

  _getCurrentDate() {
    const now = new Date();
    now.setHours(now.getHours() - 3);
    const day = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    return `${day} ${time}`;
  }

  logError(msg) {
    this._channel.send(`\`\`\`diff
- [ERROR] ${this._getCurrentDate()} ${msg}\`\`\``);
  }

  log(msg) {
    this._channel.send(`
    \`\`\`
- [LOG]   ${this._getCurrentDate()} ${msg}\`\`\`
    `);
  }

  logWarning(msg) {
    this._channel.send(`
    \`\`\`fix
- [WARN]  ${this._getCurrentDate()} ${msg}\`\`\`
    `);
  }

}

export default Logger;