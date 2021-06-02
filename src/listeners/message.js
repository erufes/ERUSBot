import commandList from '../commandList.js';
import responseList from '../responseList.js';
import changeCommandChar from '../commands/changeCommandChar.js';


const getCommandFromMessage = (message) => message.content.split(' ')[0].substring(1);

const isMessageCommand = (ERUSBot, message) => message.content[0] === ERUSBot.getCommandChar();

const setupCommandListeners = (ERUSBot, message) => {
  if(isMessageCommand(ERUSBot, message)) {
      const command = getCommandFromMessage(message);
      switch(command) {
        case commandList.changeCommandChar:
          changeCommandChar(ERUSBot, 'TODO');
          break;
        default:
          break;
    }
  }
}

const setupResponseListeners = (ERUSBot, message) => {
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