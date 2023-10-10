const os = require('os')

//info 

const user = os.userInfo()


//method returns the ssytem uptime in seconds

console.log(user);

console.log(`the ssytem uptime is ${os.uptime()} seconds`);

const currentOs = {
    name:os.type(),
    release:os.release(),
    totalMem: os.totalmem(),
    freeMem : os.freemem(),
}

console.log(currentOs);