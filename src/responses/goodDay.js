import { getMessageOwner } from '../utils.js';
const adminIds = process.env['ADMIN_IDS']

export default (message) => {
  const {userId, username} = getMessageOwner(message);
  message.reply('Bom dia');
}