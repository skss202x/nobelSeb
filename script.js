// ==================================================
// DATA
// ==================================================
const data = [
    {
        name: "Peter A. Diamond",
        image: "./images/peter_diamond.jpg",
        year: "2010",
        hook: "Explaining why jobs take time to find.",
        reason: "Awarded for analyzing markets where workers search for jobs and employers search for workers, showing that matching frictions cause unemployment even when jobs exist."
    },
    {
        name: "Dale T. Mortensen",
        image: "./images/dale_mortensen.jpg",
        year: "2010",
        hook: "Jobs are constantly changing.",
        reason: "Recognized for his work on labor market dynamics, especially how jobs are continuously created and destroyed and how that affects unemployment."
    },
    {
        name: "Christopher A. Pissarides",
        image: "./images/christopher_pissarides.jpg",
        year: "2010",
        hook: "Matching workers to jobs better.",
        reason: "Shared the prize for developing models that explain how job seekers and vacancies match up, which helps explain persistent unemployment."
    },

    {
        name: "Thomas J. Sargent",
        image: "./images/thomas_sargent.jpg",
        year: "2011",
        hook: "Learning from history to improve policy.",
        reason: "Awarded for empirical research on how economic policies and expectations about policy affect inflation and employment."
    },
    {
        name: "Christopher A. Sims",
        image: "./images/christopher_sims.jpg",
        year: "2011",
        hook: "Using data to understand the economy.",
        reason: "Shared the 2011 prize for developing statistical tools that help economists analyze how policy decisions influence the economy using real-world data."
    },

    {
        name: "Alvin E. Roth",
        image: "./images/alvin_roth.jpg",
        year: "2012",
        hook: "Designing better markets.",
        reason: "Recognized for applying matching theory to real-world problems like school placements and kidney exchanges to improve how participants are paired."
    },
    {
        name: "Lloyd S. Shapley",
        image: "./images/lloyd_shapley.jpg",
        year: "2012",
        hook: "Mathematics that makes markets fairer.",
        reason: "Awarded for foundational theory on how to fairly match participants in markets and games, laying the groundwork for efficient market design."
    },

    {
        name: "Eugene F. Fama",
        image: "./images/eugene_fama.jpg",
        year: "2013",
        hook: "Markets quickly reflect information.",
        reason: "Won for showing how financial markets incorporate information into prices, a concept known as the efficient market hypothesis."
    },
    {
        name: "Lars Peter Hansen",
        image: "./images/lars_hansen.jpg",
        year: "2013",
        hook: "Measuring risk in financial markets.",
        reason: "Recognized for developing statistical methods that help test how well economic and financial models explain real-world data."
    },
    {
        name: "Robert J. Shiller",
        image: "./images/robert_shiller.jpg",
        year: "2013",
        hook: "Understanding market ups and downs.",
        reason: "Awarded for showing how psychological factors and bubbles can make markets fluctuate beyond what traditional fundamentals predict."
    },

    {
        name: "Jean Tirole",
        image: "./images/jean_tirole.jpg",
        year: "2014",
        hook: "Balancing power in the market.",
        reason: "Won for creating frameworks to understand and regulate industries dominated by a few powerful firms."
    },

    {
        name: "Angus S. Deaton",
        image: "./images/angus_deaton.jpg",
        year: "2015",
        hook: "Understanding how people live.",
        reason: "Awarded for improving how economists use household data to understand consumption, poverty, and welfare."
    },

    {
        name: "Oliver Hart",
        image: "./images/oliver_hart.jpg",
        year: "2016",
        hook: "Why contracts matter.",
        reason: "Recognized for explaining how incomplete contracts affect businesses, ownership, and incentives."
    },
    {
        name: "Bengt Holmström",
        image: "./images/bengt_holmstrom.jpg",
        year: "2016",
        hook: "Incentives shape decisions.",
        reason: "Shared the 2016 prize for analyzing how contracts and incentives can be designed to motivate better performance."
    },

    {
        name: "Richard H. Thaler",
        image: "./images/richard_thaler.jpg",
        year: "2017",
        hook: "Humans don’t always act rationally.",
        reason: "Awarded for pioneering behavioral economics, showing how psychological biases influence economic decisions."
    },

    {
        name: "William D. Nordhaus",
        image: "./images/william_nordhaus.jpg",
        year: "2018",
        hook: "Economics meets climate change.",
        reason: "Won for integrating climate change into long-term economic analysis."
    },
    {
        name: "Paul M. Romer",
        image: "./images/paul_romer.jpg",
        year: "2018",
        hook: "Ideas drive growth.",
        reason: "Shared the 2018 prize for showing how innovation fuels long-term economic growth."
    },

    {
        name: "Abhijit Banerjee",
        image: "./images/abhijit_banerjee.jpg",
        year: "2019",
        hook: "Testing what works.",
        reason: "Recognized for using randomized controlled trials to evaluate anti-poverty policies."
    },
    {
        name: "Esther Duflo",
        image: "./images/esther_duflo.jpg",
        year: "2019",
        hook: "Experiments to fight poverty.",
        reason: "Shared the prize for innovative field experiments."
    },
    {
        name: "Michael Kremer",
        image: "./images/michael_kremer.jpg",
        year: "2019",
        hook: "Scalable evidence.",
        reason: "Awarded for designing experimental methods at scale."
    },

    {
        name: "Paul R. Milgrom",
        image: "./images/paul_milgrom.jpg",
        year: "2020",
        hook: "Better auctions.",
        reason: "Recognized for improving auction theory."
    },
    {
        name: "Robert B. Wilson",
        image: "./images/robert_wilson.jpg",
        year: "2020",
        hook: "Bidding strategies.",
        reason: "Shared the prize for explaining bidding under uncertainty."
    },

    {
        name: "David Card",
        image: "./images/david_card.jpg",
        year: "2021",
        hook: "Real-world labor insights.",
        reason: "Awarded for natural experiments in labor economics."
    },
    {
        name: "Joshua D. Angrist",
        image: "./images/joshua_angrist.jpg",
        year: "2021",
        hook: "Causal methods.",
        reason: "Recognized for causal inference methods."
    },
    {
        name: "Guido W. Imbens",
        image: "./images/guido_imbens.jpg",
        year: "2021",
        hook: "Measuring causality.",
        reason: "Shared the prize for strengthening causal conclusions."
    },

    {
        name: "Ben S. Bernanke",
        image: "./images/ben_bernanke.jpg",
        year: "2022",
        hook: "Why banks matter.",
        reason: "Awarded for analyzing banking crises."
    },
    {
        name: "Douglas W. Diamond",
        image: "./images/douglas_diamond.jpg",
        year: "2022",
        hook: "Liquidity creation.",
        reason: "Recognized for explaining why banks exist."
    },
    {
        name: "Philip H. Dybvig",
        image: "./images/philip_dybvig.jpg",
        year: "2022",
        hook: "Why bank runs happen.",
        reason: "Shared the prize for models of bank runs."
    },

    {
        name: "Claudia Goldin",
        image: "./images/claudia_goldin.jpg",
        year: "2023",
        hook: "Women’s work history.",
        reason: "Awarded for analyzing gender gaps in labor markets."
    },

    {
        name: "Daron Acemoglu",
        image: "./images/daron_acemoglu.jpg",
        year: "2024",
        hook: "Institutions shape prosperity.",
        reason: "Recognized for studies on institutions."
    },
    {
        name: "Simon Johnson",
        image: "./images/simon_johnson.jpg",
        year: "2024",
        hook: "Power and elites.",
        reason: "Awarded for research on elite power."
    },
    {
        name: "James A. Robinson",
        image: "./images/james_robinson.jpg",
        year: "2024",
        hook: "Paths to prosperity.",
        reason: "Shared the prize for institutional analysis."
    },

    {
        name: "Joel Mokyr",
        image: "./images/joel_mokyr.jpg",
        year: "2025",
        hook: "Sustained growth.",
        reason: "Awarded for explaining long-term technological progress."
    },
    {
        name: "Philippe Aghion",
        image: "./images/philippe_aghion.jpg",
        year: "2025",
        hook: "Creative destruction.",
        reason: "Recognized for growth theory."
    },
    {
        name: "Peter Howitt",
        image: "./images/peter_howitt.jpg",
        year: "2025",
        hook: "Economic reinvention.",
        reason: "Shared the prize for innovation theory."
    }
];


