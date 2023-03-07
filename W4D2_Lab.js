function minusOne(number){
  return --number;
}

console.log(minusOne(10));
console.log(minusOne(100));
console.log(minusOne(Infinity));

function makeSentence(...args){
  return args.join(' ');
}
console.log(makeSentence('I', 'want', 'chimichangas'));

function getLastElement(...args){
  return args[args.length-1][args[args.length-1].length -1];
}

console.log(getLastElement([1, 2, 3, 4, 5, 6]));       // 6
console.log(getLastElement(['a', 'b', 'c']));          // 'c'
console.log(getLastElement([[1, 2, 3], [4, 5, 6]]));   // [4, 5, 6]
