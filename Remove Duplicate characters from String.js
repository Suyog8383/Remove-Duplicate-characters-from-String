let str = "nagawade";
function checkDuplicate(str) {
  let obj = {};
  let str2 = "";
  for (let i = 0; i < str.length; i++) {
    if (obj.hasOwnProperty(str[i])) {
      obj[str[i]]++;
    } else {
      obj[str[i]] = 1;
    }
  }
  for (let item in obj) {
    str2 += item;
  }
  return str2;
}
console.log(checkDuplicate(str));
