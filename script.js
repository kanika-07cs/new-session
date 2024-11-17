/* alert('hello');
console.log(3+5);
console.log('hello '+'world'); */

/* let showQuantity=0;
let updateQuantity=showQuantity+1; */

/* const age=30;
if(age>=18){
    console.log('You can drive');
}
else{
    console.log('You can not drive');
} */

/* function sample(){
    console.log('hello');
}
sample(); */

let computerMove ; // global scope
function PickcomputerMove(){
    const randomNumber=Math.random();
      if(randomNumber>=0 && randomNumber<1/3){
        computerMove='Rock';
      }
      else if(randomNumber>=1/3 && randomNumber<2/3){
         computerMove='Paper';;
      }
      else if(randomNumber>=2/3 && randomNumber<1){
         computerMove='Scissors';
      }
}