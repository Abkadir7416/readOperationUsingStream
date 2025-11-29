console.log('hello stream');

const fs = require('fs');

// const data = fs.readFileSync('file.txt', (val)=>{
//   console.log('value: ', val);
// });

// const data = fs.readFileSync('file.txt', 'utf-8');
// fs.writeFileSync('newFile.txt', data);

// console.log("data:: ", data)

// fs
// const readStream = fs.createReadStream('file.txt')
// const readStream = fs.createReadStream('newFile.txt')

const readStream = fs.createReadStream('img.jpg')

// console.log('readStream length;;; ', readStream)

readStream.on('data', (chunck)=>{
  // console.log('chunk;; ', chunck);
  console.log('length:;; ', chunck.length)
  console.log('End of Loop::');
  fs.appendFileSync('image.jpg', chunck);
  readStream.pause();
})
console.log('End of Execution::');