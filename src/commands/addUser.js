import db from '../database.js';

const Teams = ['VSSS', 'OPEN', 'Seguidor'];

const teamNotFoundMesage = 
`
Não foi possível adicionar o usuário: time não encontrado.
Times disponíveis:
- VSSS
- OPEN
- Seguidor
`

const noUserMessage = 
`
Nenhum usuário encontrado na mensagem. É necessário @mencionar um usuário para adicioná-lo.
`

const tooManyUsersMessage = 
`
Há mais de um usuário mencionado na mensagem. Para adicionar um usuário, apenas um único usuário deve ser mencionado.
`

export default (message) => {
  const teams = Teams.filter(t => message.content.includes(t));
  const users = message.mentions.users.keys();
  if(users.length === 0) {
    message.reply(noUserMessage);
    return;
  }
  if(users.length > 1) {
    message.reply(tooManyUsersMessage);
    return;
  }
  if(teams.length === 0) {
    message.reply(teamNotFoundMesage);
    return;
  }
  const user = users.next().value;
  db.set(user, teams).then(() => {});
}