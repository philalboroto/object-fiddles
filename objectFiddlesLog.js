/**
 * Created by philalboroto on 9/21/14.
 */
//Create an object called me. Give it a key of name with the value being your name, and another key of age with the value being your age. Then alert your name using dot notation.

//code here
var me = {name:'Phil', age:32};
alert(me.name);


/**
 * Created by philalboroto on 9/21/14.
 */
//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday.
// Have the values to those keys be your favorite thing in that category.

var favorateThings = {band:'3plus', food:'steak', person:'Batman', book:'Hatchet', movie:'back to the future', holiday:'Christmas'};


//-----------

//After you've made your object, add another key named 'car' with the value being your favorite car and then another key
// named 'brand' with the value being your favorite brand.

favorateThings.car = 'subaru';
favorateThings.brand = 'volcom';


//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your
// favoriteThings object to be '50 Shades of Gray'.

favorateThings.food = 'Lettuce';
favorateThings.book = '50 Shades of Gray';

//Now, alert your favorite person, then alert your favorite book.

alert(favorateThings.person + favorateThings.book);

//--------------

//Create an empty Object called backPack. Now, create a variable called 'item' and set it equal to firstPocket.
// Now, using bracket notation, add whatever 'item' represents as a property (or key) on the backPack object and
// set it's value equal to 'chapstick'. Now using dot notation add a key (or property) to your backPack object that
// is named color, with the value being the color of your backpack.

//Replace this with your code.
var backPack = {};
var item = 'firstPocket';
backPack.whatever = 'chapstick';
backPack.color = 'black';

//alert(backPack.whatever);

//After you do the above, alert your entire backPack object.

//Replace this with your code, then click 'Run'.

//You probably noticed that it just alerted [Object Object].
// Alerting to see the data in your Object doesn't work so well.
// Instead, console.log your whole backPack object and then check out the console.

//Replace this with your code, then click 'Run'.

console.log(backPack);

//------------

//Create another 'me' object with the following properties name, age, height, gender, married, eyeColor, hairColor.
// Fill those properties in with the appropriate values.

//Replace this with your code.

var me = {name:'Phil', age: 32, height: '5 foot 7 inches', gender:'male', married:'single', eyeColor:'brown', hairColor:'black'}

//Now, loop through your object and alert every value. *Tyler --> 24 --> 6'0 --> Male, etc etc

//for (var i = 0; i < me.length; i++) {
//    alert(me.i)
//}

for (var i in me) {
    alert(me[i]);
}

//--------

//Create an Object called 'album' with 5 keys named different song titles that you make up,
// with the values being the length of each song.

//Replace this with your code.
var album = {song1: 1, song2: 2, song3: 3, song4: 4, song5: 5};


//Now, loop through your album object alerting every song title individually.

//Replace this with your code.
for (var i in album) {
    alert(i);
}


//--------

//Create an object called states that has 5 US states as properties with
// the values being their population (doesn't have to be accurate).

//Replace this with your code
var states = {hawaii:10000, alaska:20000, alabama:30000, utah:40000, idaho:50000};

//Now, loop through your states object and if the states population is greater than 30K, alert that state.

//Reaplce this with your code.

for (var i in states) {
    if (states[i] > 30000) {
        alert(i);
    }
}

//-------

var user = {
    name: 'Tyler McGinnis',
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}

//Above you're given a user object. Loop through the user object checking to make sure that each value is truthy.
// If it's not truthy, remove it from the object. hint: 'delete'.

//Replace with code

for (var i in user) {
    if (user[i] !== true) {
        delete user[i];
    }
}

//Once you get your truthy array, Change the remaining values in the array to be specific
// to you (name: 'your name', username: 'your username'), rather than my information.

//Replace with Code
user.name = 'Phil Alboroto';
user.username = 'philAlboroto'

//Now console.log your object and make sure it looks right.

console.log(user);

//-------
var user = {
    name: 'Tyler McGinnis',
    age: 24,
    pwHash: 'U+Ldlngx2BYQk',
    email: 'tylermcginnis33@gmail.com',
    birthday: '05/02/1990',
    username: 'tylermcginnis33',
    sayName: function(){
        alert('Email is : ' + this.email);
    }
};

//Let's say I, the user, decided to change my name and email address to the following
// name -> 'Tyler S. McGinnis', email -> 'tyler.mcginnis@devmounta.in'. Make that change.

