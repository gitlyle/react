//objects
const bicycle = {
  color: 'blue',
  electric: false,
  start() {
    console.log('you begin to pedal the bike');
  },
};

console.log(bicycle);
console.log(bicycle.color);
bicycle.start();
console.log((bicycle.color = 'green'));
console.log(bicycle);

// console.log(bicycle.start = function (){
//   console.log ("the bike begins to roll")
// })
// bicycle.start()

console.log(bicycle.start = () => console.log('the bike begins to roll'));
bicycle.start();

// function hello(name) {
//   return {
//     studentName: name,
//   };
// }

const hello = name => ({studentName: name})
hello("james");
console.log(hello("james")
)


// console.log(hello(james))
// classes in JavaScript
class MyClass {
constructor() {
  //some data 
}

method(){
  //return

}method1(){
  //return

}method2(){
  //return

}
}
class User{
  constructor(userName, firstName, lastName, location, createdOnDate) {
    this.userName = userName;
    this.firstName = firstName;
    this.lastName = lastName;
    this.location = location;
    this.createdOnDate = createdOnDate
  }
}

const Vanessa = new User("visibly", "jess", "smith", "portugal", new Date().toLocaleDateString())
console.log(Vanessa)

class AdminUser extends User {
constructor(userName, firstName, lastName , location ,createdOnDate){
  super(userName, firstName, lastName, location, createdOnDate)
}
adminTask(){
console.log(`Admins name is ${this.userName} `)
}
}

const newUser = new AdminUser("luke", "john", "brown", "usa", new Date().toDateString())
console.log(newUser)


const rappers = [
  'tupac',
  'biggie smalls',
  'easy-e',
  'brotha lynch',
  'Dr.dre',
  'Drake'
];
//const rappersWithD = rappers.filter(w => w.indexOf[0] = w.includes("D"));
const rappersWithD =rappers.filter(rapper=> rapper[0]==="D");
console.log(rappersWithD);

const mapRappers = rappers.map(rapper => `${rapper}'s real name was..`);
console.log(mapRappers);



