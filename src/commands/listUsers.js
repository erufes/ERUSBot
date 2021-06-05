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
    const result = await keys.map(async key => {
        const val = await db.get(key);
        const username = await getUsernameFromUserId(ERUSBot.getClient(), key);
        return (`
        ${username}, ${val}`);
    });
    const resolved = Promise.all(result);
    resolved.then(res => {
      //ERUSBot.getLogger().log(res);
      message.reply(res);
    })
  }
  catch(e) {
    ERUSBot.getLogger().logError(`Fetching member data from DB: ${e}`)
  }
 
}