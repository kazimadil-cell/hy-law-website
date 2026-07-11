// H&Y Law — UK immigration news data for index.html (top 3) and news.html (all 10)
// Real, verified news only — GOV.UK, ONS, and the Electronic Immigration Network (EIN).
// Never fabricate headlines, dates, figures, or URLs.
//
// This is a rotating queue, newest first, max 10 entries. The scheduled refresh
// agent (hylaw-news-refresh) prepends new real articles here and drops the oldest
// once there are more than 10.
//
// Fields:
//   id        - short slug, used as an anchor id on news.html (e.g. news.html#hc259)
//   dateSort  - ISO date (YYYY-MM-DD), used only to order items; not always shown verbatim
//   dateDisplay - the date as shown to visitors (can be a full date, month+year, or just
//                 a year if the exact publish date genuinely isn't known/stated by the source)
//   source    - "GOV.UK", "ONS", or "EIN News"
//   icon      - "doc" | "clock" | "shield" (reuses the 3 existing inline SVG icons)
//   title     - real headline (or a faithful short version)
//   summary   - 1-2 sentence teaser shown on the homepage's top-3 preview
//   teaser    - fuller 2-3 sentence summary shown on the full news.html page
//   url       - real, working link to the original source article

const NEWS_ITEMS = [
  {
    id: "hc259",
    dateSort: "2026-07-09",
    dateDisplay: "9 July 2026",
    source: "GOV.UK",
    icon: "doc",
    title: "Statement of Changes to the Immigration Rules: HC 259",
    summary: "Updates affecting the graduate route, Appendix FM family provisions and the move to eVisas, taking effect from late July 2026.",
    teaser: "The Home Office published a new Statement of Changes to the Immigration Rules on 9 July 2026, covering the graduate route, Appendix FM family provisions, and the phased move to digital eVisas, with changes taking effect from 3 August 2026.",
    url: "https://www.gov.uk/government/publications/statement-of-changes-to-the-immigration-rules-hc-259-9-july-2026"
  },
  {
    id: "graduate-route-ein",
    dateSort: "2026-07-01",
    dateDisplay: "July 2026",
    source: "EIN News",
    icon: "clock",
    title: "Immigration Rules Amend Graduate Route &amp; Family Provisions",
    summary: "A new Statement of Changes updates the graduate route, Appendix FM and Part 8 family provisions.",
    teaser: "The Electronic Immigration Network reports that a new Statement of Changes updates the graduate route, Appendix FM and Part 8 family provisions, aligning the rules for children joining relatives already settled in the UK.",
    url: "https://www.ein.org.uk/news/new-statement-changes-immigration-rules-amends-graduate-route-appendix-fm-and-part-8-family"
  },
  {
    id: "fee-rise-2026",
    dateSort: "2026-04-08",
    dateDisplay: "8 April 2026",
    source: "GOV.UK",
    icon: "doc",
    title: "UK Visa &amp; Nationality Fees Rise Roughly 6.5%",
    summary: "Most visa, settlement and citizenship fees increased from 8 April 2026, including a rise in the ILR fee to £3,226.",
    teaser: "From 8 April 2026, most Home Office visa, settlement and nationality fees rose by roughly 6.5%. The Indefinite Leave to Remain fee increased from £3,029 to £3,226 per applicant, while the fee for registering a child as a British citizen was reduced.",
    url: "https://www.gov.uk/government/publications/visa-regulations-revised-table/home-office-immigration-and-nationality-fees-8-april-2026"
  },
  {
    id: "sponsor-guidance",
    dateSort: "2026-03-06",
    dateDisplay: "6 March 2026",
    source: "GOV.UK",
    icon: "shield",
    title: "Home Office Tightens Sponsor Licence Guidance",
    summary: "New sponsor guidance replaces \"genuine vacancy\" with \"eligible role\" and lowers the threshold for licence revocation.",
    teaser: "The Home Office issued significantly updated Sponsor Guidance on 6 March 2026, replacing the term \"genuine vacancy\" with \"eligible role\" and lowering the evidence threshold needed to revoke a sponsor licence for salary non-compliance.",
    url: "https://www.gov.uk/government/publications/register-of-licensed-sponsors-workers"
  },
  {
    id: "visa-brake",
    dateSort: "2026-03-05",
    dateDisplay: "5 March 2026",
    source: "GOV.UK",
    icon: "shield",
    title: "\"Visa Brake\" Imposed on 4 Countries",
    summary: "Nationals of Afghanistan, Cameroon, Myanmar and Sudan barred from Student and Skilled Worker routes from 26 March 2026.",
    teaser: "The Home Office announced a \"visa brake\" on 5 March 2026, barring nationals of Afghanistan, Cameroon, Myanmar and Sudan from Student (and, for Afghan nationals, Skilled Worker) visa applications from 26 March 2026, citing a sharp rise in asylum claims from these routes.",
    url: "https://www.gov.uk/government/news/visa-brake-imposed-on-4-countries-after-widespread-visa-abuse"
  },
  {
    id: "hc1691",
    dateSort: "2026-03-05",
    dateDisplay: "5 March 2026",
    source: "GOV.UK",
    icon: "doc",
    title: "Statement of Changes HC 1691",
    summary: "Wide-ranging rule changes including BN(O) route expansion and wider mandatory refusal grounds, phased in through July 2026.",
    teaser: "Statement of Changes HC 1691, published 5 March 2026, introduced staged changes including an expansion of the BN(O) route to adult children of BN(O) nationals, and wider mandatory refusal grounds for suspended sentences of 12 months or more.",
    url: "https://www.gov.uk/government/publications/statement-of-changes-to-the-immigration-rules-hc-1619-5-march-2026"
  },
  {
    id: "net-migration-ein",
    dateSort: "2026-02-20",
    dateDisplay: "2026",
    source: "EIN News",
    icon: "clock",
    title: "UK Net Migration Nearly Halves to 171,000",
    summary: "EIN reports on ONS figures showing net migration nearly halved, alongside record Home Office asylum claim figures.",
    teaser: "The Electronic Immigration Network reports that ONS figures show UK net migration falling to around 171,000, down sharply year-on-year, while separate Home Office figures showed asylum claims reaching a record high with falling grant rates.",
    url: "https://www.ein.org.uk/news/uk-net-migration-nearly-halves-171000-year-december-2025-ons-says"
  },
  {
    id: "earned-settlement",
    dateSort: "2026-02-12",
    dateDisplay: "12 February 2026",
    source: "GOV.UK",
    icon: "clock",
    title: "Earned Settlement Consultation Closes",
    summary: "Government consultation on extending the qualifying period for settlement received over 200,000 responses.",
    teaser: "The Home Office's \"earned settlement\" consultation closed on 12 February 2026 after receiving over 200,000 responses. It proposes moving from automatic settlement after a fixed period to a system where migrants must demonstrate sustained good conduct and contribution, with a baseline wait of 10 years or more for most routes.",
    url: "https://www.gov.uk/government/consultations/earned-settlement"
  },
  {
    id: "asylum-accommodation",
    dateSort: "2026-01-15",
    dateDisplay: "2026",
    source: "GOV.UK",
    icon: "clock",
    title: "Asylum Seekers to Repay Accommodation Costs",
    summary: "New Home Office powers require asylum seekers who can afford it to contribute to support and accommodation costs.",
    teaser: "Under new powers in the Immigration and Asylum Bill, the Home Office will require asylum seekers who are assessed as able to afford it to contribute towards the cost of their support and accommodation.",
    url: "https://www.gov.uk/government/news/asylum-seekers-will-pay-towards-costs-of-accommodation"
  },
  {
    id: "net-migration-ons",
    dateSort: "2025-11-27",
    dateDisplay: "27 November 2025",
    source: "ONS",
    icon: "clock",
    title: "Net Migration Falls to 204,000",
    summary: "ONS provisional figures show long-term net migration down roughly two-thirds year-on-year.",
    teaser: "The Office for National Statistics reported provisional long-term net migration of 204,000 for the year ending June 2025, down from 649,000 a year earlier — a fall of around two-thirds, driven by fewer non-EU arrivals for work and study and a continued rise in emigration.",
    url: "https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/internationalmigration/bulletins/longterminternationalmigrationprovisional/yearendingjune2025"
  }
];
