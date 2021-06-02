const validChars = ['!', '$', '%', '¨', '&', '^', '~'];

const isValidChar = (char) => validChars.includes(char);

export default (ERUSBot, args) => {
  const newCommandChar = args[0];
  if(!newCommandChar) {
    return;
  }
  if(isValidChar(newCommandChar)) {
    ERUSBot.setCommandChar(newCommandChar);
  }
}