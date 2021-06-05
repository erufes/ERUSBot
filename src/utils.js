export const getMessageOwner = (message) => {
  return {username: message.author.username, userId: message.author.id};
}

export const getUsernameFromUserId = async (client, id) => {
  return client.users.fetch(id);
}

export const getMembersFromSpecificRoom = (client) => {
  
}