import commandList from '../commandList.js';
import responseList from '../responseList.js';
import changeCommandChar from '../commands/changeCommandChar.js';
import help from '../commands/help.js';
import addUser from '../commands/addUser.js';
import listUsers from '../commands/listUsers.js';
import purgeLog from '../commands/purgeLog.js';
import getPresenceList from '../commands/getPresenceList.js';
import { getMessageOwner } from '../utils.js';

const getCommandFromMessage = (message) => message.content.split(' ')[0].substring(1);

const isMessageCommand = (ERUSBot, message) => message.content[0] === ERUSBot.getCommandChar();

const getArgumentsFromMessage = (message) => message.content.split(' ').slice(1);

const adminIds = JSON.parse(`[${process.env['ADMIN_IDS']}]`);

const selfId = process.env['SELF_ID'];

const userIsAdmin = (userId) => {
  return adminIds.includes(userId);
}

const setupCommandListeners = (ERUSBot, message) => {
  if(isMessageCommand(ERUSBot, message)) {
      const command = getCommandFromMessage(message);
      const args = getArgumentsFromMessage(message);
      const { username, userId } = getMessageOwner(message);
      if(userId === selfId) {
        return;
      }
      switch(command) {
        case commandList.changeCommandChar:
          changeCommandChar(ERUSBot, args);
          break;
        case commandList.help:
          help(message);
          break;
        case commandList.addUser:
          if(userIsAdmin(id)) {
            addUser(ERUSBot, message);
          }
          break;
        case commandList.listUsers:
          listUsers(ERUSBot, message);
          break;
        case commandList.purge:
          if(userIsAdmin(id)) {
            purgeLog(ERUSBot, message);
          }
          break;
        case commandList.presenceList:
          getPresenceList(ERUSBot, message);
          break;
        default:
          break;
    }
  }
}

const setupResponseListeners = (ERUSBot, message) => {
  const { username, userId } = getMessageOwner(message);
  if(userId === selfId) {
    return;
  }
  responseList.map(response => {
    response.triggers.map(trigger => {
      if(message.content.includes(trigger)) {
        response.action(message);
      }
    })
  })
}

export default (ERUSBot) => {
  ERUSBot.getClient().on('message', message => {
    setupResponseListeners(ERUSBot, message);
    setupCommandListeners(ERUSBot, message);
  })
}
