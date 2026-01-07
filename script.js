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
        image: "https://upload.wikimedi
