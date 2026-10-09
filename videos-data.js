// H&Y Law — TikTok video data for videos.html
// "mostWatched": evergreen, hand-picked explainers. Change rarely.
// "recentUploads": rotating queue, newest first, max 4 entries.
//   The scheduled refresh agent prepends new uploads here and drops the oldest
//   once there are more than 4, so this array is always ordered newest -> oldest.
//
// "duration" (seconds): the REAL playback length of the TikTok video, pulled from
// TikTok's own page data (not a guess). TikTok's embed exposes no "ended" event,
// so the player uses this real duration (plus a small buffer for load time,
// added in videos.html's playTikTok()) to auto-close the video right as it
// naturally finishes — before TikTok's own "related videos" end-card can appear.
// If you add a new video, fetch its real duration with:
//   curl -sL -A "Mozilla/5.0" "https://www.tiktok.com/@USER/video/<id>" | grep -o '"duration":[0-9]*' | head -1
// There's also a manual close (X) button on every playing video regardless.
//
// "uploadDate" (YYYY-MM-DD): the REAL TikTok upload date, used for VideoObject
// structured data (SEO). Fetch it the same way as duration:
//   curl -sL -A "Mozilla/5.0" "https://www.tiktok.com/@USER/video/<id>" | grep -o '"createTime":"[0-9]*"' | head -1
// then convert the unix timestamp to a date.

const MOST_WATCHED = [
  {
    id: "7550780222598057238",
    thumb: "tt-thumb-1-v3.jpg",
    tag: "Spouse Visa",
    views: null,
    caption: "Exempt From the £29,000 Income Rule?",
    alt: "Exempt from the £29,000 spouse visa income requirement",
    duration: 31,
    uploadDate: "2025-09-16"
  },
  {
    id: "7557105637037985046",
    thumb: "tt-thumb-9.jpg",
    tag: "ILR",
    views: null,
    caption: "ILR for a Child: 5 Years, Not 10",
    alt: "ILR for a child after 5 years, not 10",
    duration: 48,
    uploadDate: "2025-10-03"
  },
  {
    id: "7649543937383877910",
    thumb: "tt-thumb-10.jpg",
    tag: "Citizenship",
    views: null,
    caption: "Will the 'Good Character' Rule Affect You?",
    alt: "Does the good character requirement affect your citizenship application?",
    duration: 72,
    uploadDate: "2026-06-09"
  },
  {
    id: "7573831193578212630",
    thumb: "tt-thumb-11.jpg",
    tag: "Asylum",
    views: null,
    caption: "Major Changes to the Asylum System",
    alt: "Shabana Mahmood announces major changes to the asylum system",
    duration: 56,
    uploadDate: "2025-11-17"
  }
];

const RECENT_UPLOADS = [
  {
    id: "7692107620844375329",
    thumb: "tt-thumb-20.jpg",
    tag: "Citizenship",
    caption: "Citizenship Approved in Under a Week (Farsi)",
    alt: "An Afghan client shares, in Farsi, his experience after his British citizenship application was approved in under a week with H&Y Law",
    addedAt: "2026-10-09",
    duration: 46,
    uploadDate: "2026-10-02"
  },
  {
    id: "7682410851088764193",
    thumb: "tt-thumb-19.jpg",
    tag: "Citizenship",
    caption: "Citizenship Approved in Under a Week (Pashto)",
    alt: "An Afghan client shares, in Pashto, his experience after his British citizenship application was approved in under a week with H&Y Law",
    addedAt: "2026-10-09",
    duration: 46,
    uploadDate: "2026-09-06"
  },
  {
    id: "7667283048118930710",
    thumb: "tt-thumb-16.jpg",
    tag: "Free Consultation",
    caption: "Free Consultations: New Ilford Office",
    alt: "H&Y Law offers free immigration consultations to celebrate opening their new Ilford office",
    addedAt: "2026-08-05",
    duration: 23,
    uploadDate: "2026-07-27"
  },
  {
    id: "7667153657917443350",
    thumb: "tt-thumb-17.jpg",
    tag: "Firm Update",
    caption: "On This Day",
    alt: "H&Y Law's On This Day post looking back at a past milestone",
    addedAt: "2026-08-05",
    duration: 28,
    uploadDate: "2026-07-27"
  },
];
