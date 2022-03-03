console.log('first')
// setInterval(() =>{
//     console.log('tik tik tik ')
// }, 1000)

let secounds = 0;
const timeId = setInterval(() => {
    // secounds++;
    console.log(++secounds)
    if( secounds > 14){
        clearInterval(timeId)
    }
}, 1000)

console.log('secound')