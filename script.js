// --------------------------
// 1️⃣ Nobel Prize Data
// --------------------------
const data = [
    {
        name: "Peter A. Diamond",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Peter_Diamond_%28economist%29.jpg",
        year: "2010",
        hook: "A diamond takes time to find — just like a job.",
        reason: "Peter Diamond developed foundational models of labor markets where search is costly and time-consuming. His work showed that unemployment can persist even when jobs are available because workers and firms must search for suitable matches. These models explain wage dispersion, job vacancies, and the role of policy in markets with search frictions."
    },
    {
        name: "Dale T. Mortensen",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Dale_T._Mortensen.jpg",
        year: "2010",
        hook: "Mortensen = jobs are constantly being created and destroyed.",
        reason: "Dale Mortensen analyzed job creation and destruction and the continuous flows of workers between employment and unemployment. His work showed how labor markets are dynamic rather than static and clarified how hiring incentives and unemployment benefits affect employment outcomes."
    },
    {
        name: "Christopher A. Pissarides",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Christopher_Pissarides.jpg",
        year: "2010",
        hook: "Pissarides pairs workers with jobs.",
        reason: "Christopher Pissarides developed equilibrium models of unemployment combining job search, matching efficiency, and wage bargaining. His work demonstrated how labor market institutions influence unemployment rates and became central to modern labor economics through the DMP model."
    },
    {
        name: "Thomas J. Sargent",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Thomas_J._Sargent.jpg",
        year: "2011",
        hook: "The sergeant commands expectations.",
        reason: "Thomas Sargent studied how expectations about government policy affect inflation, employment, and economic stability. His work emphasized credibility and showed why policies fail when people anticipate their long-term consequences."
    },
    {
        name: "Christopher A. Sims",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Christopher_Sims.jpg",
        year: "2011",
        hook: "SIMS = simulations of the economy.",
        reason: "Christopher Sims developed vector autoregression (VAR) methods that allow economists to analyze how economies respond to policy shocks using data rather than restrictive assumptions. VARs are now standard tools in macroeconomic analysis."
    },
    {
        name: "Alvin E. Roth",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Alvin_E._Roth.jpg",
        year: "2012",
        hook: "Roth wrote the rules for markets.",
        reason: "Alvin Roth applied matching theory to real-world markets such as school admissions and kidney exchanges. His work showed how carefully designed rules improve outcomes when prices cannot efficiently allocate resources."
    },
    {
        name: "Lloyd S. Shapley",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Lloyd_Shapley.jpg",
        year: "2012",
        hook: "Shapley shapes fair outcomes.",
        reason: "Lloyd Shapley made foundational contributions to game theory and matching theory, including stable matching and the Shapley value. His work provided the mathematical foundation for modern market design."
    },
    {
        name: "Eugene F. Fama",
        image: "https://upload.wikimedia.org/wikipedia/commons/7/77/Eugene_Fama.jpg",
        year: "2013",
        hook: "Fama says markets already know.",
        reason: "Eugene Fama demonstrated that asset prices reflect available information, forming the efficient market hypothesis. His work reshaped finance, investment strategies, and portfolio management."
    },
    {
        name: "Lars Peter Hansen",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/19/Lars_Peter_Hansen.jpg",
        year: "2013",
        hook: "Hansen handles risk mathematically.",
        reason: "Lars Peter Hansen developed econometric methods such as the generalized method of moments, allowing researchers to test asset pricing models and measure risk using real data."
    },
    {
        name: "Robert J. Shiller",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/58/Robert_Shiller.jpg",
        year: "2013",
        hook: "Shiller chills markets with bubbles.",
        reason: "Robert Shiller showed that asset prices fluctuate more than fundamentals alone can explain. His work emphasized psychological factors, bubbles, and market instability, founding behavioral finance."
    },
    {
        name: "Jean Tirole",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Jean_Tirole.jpg",
        year: "2014",
        hook: "Tirole is the referee of powerful firms.",
        reason: "Jean Tirole analyzed markets dominated by large firms and developed tools for effective regulation. His work is central to competition policy, antitrust law, and regulatory economics."
    },
    {
        name: "Angus Deaton",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/93/Angus_Deaton.jpg",
        year: "2015",
        hook: "Deaton studies how people live.",
        reason: "Angus Deaton advanced the study of consumption, poverty, and welfare measurement. He improved methods for using household data and showed how consumption reflects living standards better than income."
    },
    {
        name: "Oliver Hart",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/02/Oliver_Hart.jpg",
        year: "2016",
        hook: "Contracts are written from the heart — but incomplete.",
        reason: "Oliver Hart developed contract theory explaining how incomplete contracts shape firm boundaries, ownership, and incentives. His work informs corporate governance and public-private partnerships."
    },
    {
        name: "Bengt Holmström",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Bengt_Holmstrom.jpg",
        year: "2016",
        hook: "Holmström holds incentives together.",
        reason: "Bengt Holmström analyzed moral hazard and incentive design, explaining how compensation and performance measurement motivate behavior in organizations."
    },
    {
        name: "Richard H. Thaler",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Richard_Thaler.jpg",
        year: "2017",
        hook: "Thaler nudges behavior.",
        reason: "Richard Thaler integrated psychology into economics, identifying systematic biases in decision-making and introducing nudging as a policy tool."
    },
    {
        name: "William D. Nordhaus",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/William_Nordhaus.jpg",
        year: "2018",
        hook: "Nordhaus puts climate into growth models.",
        reason: "William Nordhaus developed integrated assessment models linking economic growth and climate change, shaping climate policy analysis and carbon pricing."
    },
    {
        name: "Paul M. Romer",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Paul_Romer.jpg",
        year: "2018",
        hook: "Romer shows ideas drive growth.",
        reason: "Paul Romer developed endogenous growth theory, showing that innovation and ideas are central drivers of long-run economic growth."
    },
    {
        name: "Abhijit Banerjee",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Abhijit_Banerjee.jpg",
        year: "2019",
        hook: "Banerjee bans guessing — tests policies.",
        reason: "Abhijit Banerjee used randomized controlled trials to evaluate development policies, making poverty reduction evidence-based."
    },
    {
        name: "Esther Duflo",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Esther_Duflo.jpg",
        year: "2019",
        hook: "Duflo does field experiments.",
        reason: "Esther Duflo pioneered field experiments in development economics, focusing on education, health, and poverty interventions."
    },
    {
        name: "Michael Kremer",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Michael_Kremer.jpg",
        year: "2019",
        hook: "Kremer creates scalable experiments.",
        reason: "Michael Kremer contributed to experimental development economics and studied innovation incentives in low-income countries."
    },
    {
        name: "Paul R. Milgrom",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/59/Paul_Milgrom.jpg",
        year: "2020",
        hook: "Milgrom makes auctions smarter.",
        reason: "Paul Milgrom improved auction theory and designed auction formats used in spectrum sales and other markets worldwide."
    },
    {
        name: "Robert B. Wilson",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Robert_Wilson_economist.jpg",
        year: "2020",
        hook: "Wilson warns about information gaps.",
        reason: "Robert Wilson analyzed auctions under asymmetric information, laying the foundation for modern auction theory."
    },
    {
        name: "David Card",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/62/David_Card.jpg",
        year: "2021",
        hook: "Card pulls natural experiments.",
        reason: "David Card used natural experiments to study labor markets, reshaping understanding of minimum wages and immigration."
    },
    {
        name: "Joshua D. Angrist",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Joshua_D._Angrist.jpg",
        year: "2021",
        hook: "Angrist enforces causal discipline.",
        reason: "Joshua Angrist advanced instrumental variable methods for causal inference in applied economics."
    },
    {
        name: "Guido W. Imbens",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/55/Guido_Imbens.jpg",
        year: "2021",
        hook: "Imbens improves treatment effects.",
        reason: "Guido Imbens developed statistical frameworks for estimating causal relationships in observational data."
    },
    {
        name: "Ben S. Bernanke",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Ben_Bernanke_official.jpg",
        year: "2022",
        hook: "Bernanke studies financial collapse.",
        reason: "Ben Bernanke analyzed how bank failures amplify economic downturns and why financial crises cause severe damage."
    },
    {
        name: "Douglas W. Diamond",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Douglas_Diamond.jpg",
        year: "2022",
        hook: "Diamond shows banks transform time.",
        reason: "Douglas Diamond explained why banks exist by showing how they transform short-term deposits into long-term loans."
    },
    {
        name: "Philip H. Dybvig",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/23/Philip_Dybvig.jpg",
        year: "2022",
        hook: "Dybvig explains bank runs.",
        reason: "Philip Dybvig co-developed models explaining how bank runs can occur and why deposit insurance prevents them."
    },
    {
        name: "Claudia Goldin",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Claudia_Goldin.jpg",
        year: "2023",
        hook: "Goldin traces women’s work over time.",
        reason: "Claudia Goldin documented the historical evolution of women’s labor market outcomes, explaining gender wage gaps and participation trends."
    },
    {
        name: "Daron Acemoglu",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Daron_Acemoglu.jpg",
        year: "2024",
        hook: "Ace institutions shape prosperity.",
        reason: "Daron Acemoglu showed how inclusive institutions drive long-run growth while extractive institutions hinder development."
    },
    {
        name: "Simon Johnson",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/34/Simon_Johnson_economist.jpg",
        year: "2024",
        hook: "Johnson studies elite power.",
        reason: "Simon Johnson analyzed how political and economic elites shape institutions and development outcomes."
    },
    {
        name: "James A. Robinson",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/0d/James_A._Robinson.jpg",
        year: "2024",
        hook: "Robinson maps roads to prosperity.",
        reason: "James Robinson used historical evidence to show how political institutions determine long-run economic trajectories."
    }
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
