const data = [
    {
        name: "Peter A. Diamond",
        image: "images/diamond.jpg",
        year: "2010",
        reason: "For his analysis of markets with search frictions, especially his work on how unemployment, job vacancies, and wage formation are affected when it takes time for buyers and sellers to find each other."
    },
    {
        name: "Dale T. Mortensen",
        image: "images/mortensen.jpg",
        year: "2010",
        reason: "For his fundamental contributions to the theory of search and matching in labor markets, explaining how individual decisions interact with market frictions to shape unemployment and job creation."
    },
    {
        name: "Christopher A. Pissarides",
        image: "images/pissarides.jpg",
        year: "2010",
        reason: "For his development of equilibrium models of unemployment that integrate job search, wage bargaining, and labor market policy into a coherent analytical framework."
    },
    {
        name: "Thomas J. Sargent",
        image: "images/sargent.jpg",
        year: "2011",
        reason: "For his empirical research on cause and effect in the macroeconomy, particularly how governments and households form expectations about economic policy and how these expectations influence inflation and employment."
    },
    {
        name: "Christopher A. Sims",
        image: "images/sims.jpg",
        year: "2011",
        reason: "For his methodological contributions to macroeconomics, especially the development of vector autoregression techniques used to analyze the effects of economic policy shocks."
    },
    {
        name: "Alvin E. Roth",
        image: "images/roth.jpg",
        year: "2012",
        reason: "For the theory of stable allocations and the practice of market design, including applications to matching markets such as school choice systems and kidney exchange programs."
    },
    {
        name: "Lloyd S. Shapley",
        image: "images/shapley.jpg",
        year: "2012",
        reason: "For foundational theoretical contributions to cooperative game theory and matching theory, providing the mathematical basis for stable matching and fair allocation mechanisms."
    },
    {
        name: "Eugene F. Fama",
        image: "images/fama.jpg",
        year: "2013",
        reason: "For his empirical analysis of asset prices, particularly the efficient market hypothesis, demonstrating how asset prices reflect available information."
    },
    {
        name: "Lars Peter Hansen",
        image: "images/hansen.jpg",
        year: "2013",
        reason: "For developing econometric methods that allow researchers to test theories of asset pricing and measure risk in financial markets."
    },
    {
        name: "Robert J. Shiller",
        image: "images/shiller.jpg",
        year: "2013",
        reason: "For his analysis of asset price volatility, behavioral finance, and the role of psychological factors in financial bubbles and market instability."
    },
    {
        name: "Jean Tirole",
        image: "images/tirole.jpg",
        year: "2014",
        reason: "For his analysis of market power and regulation, particularly how governments can design effective policies for industries dominated by a few powerful firms."
    },
    {
        name: "Angus Deaton",
        image: "images/deaton.jpg",
        year: "2015",
        reason: "For his analysis of consumption, poverty, and welfare, advancing the understanding of how individuals allocate spending and how living standards are measured across countries."
    },
    {
        name: "Oliver Hart",
        image: "images/hart.jpg",
        year: "2016",
        reason: "For his contributions to contract theory, explaining how incomplete contracts shape the structure of firms, incentives, and organizational decision-making."
    },
    {
        name: "Bengt Holmström",
        image: "images/holmstrom.jpg",
        year: "2016",
        reason: "For his foundational work in contract theory, particularly on incentive design, moral hazard, and the optimal structuring of compensation and performance evaluation."
    },
    {
        name: "Richard H. Thaler",
        image: "images/thaler.jpg",
        year: "2017",
        reason: "For his contributions to behavioral economics, incorporating psychological insights into economic analysis and challenging the assumption of fully rational decision-making."
    },
    {
        name: "William D. Nordhaus",
        image: "images/nordhaus.jpg",
        year: "2018",
        reason: "For integrating climate change into long-run macroeconomic analysis, developing models that assess the economic consequences of global warming and climate policy."
    },
    {
        name: "Paul M. Romer",
        image: "images/romer.jpg",
        year: "2018",
        reason: "For his work on endogenous growth theory, demonstrating how technological innovation and ideas drive long-term economic growth."
    },
    {
        name: "Abhijit Banerjee",
        image: "images/banerjee.jpg",
        year: "2019",
        reason: "For his experimental approach to alleviating global poverty, using randomized controlled trials to evaluate development policies."
    },
    {
        name: "Esther Duflo",
        image: "images/duflo.jpg",
        year: "2019",
        reason: "For her pioneering use of field experiments to study poverty, education, health, and development interventions."
    },
    {
        name: "Michael Kremer",
        image: "images/kremer.jpg",
        year: "2019",
        reason: "For experimental research that transformed development economics into a data-driven, evidence-based discipline."
    },
    {
        name: "Paul R. Milgrom",
        image: "images/milgrom.jpg",
        year: "2020",
        reason: "For improvements to auction theory and the invention of new auction formats, widely used in spectrum auctions and other markets."
    },
    {
        name: "Robert B. Wilson",
        image: "images/wilson.jpg",
        year: "2020",
        reason: "For foundational work on auction theory, especially the analysis of bidding strategies under asymmetric information."
    },
    {
        name: "David Card",
        image: "images/card.jpg",
        year: "2021",
        reason: "For his empirical contributions to labor economics, particularly using natural experiments to study minimum wages, immigration, and education."
    },
    {
        name: "Joshua D. Angrist",
        image: "images/angrist.jpg",
        year: "2021",
        reason: "For methodological contributions to causal inference, especially the use of instrumental variables in empirical economics."
    },
    {
        name: "Guido W. Imbens",
        image: "images/imbens.jpg",
        year: "2021",
        reason: "For advancing methods for estimating causal relationships in observational data, strengthening empirical economic analysis."
    },
    {
        name: "Ben S. Bernanke",
        image: "images/bernanke.jpg",
        year: "2022",
        reason: "For research on banks and financial crises, particularly how bank failures amplify economic downturns."
    },
    {
        name: "Douglas W. Diamond",
        image: "images/diamond2.jpg",
        year: "2022",
        reason: "For theoretical models explaining the role of banks in maturity transformation and financial stability."
    },
    {
        name: "Philip H. Dybvig",
        image: "images/dybvig.jpg",
        year: "2022",
        reason: "For developing models of bank runs and deposit insurance that explain systemic financial risk."
    },
    {
        name: "Claudia Goldin",
        image: "images/goldin.jpg",
        year: "2023",
        reason: "For advancing understanding of women's labor market outcomes, including gender wage gaps, labor force participation, and the role of education and family structure."
    },
    {
        name: "Daron Acemoglu",
        image: "images/acemoglu.jpg",
        year: "2024",
        reason: "For research on how political and economic institutions shape long-run economic growth, inequality, and prosperity."
    },
    {
        name: "Simon Johnson",
        image: "images/johnson.jpg",
        year: "2024",
        reason: "For contributions to the study of institutions, power structures, and their impact on economic development."
    },
    {
        name: "James A. Robinson",
        image: "images/robinson.jpg",
        year: "2024",
        reason: "For empirical and historical research showing how inclusive institutions promote growth and why extractive institutions hinder development."
    }
];

