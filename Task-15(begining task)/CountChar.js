let str = "stawberry";
let count = {};
let i = 0;

while (i < str.length) {
  let char = str[i];
  if (count[char]) {
    count[char]++;
  } else {
    count[char] = 1;
  }
  i++;
}

console.log("Character Count:", count); // Output: { s:1,t:1,a:1,w:1,b:1,e:1,r:2,y:1 }
