import db from '../database.js';
import { getUsernameFromUserId } from '../utils.js';

export default async (ERUSBot, message) => {
  ERUSBot.getLogger().log(`Fetching member data from DB`);  
  const result = '';
    const keys = await db.list();
  try {
    if(!keys) {
      throw "Empty keys error";
    }
    keys.map(async key => {
        const val = await db.get(key);
        if(!val) {
          throw "Empty value error";
        }
        const username = await getUsernameFromUserId(ERUSBot.getClient(), key);
        message.reply(`
        ${username}, ${val}`);
    });
  } 
  catch(e) {
    ERUSBot.getLogger().logError(`Fetching member data from DB: ${e}`)
  }
 
}