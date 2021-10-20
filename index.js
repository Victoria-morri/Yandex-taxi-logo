const wrapperOfResult = document.querySelector('.result');
const url = 'http://jsonplaceholder.typicode.com/users';
let mainData;
fetch(url)
   .then(data => data.json())
   .then(data => mainData = data)
   .then(data => getResult())//console.log(typeof data));
// console.log(mainData);
function getRandomNumber() {
  return Math.ceil(Math.random() * 10);
}
function getResult() {
   const firstExeption = getRandomNumber();
   let secondExeption = getRandomNumber();
   if (firstExeption === secondExeption) {
      secondExeption = getRandomNumber();
   }
   let result = [];
   mainData.map(elem => {
      if (elem.id !== firstExeption && elem.id !== secondExeption) {
         result.push(`${elem.name}${elem.username}`)
      }
   })
   console.log(result);
   wrapperOfResult.innerHTML =result.join(', ');
   return result;
}