// ==================================================
// YEAR SUMMARIES
// ==================================================
const yearSummaries = {
    "2010": "DIAMOND miners MORTally PISSed — can’t FIND jobs ••••• (Job matching is slow and frictional )Search frictions in labour markets  ",
    "2011": "The economy SIMS what SARGENT policy EXPECTS. ••••• ( Policy works through expectations + statistics) Macroeconomics, policy & expectations",
    "2012": "ROTH designs SHAPE of the most perfect MATCH ••••• Stable matching & market design",
    "2013": "FAMA (fathermather) says markets are SMART, SHILLER says they’re CRAZY (bubbles&psychology), HANSEN mmbop band measures who’s right  ••••• Efficient markets vs bubbles",
    "2014": "monopoly game tie-roll, unable to crush smaller firms. ••••• Regulating market power (Regulating oligopolies & platforms)",
    "2015": "A dining table labeled WELFARE, DEATON (did he eat a ton) lets weighs plates and shopping baskets. ••••• Consumption, poverty & welfare (Consumption reveals wellbeing)",
    "2016": "with a incentiviced HEART signs a contract tightened with a HOLM (home) lock.••••• Contract theory & incentives (Design contracts to align incentives)",
    "2017": "THALER (taller) humans are irrational but normal ••••• Behavioral economics (People are predictably irrational)",
    "2018": "NORD (north) heats the planet, ROMER (Rome) fuels IDEAS ••••• Climate change & innovation (Growth depends on nature + ideas)",
    "2019": "BAN poverty, DO field tests, KREM (kremlin) real evidence. ••••• Field experiments in development (test solutions dont guess)",
    "2020": "WILSON (will's son) bids on MIL-GRAM (miligram) fencing shoes in an auction. •••••Auction theory & design (Better auctions = better markets)",
    "2021": "see CARD shocks, ANGRIST compares, IMBENS (immediately) proves CAUSE ••••• Causal inference in economics (what policy really causes what)",
    "2022": "BERNANKE stops the panic when DIAMOND hands with DYBVIG faces runs ••••• Banking crises & financial stability (Why banks fail & how to save them)",
    "2023": "GOLD is discovered by women ••••• Gender gaps in labor markets (Long-run gender wage & labour gaps)",
    "2024": "ACE card socked in with JOHNSON & ROBINSON — or nations FAIL ••••• Institutions determine prosperity",
    "2025": "MOKYR (monkey) builds ideas, AGHION (agents) destroys old firms, HOWITT (how to keeps growth ALIVE) •••••   Innovation replaces the old to grow (Innovation & creative destruction   "
};


