const { Console } = require("console");

console.log('process.env:', process.env); // 환경설정
console.clear();
console.log(process.env.COMPUTERNAME);

Console.log('process.version:',process.version);  //NodeJS version
Console.log('process.version:',process.arch);
Console.log('process.version:',process.platform);
Console.log('process.version:',process.argv);

process.exit();

console.log('프로세스');  // unreachable

function aa() {
    let a = 2;
    return a;
    let b = 3;   // unreachable
}
var a = 5;