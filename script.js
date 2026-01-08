// ==================================================
// DATA
// ==================================================
const data = [
    {
        name: "Peter A. Diamond",
        image: "./images/peter_diamond.jpg",
        year: "2010",
        hook: "Explaining why jobs take time to find.",
        reason: "Key Discoveries:\n\t•\tFoundational Search Theory: Diamond developed theoretical models of markets in which buyers and sellers (including workers and firms) cannot instantly find each other due to search costs and imperfect information.\n\t•\tMarket Frictions and Unemployment: He showed that such frictions prevent markets from clearing immediately, meaning unemployment can persist even when vacancies exist.\n\t•\tEquilibrium with Frictions: Diamond clarified how wages and employment are determined in these settings, challenging classical market assumptions.\nImpact:\n\t•\tHis work transformed the study of labor markets by providing the framework economists use to analyze unemployment, matching efficiency, and policy interventions.\n\t•\tDiamond’s insights underpin modern macroeconomic and labor market analysis. ••••• ••••• Awarded for analyzing markets where workers search for jobs and employers search for workers, showing that matching frictions cause unemployment even when jobs exist."
    },
    {
        name: "Dale T. Mortensen",
        image: "./images/dale_mortensen.jpg",
        year: "2010",
        hook: "Jobs are constantly changing.",
        reason: "Key Discoveries:\n\t•\tSearch and Matching Models: Mortensen developed dynamic models capturing job creation, job destruction, and the process by which workers and firms meet and bargain.\n\t•\tLabor Market Dynamics: He showed how these processes generate wage dispersion, unemployment flows, and the response of labor markets to shocks.\nImpact:\n\t•\tHis work gave economists tools to quantify unemployment and wage distribution and to evaluate labor policies.\n\t•\tMortensen’s contributions reshaped labor economics and macroeconomic modeling of job markets.•••• ••••• Recognized for his work on labor market dynamics, especially how jobs are continuously created and destroyed and how that affects unemployment."
    },
    {
        name: "Christopher A. Pissarides",
        image: "./images/christopher_pissarides.jpg",
        year: "2010",
        hook: "Matching workers to jobs better.",
        reason: "Key Discoveries:\n\t•\tDiamond–Mortensen–Pissarides (DMP) Framework: Pissarides co‑developed a quantitative model explaining how unemployed workers and job vacancies are matched in the presence of frictions.\n\t•\tWage Formation and Policy Effects: His work detailed how matching efficiency and bargaining affect wages, unemployment duration, and the effects of policy changes.\nImpact:\n\t•\tThe DMP model became central in labor economics, shaping research on unemployment, labor policies, and macroeconomic fluctuations.\n\t•\tPissarides’ insights provided a clear mechanism linking labor market frictions with real economic outcomes. •••• •••• Shared the 2011 prize for developing statistical tools that help economists analyze how policy decisions influence the economy using real-world data. •••• •••• Shared the prize for developing models that explain how job seekers and vacancies match up, which helps explain persistent unemployment."
    },

    {
        name: "Christopher A. Sims",
        image: "./images/christopher_sims.jpg",
        year: "2011",
        hook: "Using data to understand the economy.",
        reason: "Key Discoveries:\n\t•\tVector Autoregression (VAR): Sims developed VAR methods that allow economists to trace how economic shocks and policy actions affect macroeconomic variables over time.\n\t•\tCausal Inference in Macroeconomics: His approach minimized reliance on restrictive models, letting data reveal dynamic relationships.\nImpact:\n\t•\tSims’ methods revolutionized empirical macroeconomics by enabling robust analysis of how policies and shocks propagate through the economy.\n\t•\tHis tools are widely used in academic and policy research to assess real‑world economic dynamics. •••• ••••
    
            },
    {
        name: "Thomas J. Sargent",
        image: "./images/thomas_sargent.jpg",
        year: "2011",
        hook: "Learning from history to improve policy.",
        reason: "Key Discoveries:\n\t•\tExpectations and Policy Analysis: Sargent demonstrated how people’s expectations about future policies influence inflation, unemployment, and economic outcomes.\n\t•\tEmpirical Macroeconomics: He combined theory with historical data to test how policy regimes affected economic behaviour.\nImpact:\n\t•\tHis work showed that credible policies and expectations management are essential for stabilizing economies.\n\t•\tSargent’s research linked theoretical macroeconomics with historical evidence, shaping modern policy evaluation. •••• •••• Awarded for empirical research on how economic policies and expectations about policy affect inflation and employment."

           },

    {
        name: "Alvin E. Roth",
        image: "./images/alvin_roth.jpg",
        year: "2012",
        hook: "Designing better markets.",
        reason: "Key Discoveries:\n\t•\tMarket Design Applications: Roth applied matching theory to real‑world allocation problems such as school placements, medical residencies, and kidney exchanges.\n\t•\tStable Matching Mechanisms: He designed systems that produce stable, efficient, and incentive‑compatible outcomes where prices alone cannot allocate resources.\nImpact:\n\t•\tHis work demonstrated how economic theory can solve practical allocation problems.\n\t•\tRoth’s market design principles are implemented worldwide, improving fairness and efficiency in critical social systems. •••• •••• Recognized for applying matching theory to real-world problems like school placements and kidney exchanges to improve how participants are paired."
    },
    {
        name: "Lloyd S. Shapley",
        image: "./images/lloyd_shapley.jpg",
        year: "2012",
        hook: "Mathematics that makes markets fairer.",
        reason: "Key Discoveries:\n\t•\tCooperative Game Theory: Shapley developed foundational concepts such as the Shapley value, which formalizes fair distribution of payoffs.\n\t•\tStable Matchings: His algorithms provided mathematical underpinnings for matching markets.\nImpact:\n\t•\tShapley’s theoretical contributions laid the groundwork for modern market design.\n\t•\tHis work enables economists and computer scientists to solve allocation problems in markets and networks. •••• •••• Awarded for foundational theory on how to fairly match participants in markets and games, laying the groundwork for efficient market design."
    },

    {
        name: "Eugene F. Fama",
        image: "./images/eugene_fama.jpg",
        year: "2013",
        hook: "Markets quickly reflect information.",
        reason: "Key Discoveries:\n\t•\tEfficient Market Hypothesis (EMH): Fama showed that asset prices rapidly incorporate available information, making it difficult to consistently outperform the market.\n\t•\tEmpirical Asset Pricing: He documented patterns in returns and risk that support market efficiency.\nImpact:\n\t•\tHis work became a foundation of modern finance and investment analysis.\n\t•\tFama’s insights guide understanding of risk, pricing, and financial markets. •••• •••• Won for showing how financial markets incorporate information into prices, a concept known as the efficient market hypothesis."
    },
    {
        name: "Robert J. Shiller",
        image: "./images/robert_shiller.jpg",
        year: "2013",
        hook: "Understanding market ups and downs.",
        reason: "Key Discoveries:\n\t•\tMarket Volatility and Bubbles: Shiller showed that asset prices often deviate from fundamentals due to psychological factors, narratives, and speculative behavior.\n\t•\tBehavioral Insights: His research highlighted the influence of investor sentiment on prices.\nImpact:\n\t•\tShiller’s findings challenged purely rational market models and introduced behavioral considerations into finance.\n\t•\tHis work deepened understanding of market fluctuations and risk. •••• ••••• Awarded for showing how psychological factors and bubbles can make markets fluctuate beyond what traditional fundamentals predict."
       
           },
    {
         
        name: "Lars Peter Hansen",
        image: "./images/lars_hansen.jpg",
        year: "2013",
        hook: "Measuring risk in financial markets.",
        reason: "Key Discoveries:\n\t•\tGeneralized Method of Moments (GMM): Hansen developed GMM, a statistical framework to rigorously test economic and financial models using data.\n\t•\tRisk Measurement: His methods enabled robust evaluation of risk and model performance.\nImpact:\n\t•\tGMM became a standard tool in empirical economics and finance.\n\t•\tHansen’s work improved economists’ ability to validate theories against real‑world data. •••• •••• Recognized for developing statistical methods that help test how well economic and financial models explain real-world data."
 
    },

    {
        name: "Jean Tirole",
        image: "./images/jean_tirole.jpg",
        year: "2014",
        hook: "Balancing power in the market.",
        reason: "Key Discoveries:\n\t•\tMarket Power and Regulation: Tirole developed frameworks to analyze firms with market power and how regulation can mitigate inefficiencies.\n\t•\tStrategic Market Behavior: His work clarified competition and strategic interaction in industries with few dominant firms.\nImpact:\n\t•\tTirole’s insights guide antitrust policy and regulatory design.\n\t•\tHis research shapes how policymakers approach competition and regulation. •••• •••• Won for creating frameworks to understand and regulate industries dominated by a few powerful firms."
    },

    {
        name: "Angus S. Deaton",
        image: "./images/angus_deaton.jpg",
        year: "2015",
        hook: "Understanding how people live.",
        reason: "Key Discoveries:\n\t•\tConsumption and Welfare Analysis: Deaton advanced methods to measure household consumption, poverty, and welfare using microdata.\n\t•\tEmpirical Insights: He identified how income, health, and policy affect living standards.\nImpact:\n\t•\tHis work improved how economists assess inequality and design social policies.\n\t•\tDeaton’s research deepened understanding of human welfare. •••• •••• Awarded for improving how economists use household data to understand consumption, poverty, and welfare."
    },

    {
        name: "Oliver Hart",
        image: "./images/oliver_hart.jpg",
        year: "2016",
        hook: "Why contracts matter.",
        reason: "Key Discoveries:\n\t•\tIncomplete Contract Theory: Hart showed how contracts that cannot specify every possible future situation influence firm boundaries and incentives.\n\t•\tProperty Rights and Control: His work explained how ownership affects investment and performance.\nImpact:\n\t•\tHis insights underpin modern theories of corporate governance.\n\t•\tHart’s work is central to contract and organizational economics. •••• •••• Recognized for explaining how incomplete contracts affect businesses, ownership, and incentives."
    },
    {
        name: "Bengt Holmström",
        image: "./images/bengt_holmstrom.jpg",
        year: "2016",
        hook: "Incentives shape decisions.",
        reason: "Key Discoveries:\n\t•\tPrincipal–Agent Theory: Holmström analyzed how contracts and incentives influence behavior within organizations.\n\t•\tPerformance and Risk: He clarified how performance measurement and risk sharing affect outcomes.\nImpact:\n\t•\tHis work informs executive compensation and organizational design.\n\t•\tHolmström’s insights shape economics of incentives and performance. •••• •••• Shared the 2016 prize for analyzing how contracts and incentives can be designed to motivate better performance."
    },

    {
        name: "Richard H. Thaler",
        image: "./images/richard_thaler.jpg",
        year: "2017",
        hook: "Humans don’t always act rationally.",
        reason: "Key Discoveries:\n\t•\tBehavioral Economics: Thaler documented systematic deviations from rational choice such as mental accounting, loss aversion, and limited self‑control.\n\t•\tNudges: He showed how small changes in choice architecture can improve decision outcomes.\nImpact:\n\t•\tHis work integrated psychology into economics.\n\t•\tThaler’s findings influence public policy and personal finance strategies. •••• ••••• Awarded for pioneering behavioral economics, showing how psychological biases influence economic decisions."
    },

    {
        name: "William D. Nordhaus",
        image: "./images/william_nordhaus.jpg",
        year: "2018",
        hook: "Economics meets climate change.",
        reason: "Key Discoveries:\n\t•\tClimate–Economy Integration: Nordhaus developed models linking economic growth, carbon emissions, and climate change.\n\t•\tSocial Cost of Carbon: He quantified economic damages from carbon emissions.\nImpact:\n\t•\tHis work guides climate policy and environmental regulation.\n\t•\tNordhaus brought climate change to core economic analysis. •••• •••• Won for integrating climate change into long-term economic analysis."
    },
    {
        name: "Paul M. Romer",
        image: "./images/paul_romer.jpg",
        year: "2018",
        hook: "Ideas drive growth.",
        reason: "Key Discoveries:\n\t•\tEndogenous Growth Theory: Romer showed that ideas, innovation, and knowledge accumulation are central drivers of long‑term economic growth.\n\t•\tPolicy Incentives for Innovation: His work demonstrated how policy affects innovation incentives.\nImpact:\n\t•\tHis theory reshaped growth economics.\n\t•\tRomer’s research highlighted the role of innovation in prosperity. •••• ••••Shared the 2018 prize for showing how innovation fuels long-term economic growth."
    },

    {
        name: "Abhijit Banerjee",
        image: "./images/abhijit_banerjee.jpg",
        year: "2019",
        hook: "Testing what works.",
        reason: "Key Discoveries:\n\t•\tRandomized Controlled Trials: Banerjee pioneered the use of RCTs to evaluate anti‑poverty policies rigorously.\n\t•\tEmpirical Evidence on Policy: His research identified what interventions improve health, education, and income outcomes.\nImpact:\n\t•\tHis work transformed development economics into evidence‑based policy science.\n\t•\tBanerjee’s methods improve understanding of poverty alleviation. •••• •••• Recognized for using randomized controlled trials to evaluate anti-poverty policies."
    },
    {
        name: "Esther Duflo",
        image: "./images/esther_duflo.jpg",
        year: "2019",
        hook: "Experiments to fight poverty.",
        reason: "Key Discoveries:\n\t•\tField Experiments: Duflo used RCTs to isolate causal effects of policies on poverty.\n\t•\tTargeted Policy Insights: Her work revealed how specific interventions affect education, health, and livelihoods.\nImpact:\n\t•\tHer methods reshaped global development strategies.\n\t•\tDuflo’s research deepened empirical understanding of poverty solutions. •••• ••••Shared the prize for innovative field experiments."
    },
    {
        name: "Michael Kremer",
        image: "./images/michael_kremer.jpg",
        year: "2019",
        hook: "Scalable evidence.",
        reason: "Key Discoveries:\n\t•\tLarge‑Scale Experiments: Kremer designed RCTs to evaluate interventions at scale.\n\t•\tPolicy Discovery: His findings on education and health informed effective policy design.\nImpact:\n\t•\tHis work strengthened evidence in development economics.\n\t•\tKremer’s research supports scalable solutions to poverty. •••• •••• Awarded for designing experimental methods at scale."
    },

    {
        name: "Robert B. Wilson",
        image: "./images/robert_wilson.jpg",
        year: "2020",
        hook: "Bidding strategies.",
        reason: "Key Discoveries:\n\t•\tAuction Theory: Wilson analyzed bidding under uncertainty and strategic interaction.\n\t•\tCommon‑Value Auctions: He clarified how information and competition shape outcomes.\nImpact:\n\t•\tHis insights improved understanding of bidding behavior.\n\t•\tWilson’s work advanced auction theory and design. •••• •••• Shared the prize for explaining bidding under uncertainty."
  
            },
    {
        name: "Paul R. Milgrom",
        image: "./images/paul_milgrom.jpg",
        year: "2020",
        hook: "Better auctions.",
        reason: "Key Discoveries:\n\t•\tPractical Auction Design: Milgrom extended auction theory to complex real‑world markets.\n\t•\tSpectrum and Resource Auctions: He developed formats that improve allocation efficiency.\nImpact:\n\t•\tHis work made auction theory practical in resource allocation.\n\t•\tMilgrom’s designs influence public and private market mechanisms. •••• •••• Recognized for improving auction theory."

          },

    {
        name: "David Card",
        image: "./images/david_card.jpg",
        year: "2021",
        hook: "Real-world labor insights.",
        reason: "Key Discoveries:\n\t•\tNatural Experiments: Card used quasi‑experimental methods to study labor markets.\n\t•\tMinimum Wage and Immigration: He found limited negative employment effects, challenging conventional theory.\nImpact:\n\t•\tHis evidence reshaped empirical labor economics.\n\t•\tCard’s work improved understanding of labor policy effects. •••• •••• Awarded for natural experiments in labor economics."
    },
    {
        name: "Joshua D. Angrist",
        image: "./images/joshua_angrist.jpg",
        year: "2021",
        hook: "Causal methods.",
        reason: "Key Discoveries:\n\t•\tCausal Inference Tools: Angrist refined instrumental variables and other methods to identify causality from observational data.\n\t•\tCredible Empirical Strategy: His research clarified assumptions needed for valid causal conclusions.\nImpact:\n\t•\tHis methods transformed applied microeconomics.\n\t•\tAngrist’s contributions strengthened empirical policy research. •••• •••• Recognized for causal inference methods."
    },
    {
        name: "Guido W. Imbens",
        image: "./images/guido_imbens.jpg",
        year: "2021",
        hook: "Measuring causality.",
        reason: "Key Discoveries:\n\t•\tFormal Causal Frameworks: Imbens developed statistical frameworks for interpreting causal effects in observational studies.\n\t•\tLocal Average Treatment Effects (LATE): He clarified how to interpret instrumental variables estimates.\nImpact:\n\t•\tHis work strengthened empirical inference in economics.\n\t•\tImbens’ methods are central to modern causal analysis. •••• •••• Shared the prize for strengthening causal conclusions."
    },

    {
        name: "Ben S. Bernanke",
        image: "./images/ben_bernanke.jpg",
        year: "2022",
        hook: "Why banks matter.",
        reason: "Key Discoveries:\n\t•\tBanking Crises: Bernanke analyzed how bank failures deepen recessions, particularly during the Great Depression.\n\t•\tMonetary Policy and Stability: He showed how central bank actions can stabilize financial systems.\nImpact:\n\t•\tHis insights guide crisis response and monetary policy.\n\t•\tBernanke’s work influences macroprudential regulation. •••• •••• Awarded for analyzing banking crises."
    },
    {
        name: "Douglas W. Diamond",
        image: "./images/douglas_diamond.jpg",
        year: "2022",
        hook: "Liquidity creation.",
        reason: "Key Discoveries:\n\t•\tRole of Banks: Diamond explained why banks exist as liquidity providers, transforming short‑term deposits into long‑term investments.\n\t•\tFragility and Risk: He showed how this function creates inherent fragility.\nImpact:\n\t•\tHis work underpins understanding of financial intermediation.\n\t•\tDiamond’s research informs banking regulation and safety nets. •••• •••• Recognized for explaining why banks exist."
    },
    {
        name: "Philip H. Dybvig",
        image: "./images/philip_dybvig.jpg",
        year: "2022",
        hook: "Why bank runs happen.",
        reason: "Key Discoveries:\n\t•\tDiamond–Dybvig Model: Dybvig formalized how self‑fulfilling bank runs occur in the absence of safeguards.\n\t•\tDeposit Insurance and Stability: He showed how insurance and central bank support prevent runs.\nImpact:\n\t•\tHis insights guide financial regulation and deposit insurance design.\n\t•\tDybvig’s work informs stability policy in banking systems. •••• •••• Shared the prize for models of bank runs."
    },

    {
        name: "Claudia Goldin",
        image: "./images/claudia_goldin.jpg",
        year: "2023",
        hook: "Women’s work history.",
        reason: "Key Discoveries:\n\t•\tU‑Shaped Participation Trend: Goldin showed that women’s labour force participation over the past 200+ years did *not* simply rise with economic growth. Instead, it followed a U‑shaped pattern: participation was relatively high in agrarian societies, declined during the Industrial Revolution (as married women left the labour force), and then rose again in the 20th century with the expansion of service jobs and changing social norms. \n\t•\tCorrecting Historical Records: She reconstructed long‑run labour data by correcting undercounted women’s work in historical records, revealing that earlier estimates understated female labour participation, especially for married women. \n\t•\tDrivers of Change: Goldin identified key factors shaping women’s participation and earnings, such as marriage norms, access to education, birth control (e.g., the contraceptive pill), and structural shifts in the economy.\nImpact:\n\t•\tHer research transformed our understanding of women’s historical economic roles, showing that social norms, family responsibilities, and institutional barriers shaped labour outcomes as much as economic development.  Awarded for analyzing gender gaps in labor markets."
    },

    {
        name: "Daron Acemoglu",
        image: "./images/daron_acemoglu.jpg",
        year: "2024",
        hook: "Institutions shape prosperity.",
        reason: "Key Discoveries:\n\t•\tInstitutional Impact on Growth: Acemoglu showed how inclusive economic and political institutions foster innovation, investment, and long‑term growth.\n\t•\tExtractive Institutions: He documented how extractive institutions concentrate power and hinder development.\nImpact:\n\t•\tHis work guides understanding of development, inequality, and policy.\n\t•\tAcemoglu’s research frames institutions as central drivers of prosperity. •••• •••• Recognized for studies on institutions."
    },
    {
        name: "Simon Johnson",
        image: "./images/simon_johnson.jpg",
        year: "2024",
        hook: "Power and elites.",
        reason: "Key Discoveries:\n\t•\tElite Capture: Johnson highlighted how economic and political elites shape institutions to their advantage, undermining competition, equality, and growth.\n\t•\tSystemic Vulnerabilities: His research showed how concentrated power weakens financial systems and governance.\nImpact:\n\t•\tHis insights inform policy on reducing elite influence.\n\t•\tJohnson’s work deepens understanding of power, institutions, and prosperity. •••• •••• •••• Awarded for research on elite power."
    },
    {
        name: "James A. Robinson",
        image: "./images/james_robinson.jpg",
        year: "2024",
        hook: "Paths to prosperity.",
        reason: "Key Discoveries:\n\t•\tInstitutions and Development: Robinson demonstrated how governance, legal frameworks, and institutional choices influence divergent development trajectories.\n\t•\tComparative Evidence: He provided historical and empirical evidence on how inclusive institutions support sustained prosperity.\nImpact:\n\t•\tHis work helps explain why some countries thrive while others struggle.\n\t•\tRobinson’s research frames institutions as foundational to economic success.•••• •••• Shared the prize for institutional analysis."
    }

  
];


