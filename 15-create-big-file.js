const {writeFileSync} = require('fa')
for(let i=0;i<10000; i++){
    writeFileSync('./content/big.txt', `hello wordl ${id}\n`, {flag : 'a'})
}