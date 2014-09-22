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

