const names = ["Jay", "Adam", "Max", "Jordan", "Alyssa", "May", "Ash", "Amy", "Henry", "Anna", "Liz", "Edwin", "Charlotte", "Nick"];
const occupations = ["psychologist", "programmer", "actor", "artist", "assassin", "activist", "composer", "singer", "educator", "DJ"];
// const maxFreelancers = 10;
const freelancers = [
    {name: "Alice", price: 30, occupation: "writer"},
    {name: "Bob", price: 50, occupation: "teacher"},
    {name: "Carol", price: 70, occupation: "programmer"}
];

setInterval(generateRandomFreelancer, 1000);

function renderFreelancers() {
    const freelancerList = document.querySelector("#freelancer-list");
    freelancerList.innerHTML = "";

    freelancers.forEach(freelancer => {
        const listItem = document.createElement("li");
        listItem.textContent = `${freelancer.name}, ${freelancer.occupation}, starting price: $${freelancer.price.toFixed(2)}`;
        freelancerList.appendChild(listItem);
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