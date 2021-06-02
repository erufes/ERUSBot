export default (client, commandChar) => {
  client.on('message', message => {
      if(message.content[0] === commandChar) {
        message.reply('Hello!');
      }
    })
}
