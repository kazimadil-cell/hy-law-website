// H&Y Law — TikTok video data for videos.html
// "mostWatched": evergreen, hand-picked explainers. Change rarely.
// "recentUploads": rotating queue, newest first, max 4 entries.
//   The scheduled refresh agent prepends new uploads here and drops the oldest
//   once there are more than 4, so this array is always ordered newest -> oldest.

const MOST_WATCHED = [
  {
    id: "7550780222598057238",
    thumb: "tt-thumb-1.jpg",
    tag: "Spouse Visa",
    views: "101.2K",
    caption: "Exempt From the £29,000 Income Rule?",
    alt: "Exempt from the £29,000 spouse visa income requirement"
  },
  {
    id: "7557105637037985046",
    thumb: "tt-thumb-2.jpg",
    tag: "ILR",
    views: "3,440",
    caption: "ILR for a Child: 5 Years, Not 10",
    alt: "ILR for a child after 5 years, not 10"
  },
  {
    id: "7649543937383877910",
    thumb: "tt-thumb-3.jpg",
    tag: "Citizenship",
    views: null,
    caption: "Will the 'Good Character' Rule Affect You?",
    alt: "Does the good character requirement affect your citizenship application?"
  },
  {
    id: "7573831193578212630",
    thumb: "tt-thumb-7.jpg",
    tag: "Asylum",
    views: null,
    caption: "Major Changes to the Asylum System",
    alt: "Shabana Mahmood announces major changes to the asylum system"
  }
];

const RECENT_UPLOADS = [
  {
    id: "7575354631535037718",
    thumb: "tt-thumb-4.jpg",
    tag: "Citizenship",
    caption: "Illegal Entry &amp; British Citizenship",
    alt: "Illegal entry and British citizenship applications",
    addedAt: "2026-07-11"
  },
  {
    id: "7566388524090592514",
    thumb: "tt-thumb-5.jpg",
    tag: "Spouse Visa",
    caption: "Spouse Visa: Get Tailored Advice",
    alt: "Get tailored spouse visa legal advice",
    addedAt: "2026-07-11"
  },
  {
    id: "7564520083695996182",
    thumb: "tt-thumb-8.jpg",
    tag: "Immigration Rules",
    caption: "Immigration Rules Update: HC133",
    alt: "Latest update to the immigration rules, Statement of Changes HC133",
    addedAt: "2026-07-11"
  },
  {
    id: "7555955296477269270",
    thumb: "tt-thumb-6.jpg",
    tag: "Spouse Visa",
    caption: "Answering Your Spouse Visa Question",
    alt: "Answering a follower's spouse visa question",
    addedAt: "2026-07-11"
  }
];
