const fs = require('fs');

// const readStream = fs.createReadStream('img.jpg')

const readStream = fs.createReadStream('text.txt',{highWaterMark:4})

readStream.on('data', (chunck)=>{
  // console.log('chunk;; ', chunck);
  console.log('length:;; ', chunck.length)
  console.log('End of Loop::');
  fs.appendFileSync('new-text.txt', chunck);
  readStream.pause();
  setTimeout(() => {
    readStream.resume();
  }, 1000);

})
console.log('End of Execution::');