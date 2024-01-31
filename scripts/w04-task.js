/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: 'Josue Hernandez',
    photo: 'images/me.png',
    favoriteFoods: [
        'Tacos',
        'Quesadillas',
        'Cemitas'
    ],
    hobbies: [
        'Play Basketball',
        'Study the scriptures',
        'Spend time with the wife'
    ],
    placesLived: [],
};
/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {place: 'Juarez, CHI',
    length: '19 years'
});

myProfile.placesLived.push(
    {place: 'Puebla, PUE',
    length: '2 years'
});

myProfile.placesLived.push(
    {place: 'El Paso, TX',
    length: '1 year'
});

/* DOM Manipulation - Output */

/* Name */

document.getElementById('name').textContent = myProfile.name;

/* Photo with attributes */

document.querySelector('#photo').setAttribute('src',myProfile.photo);
document.querySelector('#photo').setAttribute('alt',myProfile.name);

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.getElementById('favorite-foods').appendChild(li);
});


/* Hobbies List */

myProfile.hobbies.forEach(hobbie => {
    let li = document.createElement('li');
    li.textContent = hobbie;
    document.getElementById('hobbies').appendChild(li);
});


/* Places Lived DataList */
console.log(myProfile.placesLived);

myProfile.placesLived.forEach(element => {
    let dt = document.createElement('dt');
    let dd = document.createElement('dd');
    dt.textContent = element.place;
    dd.textContent = element.length;
    document.getElementById('places-lived').appendChild(dt);
    document.getElementById('places-lived').appendChild(dd);
});
