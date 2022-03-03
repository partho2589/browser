console.log(11111111)
console.log(22222222)
console.log(3333333333)
setTimeout(() => console.log(9999999999999), 5000);
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json)) 
console.log(444444444)
console.log(555555555)