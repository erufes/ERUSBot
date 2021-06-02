export const getMessageOwner = (message) => {
  return {username: message.author.username, id: message.author.id};
}

export const getUsernameFromUserId = async (client, id) => {
  return client.users.fetch(id);
}