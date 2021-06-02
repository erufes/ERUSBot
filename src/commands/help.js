const helpResponse = 
`
**Lista de Comandos**
\`\`\`
- help:                     Este comando. Mostra informações sobre os outros comandos do bot
- setComando {char}:        Configura o caractere que ativa o bot. Padrão: $
- addUser {usuário} {time}: Adiciona um determinado usuário e o associa a um determinado time.
\`\`\`
`

export default (message) => {
  message.reply(helpResponse);
}