//Replace this with your code.
user.name = 'Tyler S. McGinnis';
user.email = 'tyler.mcginnis@devmounta.in'

//Now call the sayName method that's on the user object which will alert the users email

user.sayName();

//------
//create an empty object called methodCollection.

var methodCollection = {};

//Now add two methods (functions that are properties on objects) to your methodCollection object.
// One called 'alertHello' which alerts 'hello' and another method called logHello which logs 'hello' to the console.

methodCollection.alertHello = alert('hello');
methodCollection.logHello = console.log('hello');

//Now call your alertHello and logHello methods.

methodCollection.alertHello();
methodCollection.logHello();

//--------
var devMountainEmployees = [];

var tyler = {
    name: 'Tyler',
    position: 'Lead Instructor/Engineer',
    spiritAnimal: 'Honey Badger'
};

var cahlan = {
    name: 'Cahlan',
    position: 'CEO',
    spiritAnimal: 'butterfly'
};

var ryan = {
    name: 'Ryan',
    position: 'Marketing',
    spiritAnimal: 'fox'
};

var colt = {
    name: 'Colt',
    position: 'Everything really',
    spiritAnimal: 'Young Male Horse'
}

//Above you're given an empty array with four objects. Fill the devMountainEmployees array with those four objects.
// After that console.log the length of the Array and make sure that it's equal to 4.

devMountainEmployees = [tyler, cahlan, ryan, colt];
console.log(devMountainEmployees.length);

//Now let's say Cahlan has a mental breakdown and has to take a leave of absense to 'find himself'.
// Loop through your devMountainEmployees until you find cahlan, then remove him from the array.

for (var i = 0; i < devMountainEmployees.length; i++) {
    if (devMountainEmployees[i].name === 'Cahlan') {
        devMountainEmployees.splice(i,1);
    }
}

//Now console.log your final array and make sure that it's correct.
console.log(devMountainEmployees.length);


//-------
//Now we're going to combine what we've learned today (objects) with what we learned yesterday (arrays).
// Yeah, take a deep breathe. You're ready for this, promise. Let's think back to our itunes example (tylermcginnis.com/itunes).
// Notice that when you type in an artist name, iTunes gives us back a LOT of data. What they're really giving us is an
// Array full of Objects. It probably looks something like this.

var data = [
    {
        artist: 'shakira',
        album: 'hips don\'t lie',
        tracks: 16,
    },
    {
        artist: 'shakira',
        album: 'mariposa',
        tracks: 12,
    },
    {
        artist: 'shakira',
        album: 'greatest hits',
        tracks: 19
    }
];


//A very clean way to pass around large LISTS (arrays) of COLLECTIONS (objects) of Data is to have an Array full of objects.


//Create an empty array called users.

var users = [];

//Now add three user objects to your users array. Each user object should contain the
// following properties. name, email, password, username.

//include this object as one of your indices in your array.
var user1 = {
    name: 'Tyler McGinnis',
    email: 'tylermcginnis33@gmail.com',
    password: 'iLoveJavaScript',
    username: 'infiniateLoop'
}

var user2 = {
    name: 'Manny Alboroto',
    email: 'MannyAlboroto@gmail.com',
    password: 'mannyiscool',
    username: 'mannyAlboroto'
}

var user3 = {
    name: 'Michael Alboroto',
    email: 'MichaelAlboroto@gmail.com',
    password: 'michaeliscool',
    username: 'michaelAlboroto'
}

var user4 = {
    name: 'Russell Alboroto',
    email: 'RussellAlboroto@gmail.com',
    password: 'russelliscool',
    username: 'russellAlboroto'
}

users = [user1, user2, user3, user4];

//Now you have a very common data structure. Twitter is a good use case.
// It's easy to imagine that your followers list on Twitter is an Array full or objects
// and those objects contain properties about the specific person you follow.


//Now let's say that Tyler decided to delete his account.
// Loop through your array of objects until you find Tyler's account (use tylermcginnis33@gmail.com to find him).
// Once you find the particular indice he's located in, delete him from the array.

for (var i = 0; i < users.length) {
    if (users[i].email === 'tylermcginnis33@gmail.com') {
        users.splice(i,1);
    }
}


//The activity we just did is very much how data works in 'the real world'.

