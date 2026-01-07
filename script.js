


// --------------------------
// DATA (example – keep your full list)
// --------------------------

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
        reason: "Won for integrating climate change into long-term economic analysis to understand the costs and benefits of environmental policy."
    },
    { 
        name: "Paul M. Romer",
        image: "./images/paul_romer.jpg",
        year: "2018",
        hook: "Ideas drive growth.",
        reason: "Shared the 2018 prize for showing how technological innovation and ideas fuel long-term economic growth."
    },
    { 
        name: "Abhijit Banerjee",
        image: "./images/abhijit_banerjee.jpg",
        year: "2019",
        hook: "Testing what works in the real world.",
        reason: "Recognized for using randomized controlled trials to evaluate how policies affect poverty and development."
    },
    { 
        name: "Esther Duflo",
        image: "./images/esther_duflo.jpg",
        year: "2019",
        hook: "Experiments to fight poverty.",
        reason: "Shared the 2019 prize for innovative field experiments that identify effective anti-poverty policies."
    },
    { 
        name: "Michael Kremer",
        image: "./images/michael_kremer.jpg",
        year: "2019",
        hook: "Scalable evidence on poverty.",
        reason: "Awarded for helping design experimental methods to test real-world development interventions at scale."
    },
    { 
        name: "Paul R. Milgrom",
        image: "./images/paul_milgrom.jpg",
        year: "2020",
        hook: "Better auctions for modern markets.",
        reason: "Recognized for improving auction theory and designing auction formats used worldwide."
    },
    { 
        name: "Robert B. Wilson",
        image: "./images/robert_wilson.jpg",
        year: "2020",
        hook: "Understanding bidding strategies.",
        reason: "Shared the 2020 prize for explaining how people strategize in auctions with incomplete information."
    },
    { 
        name: "David Card",
        image: "./images/david_card.jpg",
        year: "2021",
        hook: "Real-world labor insights.",
        reason: "Awarded for using natural experiments to better understand labor markets and the effects of policy."
    },
    { 
        name: "Joshua D. Angrist",
        image: "./images/joshua_angrist.jpg",
        year: "2021",
        hook: "Causal relationships in economics.",
        reason: "Recognized for advancing methods that help economists identify cause-and-effect in observational data."
    },
    { 
        name: "Guido W. Imbens",
        image: "./images/guido_imbens.jpg",
        year: "2021",
        hook: "Making causation measurable.",
        reason: "Shared the 2021 prize for frameworks that strengthen causal conclusions in empirical research."
    },
    { 
        name: "Ben S. Bernanke",
        image: "./images/ben_bernanke.jpg",
        year: "2022",
        hook: "Why banks matter.",
        reason: "Awarded for analyzing how bank failures deepen recessions and how policy can mitigate financial crises."
    },
    { 
        name: "Douglas W. Diamond",
        image: "./images/douglas_diamond.jpg",
        year: "2022",
        hook: "Banks transform money.",
        reason: "Recognized for explaining why banks exist and how they provide liquidity by transforming short-term deposits into long-term loans."
    },
    { 
        name: "Philip H. Dybvig",
        image: "./images/philip_dybvig.jpg",
        year: "2022",
        hook: "Why bank runs happen.",
        reason: "Shared the 2022 prize for models showing how bank runs occur and why deposit insurance stabilizes banking."
    },
    { 
        name: "Claudia Goldin",
        image: "./images/claudia_goldin.jpg",
        year: "2023",
        hook: "Tracing women’s work history.",
        reason: "Awarded for her comprehensive historical analysis of women’s labor market outcomes and gender pay gaps. :contentReference[oaicite:1]{index=1}"
    },
    { 
        name: "Daron Acemoglu",
        image: "./images/daron_acemoglu.jpg",
        year: "2024",
        hook: "Institutions shape prosperity.",
        reason: "Recognized for studies showing how economic and political institutions influence long-run national prosperity and inequity. :contentReference[oaicite:2]{index=2}"
    },
    { 
        name: "Simon Johnson",
        image: "./images/simon_johnson.jpg",
        year: "2024",
        hook: "Power, elites and prosperity.",
        reason: "Awarded for research on how elite power structures and institutional choices shape economic development. :contentReference[oaicite:3]{index=3}"
    },
    { 
        name: "James A. Robinson",
        image: "./images/james_robinson.jpg",
        year: "2024",
        hook: "Paths to prosperity.",
        reason: "Recognized for showing how historical institutional differences lead to divergent economic outcomes across nations. :contentReference[oaicite:4]{index=4}"
    },
    { 
        name: "Joel Mokyr",
        image: "./images/joel_mokyr.jpg",
        year: "2025",
        hook: "Why growth becomes sustained.",
        reason: "Awarded for identifying the conditions that allow technological progress to drive long-term economic growth. :contentReference[oaicite:5]{index=5}"
    },
    { 
        name: "Philippe Aghion",
        image: "./images/philippe_aghion.jpg",
        year: "2025",
        hook: "Creative destruction theory.",
        reason: "Recognized for the theory of sustained growth through creative destruction, showing how innovation replaces old products with new ones. :contentReference[oaicite:6]{index=6}"
    },
    { 
        name: "Peter Howitt",
        image: "./images/peter_howitt.jpg",
        year: "2025",
        hook: "Explaining how economies reinvent.",
        reason: "Shared the 2025 prize for explaining how the process of new technologies replacing old ones fuels continuous economic growth. :contentReference[oaicite:7]{index=7}"
    }
];


// --------------------------
// GROUP BY YEAR
// --------------------------
const grouped = {};
data.forEach(l => {
    if (!grouped[l.year]) grouped[l.year] = [];
    grouped[l.year].push(l);
});

// --------------------------
// RENDER
// --------------------------
const wall = document.getElementById("wall");

Object.keys(grouped).sort().forEach(year => {

    const section = document.createElement("section");
    section.className = "year-section";

    const label = document.createElement("h2");
    label.className = "year-label";
    label.textContent = year;

    const cards = document.createElement("div");
    cards.className = "year-cards";

    let completedCount = 0;

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
            completedCount++;
            checkYearComplete();
        };

        cards.appendChild(card);
    });

    // YEAR TEXTBOX (hidden initially)
    const yearBox = document.createElement("div");
    yearBox.className = "year-textbox";
    yearBox.textContent = "👉 Add your year summary text here.";

    function checkYearComplete() {
        if (completedCount === grouped[year].length) {
            yearBox.style.display = "block";
        }
    }

    section.appendChild(label);
    section.appendChild(cards);
    section.appendChild(yearBox);
    wall.appendChild(section);
});
