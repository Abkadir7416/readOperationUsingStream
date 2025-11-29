const fs = require('fs');

const readStream = fs.createReadStream('photo.jpg')

let i=0;
readStream.on('data', (chunck)=>{
  // console.log('chunk;; ', chunck);
  console.log('length:;; ', chunck.length)
  console.log('End of Loop::', ++i);
  fs.appendFileSync('new-photo.jpg', chunck);
  readStream.pause();
  if(i==2){
    readStream.pause()
  }
  else{
    setTimeout(() => {
      readStream.resume();
    }, 2000);

  }

})
console.log('End of Execution::');