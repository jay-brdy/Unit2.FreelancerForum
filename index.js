const names = ["Dr. Sigmund Freud", "Bill Gates", "Bruce Lee", "Keith Haring", "Lee Harvey Oswald", "Matin Luther King Jr", "Mozart", "Dolly Parton", "Liz", "Edwin"];
const prices = [81, 99, 76, 84, 143, 66, 73, 97, 54, 50];
const maxFreelancers = 10;

const freelancers = [
    { name: "Dr. Sigmund Freud", price: 81, occupation: "psychologist" },
    { name: "Bill Gates", price: 99, occupation: "programmer" },
    { name: "Bruce Lee", price: 76, occupation: "actor" },
    { name: "Keith Haring", price: 84, occupation: "artist" },
    { name: "Lee Harvey Oswald", price: 143, occupation: "assassin" },
    { name: "Martin Luther King Jr", price: 66, occupation: "activist" },
    { name: "Mozart", price: 73, occupation: "composer" },
    { name: "Dolly Parton", price: 97, occupation: "singer" },
    {name: "Liz", price: 54, occupation: educator},
    {name: "Edwin", price: 50, occupation: mentor}
];

const addFreelancerIntervalId = setInterval(addFreelancer, 1000);

render();
