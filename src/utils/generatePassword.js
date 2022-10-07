export default function generatePassword(passwordLength=15) {
  const characters = [ 'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9','[',']','{','}','^']

  let newPassword = '';
  for(let i=0; i<passwordLength; i+=1) {
    const randomIndex = Math.floor(Math.random()*characters.length);
    const randomChar = characters[randomIndex];
    newPassword += randomChar
  }
  return newPassword;
  console.log(newPassword)
};
