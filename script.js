const data = [
    {
        name: "Paul Samuelson",
        image: "images/samuelson.jpg",
        year: "1970",
        reason: "For the scientific work through which he developed static and dynamic economic theory and actively contributed to raising the level of analysis in economic science."
    },
    {
        name: "Kenneth Arrow",
        image: "images/arrow.jpg",
        year: "1972",
        reason: "For his pioneering contributions to general economic equilibrium theory and welfare theory."
    },
    {
        name: "Daniel Kahneman",
        image: "images/kahneman.jpg",
        year: "2002",
        reason: "For having integrated insights from psychological research into economic science, especially concerning human judgment and decision-making under uncertainty."
    }
];

const tableBody = document.querySelector("#quiz-table tbody");

data.forEach((laureate, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>
            <div class="laureate">
                <img src="${laureate.image}" alt="${laureate.name}">
                <strong>${laureate.name}</strong>
            </div>
        </td>
        <td class="hidden" id="year-${index}">${laureate.year}</td>
        <td class="hidden" id="reason-${index}">${laureate.reason}</td>
        <td>
            <button onclick="reveal(${index})">Reveal</button>
        </td>
    `;

    tableBody.appendChild(row);
});

function reveal(index) {
    document.getElementById(`year-${index}`).classList.remove("hidden");
    document.getElementById(`reason-${index}`).classList.remove("hidden");
}
