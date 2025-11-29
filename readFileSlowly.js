const fs = require('fs');

// const readStream = fs.createReadStream('img.jpg')

const readStream = fs.createReadStream('text.txt',{highWaterMark:4})

let count=0;
readStream.on('data', (chunck)=>{
  // console.log('chunk;; ', chunck);
  if(count==0){
    fs.writeFileSync('new-text.txt', chunck);
  }
  else{
    fs.appendFileSync('new-text.txt', chunck);
  }
  readStream.pause();
  setTimeout(() => {
    readStream.resume();
  }, 1000);
  count++;
})
console.log('End of Execution::');