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
//   category  - short real topical label (e.g. "Asylum", "Visa Fees", "Migration Stats")
//   title     - real headline (or a faithful short version)
//   summary   - 1-2 sentence teaser shown on the homepage's top-3 preview
//   teaser    - fuller 2-3 sentence summary shown on the full news.html page
//   body      - array of paragraph strings for the full article.html write-up. This is a
//               faithful, real, MULTI-PARAGRAPH summary written in our own words from the
//               real facts in the source article — NOT a verbatim copy/paste of the source
//               page. GOV.UK content is Open Government Licence (reusable), but EIN News and
//               some other publishers are not — copying their full article text verbatim
//               would be a real copyright problem, so we always write our own summary,
//               however detailed, and link to the original via the "Read on X" button.
//   url       - real, working link to the original source article
//   image     - local filename of a real, self-hosted per-article photo (scraped from
//               the source's og:image, resized/compressed, see news-*.jpg in repo root),
//               or null if no real per-article photo exists. When null, the page renderer
//               (index.html / news.html) automatically shows that source's own standard
//               default graphic instead (news-source-govuk.jpg / news-source-ons.svg /
//               news-source-ein.svg) — every card always shows a real image, never blank.

const NEWS_ITEMS = [
  {
    id: "hc259",
    dateSort: "2026-07-09",
    dateDisplay: "9 July 2026",
    source: "GOV.UK",
    icon: "doc",
    category: "Immigration Rules",
    title: "Statement of Changes to the Immigration Rules: HC 259",
    summary: "Updates affecting the graduate route, Appendix FM family provisions and the move to eVisas, taking effect from late July 2026.",
    teaser: "The Home Office published a new Statement of Changes to the Immigration Rules on 9 July 2026, covering the graduate route, Appendix FM family provisions, and the phased move to digital eVisas, with changes taking effect from 3 August 2026.",
    body: [
      "The Home Office laid Statement of Changes HC 259 before Parliament on 9 July 2026, the latest in a series of periodic updates to the Immigration Rules. The changes touch several routes at once rather than a single area of policy, which is typical of these statements — they bundle together smaller fixes and clarifications alongside more substantive policy shifts.",
      "Among the areas affected are the graduate route (the post-study work permission available to international students who complete a UK degree) and the family provisions under Appendix FM, which govern applications from spouses, partners and family members of people settled or present in the UK. The statement also continues the phased rollout of digital eVisas, replacing physical and paper-based proof of immigration status.",
      "Most of the changes in HC 259 take effect from 3 August 2026. As with any Statement of Changes, the exact impact depends on which route applies to your case and when your application is submitted — the commencement and transitional provisions in the statement itself set out precisely which applications are covered."
    ],
    url: "https://www.gov.uk/government/publications/statement-of-changes-to-the-immigration-rules-hc-259-9-july-2026",
    image: null
  },
  {
    id: "graduate-route-ein",
    dateSort: "2026-07-01",
    dateDisplay: "July 2026",
    source: "EIN News",
    icon: "clock",
    category: "Immigration Rules",
    title: "Immigration Rules Amend Graduate Route &amp; Family Provisions",
    summary: "A new Statement of Changes updates the graduate route, Appendix FM and Part 8 family provisions.",
    teaser: "The Electronic Immigration Network reports that a new Statement of Changes updates the graduate route, Appendix FM and Part 8 family provisions, aligning the rules for children joining relatives already settled in the UK.",
    body: [
      "The Electronic Immigration Network (EIN) reported on a new Statement of Changes to the Immigration Rules that amends the graduate route alongside the family provisions in Appendix FM and Part 8 of the Rules.",
      "Part 8 and Appendix FM together govern how children and other family members can join relatives who are already settled or present in the UK, covering questions like which relationships qualify and what evidence is required. EIN's coverage highlights that this update is aimed at aligning those provisions more consistently across routes, rather than introducing an entirely new category.",
      "Because EIN is a specialist legal-sector publisher rather than the primary government source, its report is a useful secondary summary of the same underlying Statement of Changes — the original legal text and full commencement details sit with GOV.UK, linked below."
    ],
    url: "https://www.ein.org.uk/news/new-statement-changes-immigration-rules-amends-graduate-route-appendix-fm-and-part-8-family",
    image: null
  },
  {
    id: "fee-rise-2026",
    dateSort: "2026-04-08",
    dateDisplay: "8 April 2026",
    source: "GOV.UK",
    icon: "doc",
    category: "Visa Fees",
    title: "UK Visa &amp; Nationality Fees Rise Roughly 6.5%",
    summary: "Most visa, settlement and citizenship fees increased from 8 April 2026, including a rise in the ILR fee to £3,226.",
    teaser: "From 8 April 2026, most Home Office visa, settlement and nationality fees rose by roughly 6.5%. The Indefinite Leave to Remain fee increased from £3,029 to £3,226 per applicant, while the fee for registering a child as a British citizen was reduced.",
    body: [
      "The Home Office increased almost all UK visa, immigration, settlement and nationality fees from 8 April 2026, with most categories rising by around 6 to 7 per cent. The updated fee table was published as a revision to the standard Home Office fees regulations.",
      "Examples of the increase include the Standard Visitor visa (up to six months), which rose from £127 to £135, and the Electronic Travel Authorisation, up from £16 to £20. Student visa fees increased to £558 for both main applicants and dependants, and a Skilled Worker visa of up to three years rose from £719 to £769. The fee for Indefinite Leave to Remain (settlement) increased from £3,029 to £3,226 per applicant.",
      "Not every fee went up: the application fee for registering a child as a British citizen was reduced, falling from £1,214 to £1,000. Applicants who submitted before 8 April 2026 were charged at the previous rates, so the increase applies going forward from that date rather than retrospectively."
    ],
    url: "https://www.gov.uk/government/publications/visa-regulations-revised-table/home-office-immigration-and-nationality-fees-8-april-2026",
    image: null
  },
  {
    id: "sponsor-guidance",
    dateSort: "2026-03-06",
    dateDisplay: "6 March 2026",
    source: "GOV.UK",
    icon: "shield",
    category: "Sponsorship",
    title: "Home Office Tightens Sponsor Licence Guidance",
    summary: "New sponsor guidance replaces \"genuine vacancy\" with \"eligible role\" and lowers the threshold for licence revocation.",
    teaser: "The Home Office issued significantly updated Sponsor Guidance on 6 March 2026, replacing the term \"genuine vacancy\" with \"eligible role\" and lowering the evidence threshold needed to revoke a sponsor licence for salary non-compliance.",
    body: [
      "On 6 March 2026 the Home Office issued substantially revised versions of its Sponsor Guidance documents, including Appendix D and the Skilled Worker sponsor guidance, affecting how UK employers hold and maintain a sponsor licence.",
      "A key change replaces the previous \"genuine vacancy\" test with a new \"eligible role\" standard, reflecting closer scrutiny of whether a sponsored position is genuinely required. The guidance also lowers the bar for compliance action over salary issues: rather than needing to be satisfied a worker's salary was artificially inflated, the Home Office now only needs \"reasonable grounds to suspect\" this before acting. Sponsors must also keep evidence that sponsored workers have been informed of their employment rights.",
      "A related change took effect from 8 April 2026, introducing a new salary compliance regime requiring sponsors to ensure Skilled Worker visa holders are paid at least the required minimum salary in every pay period, rather than relying on an annual average. The Home Office issued a further guidance update on 20 May 2026, continuing this tightening of sponsor obligations."
    ],
    url: "https://www.gov.uk/government/publications/register-of-licensed-sponsors-workers",
    image: null
  },
  {
    id: "visa-brake",
    dateSort: "2026-03-05",
    dateDisplay: "5 March 2026",
    source: "GOV.UK",
    icon: "shield",
    category: "Visa Restrictions",
    title: "\"Visa Brake\" Imposed on 4 Countries",
    summary: "Nationals of Afghanistan, Cameroon, Myanmar and Sudan barred from Student and Skilled Worker routes from 26 March 2026.",
    teaser: "The Home Office announced a \"visa brake\" on 5 March 2026, barring nationals of Afghanistan, Cameroon, Myanmar and Sudan from Student (and, for Afghan nationals, Skilled Worker) visa applications from 26 March 2026, citing a sharp rise in asylum claims from these routes.",
    body: [
      "The Home Office announced a \"visa brake\" on 5 March 2026, a new mechanism allowing the government to pause visa routes for specific nationalities where there is evidence of significant and rising abuse. It was applied immediately to four countries: Afghanistan, Cameroon, Myanmar and Sudan.",
      "From 26 March 2026, online applications made from outside the UK for a Student visa were refused for nationals of all four countries, and Skilled Worker visa applications were refused for Afghan nationals specifically. The Home Office said the trigger was a sharp rise in asylum claims from people who had entered on these routes — by the year ending September 2025, asylum applications from students of these four nationalities had reportedly risen to over 470% of their 2021 level, with the number of Afghans on work visas going on to claim asylum reportedly outstripping the number of visas being issued.",
      "The brake is described as a temporary, reviewable measure rather than a permanent ban — the government's own impact assessment suggests an initial duration of around 18 months, with the policy intended to be lifted once it's judged no longer necessary."
    ],
    url: "https://www.gov.uk/government/news/visa-brake-imposed-on-4-countries-after-widespread-visa-abuse",
    image: "news-visa-brake.jpg"
  },
  {
    id: "hc1691",
    dateSort: "2026-03-05",
    dateDisplay: "5 March 2026",
    source: "GOV.UK",
    icon: "doc",
    category: "Immigration Rules",
    title: "Statement of Changes HC 1691",
    summary: "Wide-ranging rule changes including BN(O) route expansion and wider mandatory refusal grounds, phased in through July 2026.",
    teaser: "Statement of Changes HC 1691, published 5 March 2026, introduced staged changes including an expansion of the BN(O) route to adult children of BN(O) nationals, and wider mandatory refusal grounds for suspended sentences of 12 months or more.",
    body: [
      "Statement of Changes HC 1691, published 5 March 2026, rolled out a wide set of Immigration Rules changes in stages through the rest of 2026, rather than all at once — different provisions commenced on 5 March itself (some at 3:00pm GMT that day), then 26 March, 2 April, 8 April, 29 April and 1 July 2026.",
      "One notable change expands the British National (Overseas) route, extending eligibility to adult children of BN(O) nationals who were born after 1 July 1979 — widening who in a BN(O) family can apply in their own right. Separately, from 26 March 2026 the mandatory grounds for refusing an application were expanded to include suspended sentences of 12 months or more, tightening the character and conduct requirements applied across routes.",
      "The statement also touched asylum policy: it allows asylum seekers who have waited more than a year for a decision, and who are permitted to work, to do so in a wider range of roles than previously allowed. As with any staged Statement of Changes, which specific provision applies to a given case depends on the application date and route."
    ],
    url: "https://www.gov.uk/government/publications/statement-of-changes-to-the-immigration-rules-hc-1619-5-march-2026",
    image: null
  },
  {
    id: "net-migration-ein",
    dateSort: "2026-02-20",
    dateDisplay: "2026",
    source: "EIN News",
    icon: "clock",
    category: "Migration Stats",
    title: "UK Net Migration Nearly Halves to 171,000",
    summary: "EIN reports on ONS figures showing net migration nearly halved, alongside record Home Office asylum claim figures.",
    teaser: "The Electronic Immigration Network reports that ONS figures show UK net migration falling to around 171,000, down sharply year-on-year, while separate Home Office figures showed asylum claims reaching a record high with falling grant rates.",
    body: [
      "EIN reported on further ONS figures showing UK net migration continuing its sharp downward trend, falling to around 171,000 — nearly half the level recorded a year earlier, continuing the pattern seen in the ONS's own year-ending-June-2025 release (covered separately in our news feed).",
      "The same report highlighted a contrasting trend on the Home Office side: asylum claims were reported to have reached a record high over the same period, while the proportion of claims being granted was said to be falling. Taken together, the two data sets point to a wider migration picture where overall net numbers are falling even as asylum applications rise as a share of the total.",
      "These are Home Office and ONS statistics as reported by EIN; the official releases from each body are the primary source for the exact methodology and caveats behind the figures."
    ],
    url: "https://www.ein.org.uk/news/uk-net-migration-nearly-halves-171000-year-december-2025-ons-says",
    image: "news-net-migration-ein.jpg"
  },
  {
    id: "earned-settlement",
    dateSort: "2026-02-12",
    dateDisplay: "12 February 2026",
    source: "GOV.UK",
    icon: "clock",
    category: "Settlement",
    title: "Earned Settlement Consultation Closes",
    summary: "Government consultation on extending the qualifying period for settlement received over 200,000 responses.",
    teaser: "The Home Office's \"earned settlement\" consultation closed on 12 February 2026 after receiving over 200,000 responses. It proposes moving from automatic settlement after a fixed period to a system where migrants must demonstrate sustained good conduct and contribution, with a baseline wait of 10 years or more for most routes.",
    body: [
      "The Home Office's consultation on \"earned settlement\" ran from 20 November 2025 to 12 February 2026 and drew an unusually large response — reports put the total at over 200,000 submissions, reflecting how directly the proposals would affect people already living and working in the UK on a pathway to settlement.",
      "The proposals, part of the wider 2025 white paper \"Restoring Control over the Immigration System\", would end automatic settlement after a fixed number of years and replace it with a system where migrants must demonstrate sustained good conduct, contribution and integration. Most routes would move to a 10-year baseline wait rather than the current 5 years, and the consultation separately asked whether \"medium-skilled\" workers and below should face an even longer 15-year baseline. A related change would raise the required English language level to B2 (from the current B1) from March 2027.",
      "As of this update, the government's formal response to the consultation had not yet been published. Under the usual process a response is expected within about 12 weeks of a consultation closing, though the Home Secretary has indicated the substantive changes may not land until later in 2026, with final Immigration Rules still to be laid before Parliament."
    ],
    url: "https://www.gov.uk/government/consultations/earned-settlement",
    image: null
  },
  {
    id: "asylum-accommodation",
    dateSort: "2026-01-15",
    dateDisplay: "2026",
    source: "GOV.UK",
    icon: "clock",
    category: "Asylum",
    title: "Asylum Seekers to Repay Accommodation Costs",
    summary: "New Home Office powers require asylum seekers who can afford it to contribute to support and accommodation costs.",
    teaser: "Under new powers in the Immigration and Asylum Bill, the Home Office will require asylum seekers who are assessed as able to afford it to contribute towards the cost of their support and accommodation.",
    body: [
      "New powers introduced under the Immigration and Asylum Bill mean the Home Office can require asylum seekers to contribute towards the cost of their own support and accommodation, where they are individually assessed as able to afford it.",
      "This does not apply to everyone in the asylum system by default — support and accommodation remain free at the point of use for those who genuinely cannot pay. The change targets cases where an individual has the financial means to contribute, aiming to recover some of the cost of the asylum accommodation estate from those who can afford it rather than reducing support for those who can't.",
      "The measure sits within the government's broader push to reform asylum support costs, which have been under sustained political and financial pressure given the scale of the current accommodation estate."
    ],
    url: "https://www.gov.uk/government/news/asylum-seekers-will-pay-towards-costs-of-accommodation",
    image: "news-asylum-accommodation.jpg"
  },
  {
    id: "net-migration-ons",
    dateSort: "2025-11-27",
    dateDisplay: "27 November 2025",
    source: "ONS",
    icon: "clock",
    category: "Migration Stats",
    title: "Net Migration Falls to 204,000",
    summary: "ONS provisional figures show long-term net migration down roughly two-thirds year-on-year.",
    teaser: "The Office for National Statistics reported provisional long-term net migration of 204,000 for the year ending June 2025, down from 649,000 a year earlier — a fall of around two-thirds, driven by fewer non-EU arrivals for work and study and a continued rise in emigration.",
    body: [
      "The Office for National Statistics published provisional long-term international migration figures for the year ending June 2025 on 27 November 2025, recording net migration of 204,000 — down from 649,000 the year before, a fall of roughly two-thirds and a return to levels last seen before the post-Brexit immigration system was introduced.",
      "The fall was driven mainly by the non-EU+ nationality group, though it remained the largest positive contributor to net migration at +383,000. Both EU+ nationals and British nationals recorded negative net migration over the period (more people leaving than arriving), at -70,000 and -109,000 respectively. Total immigration fell from an estimated 1,299,000 to 898,000, with three-quarters of arrivals coming from non-EU countries, while emigration rose to an estimated 693,000, an increase of 43,000 on the previous year.",
      "The ONS attributes the overall decline to fewer non-EU+ nationals arriving for work and study reasons, combined with a continued gradual increase in emigration. As with all figures in this release, the ONS describes them as provisional estimates, subject to revision as more data becomes available."
    ],
    url: "https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/internationalmigration/bulletins/longterminternationalmigrationprovisional/yearendingjune2025",
    image: null
  }
];
