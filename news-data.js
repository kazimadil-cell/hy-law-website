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
      "Home Secretary Shabana Mahmood set out new settlement rules in an oral statement to Parliament on 2 November 2026, following the earned settlement consultation launched in November 2025, which drew more than 200,000 responses. Under the new model, indefinite leave to remain is no longer granted almost automatically after five years; how long someone waits instead depends on their contribution and character.",
      "For the general routes, the default qualifying period becomes 10 years. The highest earners — highest-rate taxpayers and people on the top-talent routes — can settle after 3 years, while people earning over £50,271 and certain public service workers, such as doctors, nurses and teachers, can settle after 5 years. Anyone who has breached the immigration rules will face a wait of at least 20 years, and anyone who has claimed benefits will need five continuous years without relying on the state before applying.",
      "Care workers who complied with their visa conditions and earned at least £25,000 a year keep their 5-year path. Around 250,000 people (plus dependants) came to or switched into the social care route between 2022 and 2025, and roughly a quarter of them did not meet their visa conditions; they will be offered a further 5-year care visa that is not tied to their old employer, with longer to find a new job before their visa is curtailed. A similar arrangement covers certain public sector roles identified by the Migration Advisory Committee, such as auxiliary nurses. These transitional arrangements apply to people who arrived before the Immigration White Paper of May 2025.",
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
    id: "eritrea-visa-penalties",
    dateSort: "2026-10-15",
    dateDisplay: "15 October 2026",
    source: "GOV.UK",
    icon: "shield",
    category: "Visa Restrictions",
    title: "Home Secretary Threatens Eritrea with Visa Penalties",
    summary: "Eritrean officials have lost fast-track UK visa processing, and the Home Secretary has warned that all visas for Eritreans could be blocked unless returns resume.",
    teaser: "On 15 October 2026 the Home Office removed preferential visa processing for Eritrean VIPs and officials and restricted Eritrean diplomats' travel outside London. Shabana Mahmood warned that every visa for Eritrean nationals could be blocked if Eritrea does not agree to take back people with no right to be in the UK.",
    body: [
      "Home Secretary Shabana Mahmood announced on 15 October 2026 that Eritrean VIPs and government officials would lose access to preferential, fast-track UK visa processing with immediate effect. She warned that the UK would go further and block all visas for Eritrean nationals if Eritrea does not quickly agree to accept the return of its citizens who have no right to remain in the UK.",
      "Eritrean diplomats in the UK are now barred from travelling more than 60 km (37 miles) outside London without Foreign Office permission, mirroring restrictions placed on British officials in Asmara. The Home Office said Eritrea had abruptly withdrawn from returns cooperation earlier in 2026, and that Eritreans were the most common nationality arriving by small boat in the year ending June 2026.",
      "The move follows the government's earlier use of visa penalties. Angola and Namibia agreed improved returns arrangements soon after being threatened with visa measures in autumn 2025, while restrictions imposed on the Democratic Republic of Congo were lifted after six months of sustained cooperation and resumed returns flights. The department also pointed to a new deal with Egypt that is expected to cut the time taken to return Egyptian nationals by around 90%, from roughly 30 weeks to 3 weeks."
    ],
    url: "https://www.gov.uk/government/news/home-secretary-threatens-eritrea-with-visa-penalties",
    image: "news-eritrea-visa-penalties.jpg"
  },
  {
    id: "article8-reforms",
    dateSort: "2026-10-12",
    dateDisplay: "12 October 2026",
    source: "GOV.UK",
    icon: "doc",
    category: "Human Rights",
    title: "Migrants Exploiting Human Rights Laws Targeted in Fresh Reforms",
    summary: "The government has tabled amendments to the Immigration and Asylum Bill to limit Article 8 family-life claims used to resist deportation and to penalise late claims.",
    teaser: "Two amendments to the Immigration and Asylum Bill, announced on 12 October 2026, would make courts look at how much real contact a parent has with a child, stop people bolstering Article 8 claims by moving back into the family home just before claiming, and allow last-minute claims to count against a person's credibility.",
    body: [
      "The Home Office announced on 12 October 2026 that it had tabled two amendments to the Immigration and Asylum Bill, aimed at narrowing how the right to family life under Article 8 of the European Convention on Human Rights can be used to prevent deportation, and at tightening the treatment of late claims.",
      "Under the amendments, courts deciding whether family life exists would have to consider how long and how often a parent has actually been in contact with their child. The changes are also designed to stop people strengthening an Article 8 claim by moving back into a family home shortly before making it. In addition, last-minute claims made without good reason could damage a person's credibility, and decision-makers would have to take into account when evidence was submitted.",
      "These sit alongside measures already in the bill: a definition of 'family life' generally limited to core, co-habiting family relationships; a faster process for late claims; a single appeal route; a single definition of a protection claim combining refugee status and humanitarian protection; a new Independent Immigration Appeals Authority; and a requirement for asylum seekers in taxpayer-funded accommodation to contribute to costs where they can afford to. The bill passed its Commons second reading in July with a majority of 174 and is now going through detailed line-by-line scrutiny, so none of these measures is yet in force."
    ],
    url: "https://www.gov.uk/government/news/migrants-exploiting-human-rights-laws-targeted-in-fresh-reforms",
    image: "news-article8-reforms.jpg"
  },
  {
    id: "slavery-victims-skilled-worker",
    dateSort: "2026-10-09",
    dateDisplay: "9 October 2026",
    source: "GOV.UK",
    icon: "shield",
    category: "Sponsorship",
    title: "Victims Freed from Abusive Employers Under New Visa Rules",
    summary: "Skilled Worker visa holders, including care workers, who are formally recognised as modern slavery victims can now leave an abusive sponsor and take any lawful work.",
    teaser: "From 9 October 2026, Skilled Worker visa holders recognised by the Home Office as modern slavery victims are no longer tied to their sponsor and can do any lawful work for the rest of their visa. The Home Office also reported that more than 6,600 sponsors have lost their licences since the current government took office.",
    body: [
      "The Home Office announced on 9 October 2026 that, from that day, people on Skilled Worker visas — including care workers — who are formally recognised as victims of modern slavery can leave an abusive sponsor. Once recognised, they are no longer tied to a particular employer and may take any lawful work for the remainder of their visa.",
      "Previously, leaving an abusive sponsor could cost a worker both their immigration status and their income, as Skilled Worker visa holders have no recourse to public funds. The Home Office gave the example of a care worker who paid an agency £20,000 for a full-time role, was then charged £400 a month by her sponsor to keep her visa active, and was paid only £200 to £300 a month when work did materialise.",
      "Alongside the change, the department said more than 6,600 sponsors have lost their licence to employ overseas workers since the current government took office, including over 4,400 in the year ending June 2026 — a 140% rise on the previous year and the highest on record. Sponsors found to be involved in criminality will be referred to the police. The measure delivers a commitment in the Immigration White Paper to make it easier for sponsored workers to change employer and reduce their dependence on a single sponsor."
    ],
    url: "https://www.gov.uk/government/news/victims-freed-from-abusive-employers-under-new-visa-rules",
    image: "news-slavery-victims-skilled-worker.jpg"
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
];
