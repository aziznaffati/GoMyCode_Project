const fs=require('fs');
var path=process.argv[2];
var x=fs.readFileSync(path,'utf8');
const array = [...x.matchAll('\n')];
console.log(array.length)


