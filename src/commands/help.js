const helpResponse = 
`
**Lista de Comandos**
\`\`\`
- help: Este comando. Mostra informações sobre os outros comandos do bot

\`\`\`
`

export default (message) => {
  message.reply(helpResponse);
}