const names = ["Jay", "Adam", "Max", "Jordan", "Alyssa", "May", "Ash", "Amy", "Henry", "Anna", "Liz", "Edwin", "Charlotte", "Nick"];
const occupations = ["Psychologist", "Programmer", "Actor", "Artist", "Assassin", "Activist", "Composer", "Singer", "Educator", "DJ"];
// const maxFreelancers = 10;
const freelancers = [
    {name: "Alice", price: 30, occupation: "Writer"},
    {name: "Bob", price: 50, occupation: "Teacher"},
    {name: "Carol", price: 70, occupation: "Programmer"}
];

setInterval(generateRandomFreelancer, 1000);

// function renderFreelancers() {
//     const freelancerList = document.querySelector("#freelancer-list");
//     freelancerList.innerHTML = "";

//     freelancers.forEach(freelancer => {
//         const listItem = document.createElement("li");
//         listItem.textContent = `${freelancer.name}, ${freelancer.occupation}, starting price: $${freelancer.price.toFixed(2)}`;
//         freelancerList.appendChild(listItem);
//     });
// }
function renderFreelancers() {
    const freelancerList = document.querySelector("#freelancer-list");
    freelancerList.innerHTML = "";

    freelancers.forEach(freelancer => {
        const freelancerDiv = document.createElement("div");
        freelancerDiv.className = "freelancer";

        const nameElement = document.createElement("span");
        nameElement.textContent = freelancer.name;

        const occupationElement = document.createElement("span");
        occupationElement.textContent = freelancer.occupation;

        const priceElement = document.createElement("span");
        priceElement.textContent = `$${freelancer.price.toFixed(2)}`;

        freelancerDiv.appendChild(nameElement);
        freelancerDiv.appendChild(occupationElement);
        freelancerDiv.appendChild(priceElement);

        freelancerList.appendChild(freelancerDiv);
    });
}

function generateRandomFreelancer() {
    // if (freelancers.length < maxFreelancers) {
        const name = names[Math.floor(Math.random() * names.length)];
        const occupation = occupations[Math.floor(Math.random() * occupations.length)];
        const startingPrice = Math.floor(Math.random() * (300 - 40 + 1) + 40); // Generates a random price between 40 and 300

        const newFreelancer = { name, occupation, price: startingPrice };
        freelancers.push(newFreelancer);
        renderFreelancers();
        updateAveragePrice();
    }

function updateAveragePrice() {
    const averagePriceElement = document.querySelector("#average-price");
    const totalPrices = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
    const averagePrice = totalPrices / freelancers.length;
    averagePriceElement.textContent = averagePrice.toFixed(2); // Display average with 2 decimal places
}

// Call renderFreelancers and updateAveragePrice initially
renderFreelancers();
updateAveragePrice();