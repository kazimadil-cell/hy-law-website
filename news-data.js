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
    id: "earned-settlement",
    dateSort: "2026-11-02",
    dateDisplay: "2 November 2026",
    source: "GOV.UK",
    icon: "doc",
    category: "Settlement",
    title: "Home Secretary Unveils New Rules for Migrants Settling in the UK",
    summary: "Settlement will no longer follow almost automatically after five years: the default qualifying period becomes 10 years, with shorter routes for high earners and key public service workers.",
    teaser: "On 2 November 2026 the Home Secretary set out the earned settlement model. The default wait for settlement becomes 10 years, cut to 3 or 5 years for higher earners, public service workers and eligible care workers, and raised to 20 years or more for those who breached immigration rules. Everyone must also meet four new core conditions.",
    body: [
      "Home Secretary Shabana Mahmood set out new settlement rules before Parliament on 2 November 2026, largely following the earned settlement consultation launched in November 2025. Under the new model, indefinite leave to remain is no longer granted almost automatically after five years; how long someone waits instead depends on their contribution and character.",
      "For the general routes, the default qualifying period becomes 10 years. The highest earners can settle after 3 years, while people earning over £50,271 and certain public service workers, such as doctors, nurses and teachers, can settle after 5 years. Care workers who complied with their visa conditions and earned at least £25,000 a year can also settle after 5 years. Anyone who has breached the immigration rules will face a wait of at least 20 years.",
      "Every applicant, whenever they arrived, must meet four core requirements: a clean criminal record (with a tougher threshold than the current 12-month suspended sentence test), English at a high standard equivalent to A-Level English as a foreign language, no debts owed to the taxpayer, and a record of sustained National Insurance contributions. Refugees who come through Home Office-approved safe and legal routes can settle after 5 years; other refugees face 20 years, reduced to 10 for those in work or study, with an extra 10-year wait (up to 30 years in total) for those who arrived by small boat or other clandestine means.",
      "The rules apply at the point of application rather than the date of arrival, and the government estimates that more than 500,000 people will now wait longer than 5 years. Those who do not qualify for 5-year settlement will be offered a new 5-year visa instead, and nobody will be forced to leave. Existing settled status will not be removed, and family members of British citizens, Hong Kong BN(O) visa holders and members of the armed forces keep their current pathways."
    ],
    url: "https://www.gov.uk/government/news/home-secretary-unveils-new-rules-for-migrants-settling-in-the-uk",
    image: "news-earned-settlement.jpg"
  },
  {
    id: "refugee-lead-sponsors",
    dateSort: "2026-10-29",
    dateDisplay: "29 October 2026",
    source: "GOV.UK",
    icon: "clock",
    category: "Asylum",
    title: "Lead Sponsor Applications Open in Step Towards Refugee Arrivals",
    summary: "UK charities and non-profits can now apply to become lead sponsors under the new Named Community Sponsorship and Refugee Study routes.",
    teaser: "Applications to become a lead sponsor for the UK's new safe and legal refugee routes opened on 29 October 2026. First arrivals through the Named Community Sponsorship and Refugee Study routes are expected in autumn 2027, with a separate refugee work route opening to applications in spring 2027.",
    body: [
      "The Home Office opened applications on 29 October 2026 for organisations wanting to become lead sponsors under the UK's new safe and legal refugee routes, which the Home Secretary first pledged in November 2025. The routes are modelled on Canada's private sponsorship programme.",
      "Lead sponsors must be registered UK charities or non-profit organisations with a good reputation and suitable safeguarding arrangements and resources. Once accredited and overseen by the Home Office, they will support local groups such as community organisations, churches and universities to help refugees with accommodation, education, employment and access to local services.",
      "The first arrivals through the Named Community Sponsorship and Refugee Study routes are expected in autumn 2027, while a separate refugee work route will open to applications in spring 2027. Arrivals will be capped and linked to communities' capacity to sponsor; together with the reopened UK Resettlement Scheme, numbers are set to start in the hundreds and rise to the low thousands as illegal migration falls."
    ],
    url: "https://www.gov.uk/government/news/lead-sponsor-applications-open-in-step-towards-refugee-arrivals",
    image: "news-refugee-lead-sponsors.jpg"
  },
  {
    id: "contactless-egates",
    dateSort: "2026-10-06",
    dateDisplay: "6 October 2026",
    source: "GOV.UK",
    icon: "clock",
    category: "Border Control",
    title: "Airports to Go Contactless in Major Boost for UK Passengers",
    summary: "Border Force has begun rolling out contactless eGates that use facial recognition, so passengers no longer need to scan their passport at the border.",
    teaser: "Contactless eGates went live at East Midlands Airport on 6 October 2026, starting with British citizens. The gates match a live photo against passport, travel and immigration data, are around 25% faster in testing, and every eGate in the UK is due to be upgraded by early 2027.",
    body: [
      "The Home Office and Border Force announced on 6 October 2026 that UK airports will move to contactless eGates, allowing passengers to clear border control without placing their passport on a reader. The rollout started that day at East Midlands Airport, initially for British citizens, and will extend to more airports and other eligible nationalities over the coming months, with every eGate due to be upgraded by early 2027.",
      "At the gate, the traveller's photo is taken and checked against verified passport, travel and immigration records; if the full security checks are passed, the gate opens. Where further checks are needed, the passenger will be asked to present their passport or will be directed to a Border Force officer, and officers remain on hand at every eGate. Travellers are still told to carry their passport. Testing found the contactless gates work roughly 25% faster than the current passport-reader model.",
      "The government presents the change as part of the border modernisation programme set out in the Immigration White Paper, alongside the expansion of the Electronic Travel Authorisation (ETA) scheme and the extension of eGates to children aged eight and over. eGates currently operate at 13 UK airports, including Heathrow, Gatwick, Manchester, Birmingham, Edinburgh and Glasgow."
    ],
    url: "https://www.gov.uk/government/news/airports-to-go-contactless-in-major-boost-for-uk-passengers",
    image: "news-contactless-egates.jpg"
  },
  {
    id: "irish-border-smuggling",
    dateSort: "2026-09-29",
    dateDisplay: "29 September 2026",
    source: "GOV.UK",
    icon: "shield",
    category: "Enforcement",
    title: "Nearly 50 Arrests in People Smuggling Crackdown at Irish Border",
    summary: "Immigration Enforcement arrested 49 people in three days of targeted action against misuse of the Common Travel Area between Ireland and the UK.",
    teaser: "Between 22 and 24 September 2026, Immigration Enforcement arrested 49 people at ports, airports, roads and rail routes across the UK under Operation Comby, which targets illegal travel from Ireland. The operation has now made more than 250 arrests and 113 removals since the general election.",
    body: [
      "The Home Office reported on 29 September 2026 that Immigration Enforcement officers arrested 49 people during three days of targeted activity, from 22 to 24 September, at seaports, airports, roads and rail links in Northern Ireland, Scotland, England and Wales. The action formed part of Operation Comby, a multi-agency operation aimed at people abusing the Common Travel Area — the long-standing arrangement allowing British and Irish citizens to travel freely between the two countries — to enter the UK illegally.",
      "Since the general election, Operation Comby has led to more than 250 arrests and 113 removals from the UK, and nearly £500,000 in cash has been seized. A separate operation, Operation Gull, which carries out routine deployments at Northern Ireland's ports and airports, accounted for almost 1,000 arrests over the past year. Cases highlighted from the latest action included two Romanian women arrested at Belfast International Airport who were identified as possible trafficking victims, and four Romanian nationals stopped at Belfast Port with around £130,000 of counterfeit Apple goods.",
      "The department also said that between July 2024 and June 2026, Immigration Enforcement carried out nearly 3,000 enforcement visits in Northern Ireland, leading to more than 2,400 arrests and nearly 1,000 returns. The Home Secretary has announced plans to double the Immigration Enforcement budget by 2028/29 and grow its workforce by 60%."
    ],
    url: "https://www.gov.uk/government/news/nearly-50-arrests-in-people-smuggling-crackdown-at-irish-border",
    image: "news-irish-border-smuggling.jpg"
  },
  {
    id: "uk-resettlement-scheme",
    dateSort: "2026-09-28",
    dateDisplay: "28 September 2026",
    source: "GOV.UK",
    icon: "clock",
    category: "Asylum",
    title: "UK Resettlement Scheme Reopens for New Referrals",
    summary: "The Home Secretary has reopened the UK Resettlement Scheme, with around one in four referrals set aside for Afghan women and girls and Palestinian refugees.",
    teaser: "The UK Resettlement Scheme reopened to new referrals on 28 September 2026, working with UNHCR and the International Refugee Assistance Project. New community, university and corporate sponsorship routes will follow, and those resettled will get a five-year route to settlement.",
    body: [
      "Home Secretary Shabana Mahmood announced on 28 September 2026 that the UK Resettlement Scheme (UKRS) has reopened for new referrals as a safe and legal route for refugees. Referrals are being made through the UN Refugee Agency (UNHCR) and the International Refugee Assistance Project (IRAP), with the first arrivals expected before the end of the year. Around one in four referrals will go to Afghan women and girls and to Palestinian refugees.",
      "The government also set out three new sponsorship routes: a route for charities and non-profit organisations, with applications opening in October and first arrivals expected in autumn 2027; a university sponsorship route, also expecting arrivals from autumn 2027; and a corporate sponsorship route opening to applications in spring 2027. Sponsors on each route will be expected to provide housing, integration support and help finding work.",
      "Numbers will start in the hundreds and are intended to rise to the low thousands as illegal migration falls, subject to annual caps. People resettled through these routes will be given a five-year path to permanent settlement, which the Home Office describes as more generous than the terms available to those who arrive by small boat or other irregular means."
    ],
    url: "https://www.gov.uk/government/news/uk-resettlement-scheme-reopens-for-new-referrals",
    image: "news-uk-resettlement-scheme.jpg"
  },
  {
    id: "hc584",
    dateSort: "2026-09-03",
    dateDisplay: "3 September 2026",
    source: "GOV.UK",
    icon: "doc",
    category: "Immigration Rules",
    title: "Statement of Changes to the Immigration Rules: HC 584",
    summary: "New Immigration Rules changes laid on 3 September 2026, mostly in force from 8 October, affect Skilled Worker, Visitor, Student, EU Settlement Scheme, BN(O) and domestic abuse routes.",
    teaser: "HC 584 was laid before Parliament on 3 September 2026. Most changes apply from 8 October 2026, with religious worker route changes from 29 October, a student maintenance increase from 30 November, and EU Settlement Scheme identity changes from 9 December 2026.",
    body: [
      "The Home Office laid Statement of Changes HC 584 before Parliament on 3 September 2026. The bulk of the changes took effect on 8 October 2026, with further changes to the Minister of Religion and Religious Worker routes from 29 October 2026, a rise in student maintenance funds from 30 November 2026, and a change to identity evidence under the EU Settlement Scheme from 9 December 2026.",
      "For Skilled Workers, the changes give additional work flexibility to people who receive a positive Conclusive Grounds decision under the modern slavery framework while holding permission. The Victim of Domestic Abuse route is widened to cover more relationship types and certain dependent children aged 18 or over, and the Visitor and Student rules gain new provisions for Erasmus+ participants, covering study, training, traineeships and job shadowing. Visitor rules are also adjusted for permitted training and for artists, entertainers and musicians attending rehearsals.",
      "Student maintenance amounts increase from £1,529 to £1,570 per month in London and from £1,171 to £1,203 per month elsewhere. The religious worker routes are restructured, including a National Minimum Wage exemption backed by sponsor maintenance obligations, while the Hong Kong BN(O) settlement rules and several EU Settlement Scheme provisions — including the removal of the biometric residence permit as proof of identity — are clarified or tightened."
    ],
    url: "https://www.gov.uk/government/publications/statement-of-changes-to-the-immigration-rules-hc-584-3-september-2026",
    image: null
  },
  {
    id: "immigration-stats-mar2026",
    dateSort: "2026-07-16",
    dateDisplay: "16 July 2026",
    source: "GOV.UK",
    icon: "clock",
    category: "Migration Stats",
    title: "Immigration System Statistics: Year Ending March 2026",
    summary: "Home Office figures for the year ending March 2026 show asylum claims and most visa grant categories falling year-on-year, while the asylum backlog fell by more than half.",
    teaser: "The Home Office's quarterly statistics release, published 16 July 2026, recorded 94,000 asylum claims for the year ending March 2026, down 12% on the previous year, alongside a 55% fall in the number of people awaiting an initial asylum decision. Work, study, family and settlement grants all declined over the same period, while small boat arrivals and enforcement returns both edged higher.",
    body: [
      "The Home Office published its latest quarterly Immigration System Statistics release on 16 July 2026, covering the year ending March 2026 across entry, visas, asylum, detention, returns and citizenship.",
      "On asylum, 94,000 people claimed asylum in the year, 12% fewer than the previous 12 months, while initial decisions rose sharply to 128,000, up 32%. The overall grant rate at initial decision fell to 39%, down from 49% a year earlier. The number of people still awaiting an initial decision dropped to 49,000, a fall of 55% on the previous year and 72% below the peak recorded in June 2023.",
      "Visa grants were down across most main categories: work visas fell 17% to 253,000, sponsored study visas fell 3% to 410,000, and family visas fell 17% to 62,000, while 2.2 million visitor visas were granted. Settlement grants fell 11% to 152,000 and citizenship grants fell 12% to 237,000, while grants of EU Settlement Scheme settled status rose 12% to 371,000.",
      "Detected irregular arrivals totalled 44,000, of which small boat crossings made up 39,000 (90%) — a slight increase on the previous year but 14% below the 2022 peak. Returns rose 7% to 39,000, including a 13% rise in enforced returns to 9,700, and entries into immigration detention rose 7% to 23,000."
    ],
    url: "https://www.gov.uk/government/statistics/immigration-system-statistics-year-ending-march-2026",
    image: null
  },
  {
    id: "immigration-asylum-bill",
    dateSort: "2026-07-13",
    dateDisplay: "13 July 2026",
    source: "GOV.UK",
    icon: "clock",
    category: "Asylum",
    title: "Immigration and Asylum Bill Passes Second Reading",
    summary: "MPs voted 264 to 90 to give the Immigration and Asylum Bill its second reading, backing reforms to asylum appeals, Article 8 human rights claims and modern slavery protections.",
    teaser: "The Home Secretary opened the second reading debate on the Immigration and Asylum Bill on 13 July 2026, which MPs then passed by 264 votes to 90. The bill would replace immigration judges with a new Independent Immigration Appeals Authority, narrow Article 8 family-life claims, and require successful refugees to contribute financially towards their support once in work.",
    body: [
      "The Immigration and Asylum Bill, introduced in the Commons on 30 June 2026, had its second reading on 13 July 2026, with Home Secretary Shabana Mahmood opening the debate. MPs voted 264 to 90 in favour, with 14 Labour MPs voting against the bill.",
      "The bill's central change is the creation of a new Independent Immigration Appeals Authority, staffed by trained adjudicators rather than judges, replacing the First-tier Tribunal's immigration and asylum chamber. It would also merge refugee status and humanitarian protection into a single, temporary 'core protection' model, and move to a single appeal route requiring claimants to raise all relevant grounds upfront rather than in stages.",
      "On human rights, the bill would narrow how Article 8 of the European Convention on Human Rights — the right to family life — can be used in immigration cases, defining 'family life' primarily as spouses, partners and children under 18, and providing that illegal entry weakens the strength of a claim. It would also give the Home Secretary a new power to remove some long-term residents convicted of serious offences, and bar modern slavery protection from those judged a security threat or serving a custodial sentence. A separate provision would require successful refugees to repay a portion of taxpayer-funded support once they are in employment.",
      "In her opening speech, the Home Secretary cited asylum support costing £4.7 billion in a single year, including roughly £9 million a day on housing people in around 400 asylum hotels, and said arrests of people smugglers were up 55% on the previous year. The bill next moves to committee stage, due to begin on 10 September 2026 and expected to report by early November 2026, before any further Commons and Lords stages."
    ],
    url: "https://www.gov.uk/government/speeches/immigration-and-asylum-bill-second-reading-opening-speech",
    image: "news-immigration-asylum-bill.jpg"
  },
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
];
