// --------------------------
// 1️⃣ Nobel Prize Data (2010–2024) with local image paths
// --------------------------
const data = [
    { name: "Peter A. Diamond", image: "./images/peter_diamond.jpg", year: "2010", hook: "A diamond takes time to find — just like a job.", reason: "Peter Diamond developed foundational models of labor markets where search is costly and time-consuming. His work showed that unemployment can persist even when jobs are available because workers and firms must search for suitable matches. These models explain wage dispersion, job vacancies, and the role of policy in markets with search frictions." },
    { name: "Dale T. Mortensen", image: "./images/dale_mortensen.jpg", year: "2010", hook: "Mortensen = jobs are constantly being created and destroyed.", reason: "Dale Mortensen analyzed job creation and destruction and the continuous flows of workers between employment and unemployment. His work showed how labor markets are dynamic rather than static and clarified how hiring incentives and unemployment benefits affect employment outcomes." },
    { name: "Christopher A. Pissarides", image: "./images/christopher_pissarides.jpg", year: "2010", hook: "Pissarides pairs workers with jobs.", reason: "Christopher Pissarides developed equilibrium models of unemployment combining job search, matching efficiency, and wage bargaining. His work demonstrated how labor market institutions influence unemployment rates and became central to modern labor economics through the DMP model." },
    { name: "Thomas J. Sargent", image: "./images/thomas_sargent.jpg", year: "2011", hook: "The sergeant commands expectations.", reason: "Thomas Sargent studied how expectations about government policy affect inflation, employment, and economic stability. His work emphasized credibility and showed why policies fail when people anticipate their long-term consequences." },
    { name: "Christopher A. Sims", image: "./images/christopher_sims.jpg", year: "2011", hook: "SIMS = simulations of the economy.", reason: "Christopher Sims developed vector autoregression (VAR) methods that allow economists to analyze how economies respond to policy shocks using data rather than restrictive assumptions. VARs are now standard tools in macroeconomic analysis." },
    { name: "Alvin E. Roth", image: "./images/alvin_roth.jpg", year: "2012", hook: "Roth wrote the rules for markets.", reason: "Alvin Roth applied matching theory to real-world markets such as school admissions and kidney exchanges. His work showed how carefully designed rules improve outcomes when prices cannot efficiently allocate resources." },
    { name: "Lloyd S. Shapley", image: "./images/lloyd_shapley.jpg", year: "2012", hook: "Shapley shapes fair outcomes.", reason: "Lloyd Shapley made foundational contributions to game theory and matching theory, including stable matching and the Shapley value. His work provided the mathematical foundation for modern market design." },
    { name: "Eugene F. Fama", image: "./images/eugene_fama.jpg", year: "2013", hook: "Fama says markets already know.", reason: "Eugene Fama demonstrated that asset prices reflect available information, forming the efficient market hypothesis. His work reshaped finance, investment strategies, and portfolio management." },
    { name: "Lars Peter Hansen", image: "./images/lars_hansen.jpg", year: "2013", hook: "Hansen handles risk mathematically.", reason: "Lars Peter Hansen developed econometric methods such as the generalized method of moments, allowing researchers to test asset pricing models and measure risk using real data." },
    { name: "Robert J. Shiller", image: "./images/robert_shiller.jpg", year: "2013", hook: "Shiller chills markets with bubbles.", reason: "Robert Shiller showed that asset prices fluctuate more than fundamentals alone can explain. His work emphasized psychological factors, bubbles, and market instability, founding behavioral finance." },
    { name: "Jean Tirole", image: "./images/jean_tirole.jpg", year: "2014", hook: "Tirole is the referee of powerful firms.", reason: "Jean Tirole analyzed markets dominated by large firms and developed tools for effective regulation. His work is central to competition policy, antitrust law, and regulatory economics." },
    { name: "Angus Deaton", image: "./images/angus_deaton.jpg", year: "2015", hook: "Deaton studies how people live.", reason: "Angus Deaton advanced the study of consumption, poverty, and welfare measurement. He improved methods for using household data and showed how consumption reflects living standards better than income." },
    { name: "Oliver Hart", image: "./images/oliver_hart.jpg", year: "2016", hook: "Contracts are written from the heart — but incomplete.", reason: "Oliver Hart developed contract theory explaining how incomplete contracts shape firm boundaries, ownership, and incentives. His work informs corporate governance and public-private partnerships." },
    { name: "Bengt Holmström", image: "./images/bengt_holmstrom.jpg", year: "2016", hook: "Holmström holds incentives together.", reason: "Bengt Holmström analyzed moral hazard and incentive design, explaining how compensation and performance measurement motivate behavior in organizations." },
    { name: "Richard H. Thaler", image: "./images/richard_thaler.jpg", year: "2017", hook: "Thaler nudges behavior.", reason: "Richard Thaler integrated psychology into economics, identifying systematic biases in decision-making and introducing nudging as a policy tool." },
    { name: "William D. Nordhaus", image: "./images/william_nordhaus.jpg", year: "2018", hook: "Nordhaus puts climate into growth models.", reason: "William Nordhaus developed integrated assessment models linking economic growth and climate change, shaping climate policy analysis and carbon pricing." },
    { name: "Paul M. Romer", image: "./images/paul_romer.jpg", year: "2018", hook: "Romer shows ideas drive growth.", reason: "Paul Romer developed endogenous growth theory, showing that innovation and ideas are central drivers of long-run economic growth." },
    { name: "Abhijit Banerjee", image: "./images/abhijit_banerjee.jpg", year: "2019", hook: "Banerjee bans guessing — tests policies.", reason: "Abhijit Banerjee used randomized controlled trials to evaluate development policies, making poverty reduction evidence-based." },
    { name: "Esther Duflo", image: "./images/esther_duflo.jpg", year: "2019", hook: "Duflo does field experiments.", reason: "Esther Duflo pioneered field experiments in development economics, focusing on education, health, and poverty interventions." },
    { name: "Michael Kremer", image: "./images/michael_kremer.jpg", year: "2019", hook: "Kremer creates scalable experiments.", reason: "Michael Kremer contributed to experimental development economics and studied innovation incentives in low-income countries." },
    { name: "Paul R. Milgrom", image: "./images/paul_milgrom.jpg", year: "2020", hook: "Milgrom makes auctions smarter.", reason: "Paul Milgrom improved auction theory and designed auction formats used in spectrum sales and other markets worldwide." },
    { name: "Robert B. Wilson", image: "./images/robert_wilson.jpg", year: "2020", hook: "Wilson warns about information gaps.", reason: "Robert Wilson analyzed auctions under asymmetric information, laying the foundation for modern auction theory." },
    { name: "David Card", image: "./images/david_card.jpg", year: "2021", hook: "Card pulls natural experiments.", reason: "David Card used natural experiments to study labor markets, reshaping understanding of minimum wages and immigration." },
    { name: "Joshua D. Angrist", image: "./images/joshua_angrist.jpg", year: "2021", hook: "Angrist enforces causal discipline.", reason: "Joshua Angrist advanced instrumental variable methods for causal inference in applied economics." },
    { name: "Guido W. Imbens", image: "./images/guido_imbens.jpg", year: "2021", hook: "Imbens improves treatment effects.", reason: "Guido Imbens developed statistical frameworks for estimating causal relationships in observational data." },
    { name: "Ben S. Bernanke", image: "./images/ben_bernanke.jpg", year: "2022", hook: "Bernanke studies financial collapse.", reason: "Ben Bernanke analyzed how bank failures amplify economic downturns and why financial crises cause severe damage." },
    { name: "Douglas W. Diamond", image: "./images/douglas_diamond.jpg", year: "2022", hook: "Diamond shows banks transform time.", reason: "Douglas Diamond explained why banks exist by showing how they transform short-term deposits into long-term loans." },
    { name: "Philip H. Dybvig", image: "./images/philip_dybvig.jpg", year: "2022", hook: "Dybvig explains bank runs.", reason: "Philip Dybvig co-developed models explaining how bank runs can occur and why deposit insurance prevents them." },
    { name: "Claudia Goldin", image: "./images/claudia_goldin.jpg", year: "2023", hook: "Goldin traces women’s work over time.", reason: "Claudia Goldin documented the historical evolution of women’s labor market outcomes, explaining gender wage gaps and participation trends." },
    { name: "Daron Acemoglu", image: "./images/daron_acemoglu.jpg", year: "2024", hook: "Ace institutions shape prosperity.", reason: "Daron Acemoglu showed how inclusive institutions drive long-run growth while extractive institutions hinder development." },
    { name: "Simon Johnson", image: "./images/simon_johnson.jpg", year: "2024", hook: "Johnson studies elite power.", reason: "Simon Johnson analyzed how political and economic elites shape institutions and development outcomes." },
    { name: "James A. Robinson", image: "./images/james_robinson.jpg", year: "2024", hook: "Robinson maps roads to prosperity.", reason: "James Robinson used historical evidence to show how political institutions determine long-run economic trajectories." }
];

