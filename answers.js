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
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
//1
favMovies.sort(); //sort in place, returns reference to original array which is now sorted
//2
favMovies.pop();
//3
favMovies.push('Guardians of the Galaxy');
//4
favMovies.reverse();
//5
favMovies.shift();
//6
favMovies.unshift() //returns new length of array 
//7 yes this did alter our array
favMovies.splice(favMovies.indexOf('Django Unchained'),1,'Avatar');
//8 no this did not alter our array
const slice = favMovies.slice(favMovies.length/2);
//9 slice returns copy of the sliced portion but does not actually touch original array
console.log(slice);
//10
console.log(favMovies);
console.log(slice);
//11 we get -1
console.log(favMovies.indexOf('Volver'));
/*12. favMovies is a reference to an array, the reference cannot be changed but
the contents can be, we can use let if we want to replace the array or 'lose'/delete it
and reuse the variable for something else
*/

////////////////////////////////
// Where is Waldo
////////////////////////////////
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];

whereIsWaldo.splice(1,1);
whereIsWaldo[1][2] = 'No One';
console.log(whereIsWaldo[2][1][1]);
////////////////////////////////
//  Excited Kitten
////////////////////////////////
//1.
for( let i = 0 ; i < 20 ; i++){
  console.log("Love me, pet me! HSSSSSS!");
}
//2.
const catcries = [
  "...human...why you taking pictures of me?...",
 "...the catnip made me do it...",
   "...why does the red dot always get away..."
  ]
for( let i = 0 ; i < 20 ; i++){
  if(i%2 === 0){
    console.log(catcries[Math.floor(Math.random()* 3)])
  }
  console.log("Love me, pet me! HSSSSSS!");
}
////////////////////////////////
//  Find the Median
////////////////////////////////
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
//Expected output: => 15
nums.sort();
if (nums.length%2 === 0){
  console.log(nums[nums.length/2]+nums[(nums.length/2)-1])
}
else{
  console.log(nums[Math.floor(nums.length/2)]);
}