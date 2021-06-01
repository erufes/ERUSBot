import express from 'express';
const server = express();

server.all('/', (req, res) => {
  res.send('Bot running');
});

export function keepAlive() {
  server.listen(3000, () => {
    console.log('Server is alive.')
  });
}
export function keepAlive() {
  server.listen(3000, () => {
    console.log('Server is alive.')
  });
}

keepAlive();
