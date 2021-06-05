import { getUsernameFromUserId } from '../utils.js';
const meetingRoomId = process.env['MEETING_ROOM_ID']


export default async (ERUSBot, message) => {
  const logger = ERUSBot.getLogger();
  const channelRef = ERUSBot.getClient().channels.cache.get(meetingRoomId);
  const users = channelRef.members;
  const ret = users.map(user => {
    return getUsernameFromUserId(ERUSBot.getClient(), user.id);
  })
  const resolved = Promise.all(ret);
  resolved.then((result) => {
    message.reply(result);    
  })
}