import db from '../database.js';

export default async () => {
  const data = await db.list().then(keys => {}); 
  console.log(data);
}