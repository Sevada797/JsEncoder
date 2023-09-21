 function copy(elem) {
navigator.clipboard.writeText(elem.innerText.substr(14));

    }

function random(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
//let alph = ["A", "B", "C", "D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a", "b", "c", "d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3","4","5","6","7","8","9","`","~","!","@","#","$","%","^","&","*","(",")","-","+","_","=","[","]","{","}",",",".","<",">",":",";","'","\"","/","\\", " "];
let alph = ['g', '6', 'c', '>', '}', 'p', 'e', '!', ';', 'z', 'X', 'o', 'x', ')', 'S', '=', 'm', 'r', 'D', 'O', '+', '`', 'k', 'q', 'y', '5', ' ', '|', ',', '{', '(', '~', 'Z', 'v', 'V', '%', 'J', 'H', '[', '7', 'G', '8', '$', '.', 'A', 'u', '2', 'M', 'j', '/', 'h', 'L', 't', 'I', '@', 'T', '4', '*', '-', 'R', 'C', '1', 'Q', ':', 'a', '"', 'N', 'Y', '\\', 'l', '<', 'F', 'i', '^', 's', '0', '&', 'U', 'n', 'E', "'", 'B', 'b', 'W', '#', 'w', 'K', '?', '3', 'd', 'f', '9', 'P', '_', ']']; 

function encrypt(str) { 
str = str.split("");
for (i=0;i<str.length;i++) {
let n = random(1, 9);
str[i] = alph[(alph.indexOf(str[i]) + n) % 95] + n;
//str[i] = ((alph.indexOf(str[i]) + n) % 93).toString() + n;
}

str = str.join("");
document.getElementById("encoded").innerText = "Encoded text: " + str;

}
function decrypt(str) {
str = str.split("");

for (i=0;i<str.length;i+=2) {
if (alph.indexOf(str[i]) - str[i+1] < 0) {
str[i] = alph[95 + (alph.indexOf(str[i]) - str[i+1])];
}
else if (alph.indexOf(str[i]) - str[i+1] >= 0) {
str[i] = alph[alph.indexOf(str[i]) - str[i+1]];
//str[i] = alph[str[i] - str[i+1]];
}
str[i+1] = "";


}
str = str.join("");
document.getElementById("decoded").innerText = "Decoded text: " + str;
}
