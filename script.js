// --------------------------
// 1️⃣ Nobel Prize Data
// --------------------------
const data = [
    {
        name: "Peter A. Diamond",
        image: "./images/peter_diamond.jpg",
        year: "2010",
        hook: "A diamond takes time to find — just like a job.",
        reason: "Peter Diamond developed foundational models of labor markets where search is costly and time-consuming. His work showed that unemployment can persist even when jobs are available because workers and firms must search for suitable matches. These models explain wage dispersion, job vacancies, and the role of policy in markets with search frictions."
    },
    {
        name: "Dale T. Mortensen",
        image: "./images/dale_mortensen.jpg",
        year: "2010",
        hook: "Mortensen = jobs are constantly being created and destroyed.",
        reason: "Dale Mortensen analyzed job creation and destruction and the continuous flows of workers between employment and unemployment. His work showed how labor markets are dynamic rather than static and clarified how hiring incentives and unemployment benefits affect employment outcomes."
    },
    {
        name: "Christopher A. Pissarides",
        image: "./images/christopher_pissarides.jpg",
        year: "2010",
        hook: "Pissarides pairs workers with jobs.",
        reason: "Christopher Pissarides developed equilibrium models of unemployment combining job search, matching efficiency, and wage bargaining. His work demonstrated how labor market institutions influence unemployment rates and became central to modern labor economics through the DMP model."
    },
    {
        name: "Thomas J. Sargent",
        image: "./images/thomas_sargent.jpg",
        year: "2011",
        hook: "The sergeant commands expectations.",
        reason: "Thomas Sargent studied how expectations about government policy affect inflation, employment, and economic stability. His work emphasized credibility and showed why policies fail when people anticipate their long-term consequences."
    },
    {
        name: "Christopher A. Sims",
        image: "./images/christopher_sims.jpg",
        year: "2011",
        hook: "SIMS = simulations of the economy.",
        reason: "Christopher Sims developed vector autoregression (VAR) methods that allow economists to analyze how economies respond to policy shocks using data rather than restrictive assumptions. VARs are now standard tools in macroeconomic analysis."
    },
    {
        name: "Alvin E. Roth",
        image: "./images/alvin_roth.jpg",
        year: "2012",
        hook: "Roth wrote the rules for markets.",
        reason: "Alvin Roth applied matching theory to real-world markets such as school admissions and kidney exchanges. His work showed how carefully designed rules improve outcomes when prices cannot efficiently allocate resources."
    },
    {
        name: "Lloyd S. Shapley",
        image: "./images/lloyd_shapley.jpg",
        year: "2012",
        hook: "Shapley shapes fair outcomes.",
        reason: "Lloyd Shapley made foundational contributions to game theory and matching theory, including stable matching and the Shapley value. His work provided the mathematical foundation for modern market design."
    },
    {
        name: "Eugene F. Fama",
        image: "./images/eugene_fama.jpg",
        year: "2013",
        hook: "Fama says markets already know.",
        reason: "Eugene Fama demonstrated that asset prices reflect available information, forming the efficient market hypothesis. His work reshaped finance, investment strategies, and portfolio management."
    },
    {
        name: "Lars Peter Hansen",
        image: "./images/lars_hansen.jpg",
        year: "2013",
        hook: "Hansen handles risk mathematically.",
        reason: "Lars Peter Hansen developed econometric methods such as the generalized method of moments, allowing researchers to test asset pricing models and measure risk using real data."
    },
    {
        name: "Robert J. Shiller",
        image: "./images/robert_shiller.jpg",
        year: "2013",
        hook: "Shiller chills markets with bubbles.",
        reason: "Robert Shiller showed that asset prices fluctuate more than fundamentals alone can explain. His work emphasized psychological factors, bubbles, and market instability, founding behavioral finance."
    },
    // Add the rest of laureates similarly
];

// --------------------------
// 2️⃣ Render Table Rows
// --------------------------
const tableBody = document.querySelector("#quiz-table tbody");

data.forEach((laureate, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>
            <div class="laureate">
                <img src="${laureate.image}" alt="${laureate.name}" class="laureate-img">
                <strong>${laureate.name}</strong>
                <p><em>${laureate.hook}</em></p>
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

// --------------------------
// 3️⃣ Reveal Function
// --------------------------
function reveal(index) {
    document.getElementById(`year-${index}`).classList.remove("hidden");
    document.getElementById(`reason-${index}`).classList.remove("hidden");
}

// --------------------------
// 4️⃣ Optional: Reveal/Hide All
// --------------------------
function revealAll() {
    data.forEach((_, index) => reveal(index));
}

function hideAll() {
    data.forEach((_, index) => {
        document.getElementById(`year-${index}`).classList.add("hidden");
        document.getElementById(`reason-${index}`).classList.add("hidden");
    });
}
