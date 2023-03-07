////////////////////////////////
// Easy Going
////////////////////////////////
for( let i = 1 ; i <= 20; i++){
  console.log(i);
}
////////////////////////////////
// Get Even
////////////////////////////////
for( let i = 0 ; i <= 200; i+=2){
  console.log(i);
}

////////////////////////////////
// Fizz Buzz
////////////////////////////////
for( let i = 1 ; i <= 100; i++){
  let str='';
  if(i%3 === 0) str += 'Fizz';
  if(i%5 === 0) str += 'Buzz';
  if( str === '') {
    console.log(i);
  } else {
  console.log(str);
  }
}

////////////////////////////////
// Wild Wild Life
////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

plantee[2]++;
wolfy[3] = 'Gotham City';
dart.push('Hawkins');
wolfy[0] = 'Gameboy';
console.log(wolfy,sharky,plantee,porgee,dart);
////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
const ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];
for( const Turtles of ninjaTurtles){
  console.log(Turtles.toUpperCase());
}

////////////////////////////////
// Methods, Revisited
////////////////////////////////


////////////////////////////////
// Where is Waldo
////////////////////////////////


////////////////////////////////
//  Excited Kitten
////////////////////////////////


////////////////////////////////
//  Find the Median
////////////////////////////////