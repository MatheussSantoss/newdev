function checkMemory() {
  const os = require('os');
  
  const mem = parseInt(os.freemem() / 1024 / 1024);
  const total = parseInt(os.totalmem() / 1024 / 1024);
  const percentage = parseInt((mem/total)*100);
  
  const statistics = {
    freeMemory: `${mem}MB`,
    totalMemory: `${total}MB`,
    usage: `${percentage}%`
  }
  
  // Retorna o SO que está sendo executado o node
  // console.log(os.platform());
  
  console.clear();
  console.table(statistics);
}

setInterval(checkMemory, 1000);
