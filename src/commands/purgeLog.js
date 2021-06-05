const logChannelId = process.env['LOG_CHANNEL']
import {getMessageOwner} from '../utils.js';


export default (ERUSBot, messageData) => {
  console.log('purging log...');
  const { username } = getMessageOwner(messageData);
  const client = ERUSBot.getClient();
  const logChannel = client.channels.cache.get(logChannelId);
  const messages = logChannel.messages.fetch().then((res) => {
    res.map(msg => {
      msg.delete();
    })
      ERUSBot.getLogger().log(`Purged log channel, as requested by ${username}`);
  });
}