export const getMessageOwner = (message) => {
  return {username: message.author.username, id: message.author.id};
}