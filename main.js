// console.log("hello")


// const heading = document.querySelector("h2");

// heading.textContent = "Wowwww";


function caesarCipher(text, number) {
    let alphabets = "abcdefghijklmnopqrstuvwxyz";
  
    let encryptedString = "";
  
    for (let char of text) {
      if (!alphabets.includes(char) && !alphabets.toUpperCase().includes(char)) {
        encryptedString += char;
        continue;
      }
  
      if (alphabets.toUpperCase().includes(char)) {
        alphabets = alphabets.toUpperCase();
      }
  
      const index = alphabets.indexOf(char);
      let newIndex = index + number;
  
      if (newIndex > 25) {
        newIndex %= 26;
      }
      const newChar = alphabets.charAt(newIndex);
      encryptedString += newChar;
  
      alphabets = alphabets.toLowerCase();
    }
  
    console.log(encryptedString);
  
    return encryptedString;
  }
  
  const x = caesarCipher("HELLO hello", 5);
  
  console.log(x);