// --------------------------
// 1️⃣ Nobel Prize Data (2010–2024)
// --------------------------
const data = [ /* KEEP YOUR DATA EXACTLY AS-IS */ ];


// --------------------------
// 2️⃣ Get wall container
// --------------------------
const wall = document.getElementById("wall");


// --------------------------
// 3️⃣ Group data by year
// --------------------------
const grouped = {};

data.forEach(l => {
    if (!grouped[l.year]) {
        grouped[l.year] = [];
    }
    grouped[l.year].push(l);
});


// --------------------------
// 4️⃣ Render by year
// --------------------------
Object.keys(grouped)
    .sort()
    .forEach(year => {

        const section = document.createElement("section");
        section.className = "year-section";

        const label = document.createElement("h2");
        label.className = "year-label";
        label.textContent = year;

        const cards = document.createElement("div");
        cards.className = "year-cards";

        grouped[year].forEach((l, i) => {
            const card = document.createElement("div");
            card.className = "laureate";

            card.innerHTML = `
                <img src="${l.image}" alt="${l.name}">
                <p class="name">${l.name}</p>
                <p class="year">${l.year}</p>
                <p class="reason">${l.reason}</p>
                <p class="hook">${l.hook}</p>
            `;

            const img = card.querySelector("img");
            const name = card.querySelector(".name");
            const yearEl = card.querySelector(".year");
            const reason = card.querySelector(".reason");
            const hook = card.querySelector(".hook");

            // initial state
            [name, yearEl, reason, hook].forEach(el => el.classList.remove("visible"));

            img.onclick = () => name.classList.add("visible");
            name.onclick = () => yearEl.classList.add("visible");
            yearEl.onclick = () => reason.classList.add("visible");
            reason.onclick = () => hook.classList.add("visible");

            cards.appendChild(card);
        });

        section.appendChild(label);
        section.appendChild(cards);
        wall.appendChild(section);
    });





