const helpResponse = 
`
**Lista de Comandos**
\`\`\`
- help:                Este comando. Mostra informações sobre os outros comandos do bot
- setComando {char}:   Configura o caractere que ativa o bot. Padrão: $
\`\`\`
`

export default (message) => {
  message.reply(helpResponse);
}