// ==================================================
// YEAR SUMMARIES
// ==================================================
const yearSummaries = {
    "2010": "DIAMOND (takes time) miners MORTally (changes) PISSed can’t find matching underwear ••••• ••••• (Job matching is slow and frictional )Search frictions in labour markets  ",
    "2011": "The data SIMS SARGENT's history > policy expects. ••••• ••••• ( Policy works through expectations + statistics) Macroeconomics, policy & expectations",
    "2012": "ROTH matches schools and fair markets of mathematical SHAPEs ••••• ••••• Stable matching & market design",
    "2013": "FAMA (fathermather) says markets are SMART (market reflects info), SHILLER says they’re CRAZY (bubbles&psychology), HANSEN mmbop band measures risk  ••••• ••••• Efficient markets vs bubbles",
    "2014": "monopoly game Tirole (tie-roll), frame it to understand and regulate. ••••• ••••• Regulating market power (Regulating oligopolies & platforms)",
    "2015": "A household table labeled WELFARE, DEATON (did he eat a ton) lets homeless boy and shopping baskets. ••••• •••• Consumption, poverty & welfare (Consumption reveals wellbeing)",
    "2016": "with a incentiviced HEART signs a contract tightened with a HOLM (home) lock.••••• •••• Contract theory & incentives (Design contracts to align incentives)",
    "2017": "THALER (taller) humans are irrational but normal (psychological biases influence decisions) •••• ••••• Behavioral economics (People are predictably irrational)",
    "2018": "NORD (north) heats the planet (climate change) , ROMER (Rome) fuels growth IDEAS ••••• Climate change & innovation (Growth depends on nature + ideas)",
    "2019": "BAN poverty (rct), DO field tests, KREM (kremlin) scale evidence. ••••• Field experiments in development (test solutions dont guess)",
    "2020": "WILSON (will's son) uncertainly bids on MIL-GRAM (miligram) in an auction. •••••Auction theory & design (Better auctions = better markets)",
    "2021": "CARD shocks (real world labor), ANGRIST but casual infer, IMBENS (immediately) measure CAUSE •••• ••••• Causal inference in economics (what policy really causes what)",
    "2022": "BERNANKE stops the panic (with banks) when DIAMOND hands (create liquidity) with DYBVIG faces cause bankruns ••••• •••• Banking crises & financial stability (Why banks fail & how to save them)",
    "2023": "GOLD is discovered by women ••••• •••• Gender gaps in labor markets (Long-run gender wage & labour gaps)",
    "2024": "ACE institute prosper with JOHNSON power elites & ROBINSON path to prosperity ••••  ••••• Institutions determine prosperity",
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
