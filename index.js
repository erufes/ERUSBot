import express from 'express';
import Database from '@replit/database';
import ERUSBot from './src/bot.js';

const server = express();
const db = new Database();


server.all('/', (req, res) => {
  res.send('Bot running');
});

export function keepAlive() {
  server.listen(3000, () => {
    console.log('Server is alive.')
  });
}
keepAlive();

const Bot = new ERUSBot('$');