// ==================================================
// GROUP BY YEAR
// ==================================================
const grouped = {};
data.forEach(item => {
    if (!grouped[item.year]) grouped[item.year] = [];
    grouped[item.year].push(item);
});


// ==================================================
// RENDER
// ==================================================
const wall = document.getElementById("wall");

Object.keys(grouped).sort().forEach(year => {

    const section = document.createElement("section");
    section.className = "year-section";

    const label = document.createElement("h2");
    label.className = "year-label";
    label.textContent = year;

    const cards = document.createElement("div");
    cards.className = "year-cards";

    let revealed = 0;

    grouped[year].forEach(l => {

        const card = document.createElement("div");
        card.className = "laureate";

        card.innerHTML = `
            <img src="${l.image}" alt="${l.name}">
            <p class="name">${l.name}</p>
            <p class="reason">${l.reason}</p>
            <p class="hook">${l.hook}</p>
        `;

        const img = card.querySelector("img");
        const name = card.querySelector(".name");
        const reason = card.querySelector(".reason");
        const hook = card.querySelector(".hook");

        img.onclick = () => name.style.display = "block";
        name.onclick = () => reason.style.display = "block";
        reason.onclick = () => {
            hook.style.display = "block";
            revealed++;
            if (revealed === grouped[year].length) {
                yearBox.style.display = "block";
            }
        };

        cards.appendChild(card);
    });

    const yearBox = document.createElement("div");
    yearBox.className = "year-textbox";
    yearBox.style.display = "none";
    yearBox.textContent = yearSummaries[year] || "";

    section.appendChild(label);
    section.appendChild(cards);
    section.appendChild(yearBox);
    wall.appendChild(section);
});
