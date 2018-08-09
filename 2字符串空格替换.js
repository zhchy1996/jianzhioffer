function replaceSpace(str) {
  let oStr = str.toString();
  return oStr.replace(/\s/g, '%20')
}
console.log(replaceSpace('alla ala lala'))