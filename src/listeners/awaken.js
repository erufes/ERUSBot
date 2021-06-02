export default client => {
  client.on('ready', () => {
    console.log(`ERUSBot logged in as ${client.user.tag}`);
  })
}