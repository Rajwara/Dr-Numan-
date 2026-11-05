/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SITE DATA: single source of truth for every non-blog page.
 *
 *  Everything marked  TODO  is PLACEHOLDER copy and must be replaced with
 *  content supplied/approved by Dr. Niaz before launch (see README checklist).
 *  Images: drop files into /public/images and set the `image` paths below.
 *  Any missing image renders as a styled monochrome placeholder automatically.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const site = {
  name: 'Dr. Nauman Niaz',
  shortName: 'Niaz',
  // TODO: descriptor line to be approved by Dr. Niaz (Home sheet, 1.0)
  descriptor: 'Physician, broadcaster, author and cricket historian.',
  // TODO: confirm 50-word bio, used in footer and meta
  shortBio:
    'Dr. Nauman Niaz is a physician, broadcaster, author and cricket historian. A clinical endocrinologist, he has analysed cricket on PTV since 1992, led PTV Sports, and written more than a dozen books on the game.',
  // Home hero banner: /public/images/hero-desktop-*.{webp,jpg} and hero-mobile-*.{webp,jpg}
  aboutPortrait: '', // TODO: second, environmental portrait (studio, clinic or library)
  location: 'Islamabad, Pakistan',
  timezone: 'Asia/Karachi',
  email: 'office@drnaumanniaz.com', // TODO: confirm which email to publish
  museum: {
    name: 'The Cricket Museum', // TODO: museum name
    location: 'Location to be confirmed', // TODO
    url: 'https://example.com/museum', // TODO: museum website
  },
  // Contact form endpoint (Formspree, Basin, Netlify Forms etc.). Managed by Penaxis.
  formEndpoint: 'https://formspree.io/f/your-form-id', // TODO
};

/** Post-nominal qualifications line, as he uses it. Shown on the Home banner and About page. */
export const postnominals = [
  'Post Doc (Oxford)',
  'PhD (UWA)',
  'FRCP (London, Glasgow, Edinburgh, Ireland)',
  'CCST (Endo, UK)',
  'MSc Biomechanics (UWA)',
  'MRCP (UK)',
  'MBBS (PB)',
];

export const socials = [
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/dr-nauman-niaz-b53930165/' },
  { label: 'Instagram', url: 'https://www.instagram.com/dr.naumanniaz/' },
  { label: 'Facebook', url: 'https://www.facebook.com/DrNaumaNiaz/' },
  { label: 'X / Twitter', url: 'https://x.com/DrNaumanNiaz' },
  // TODO: add a YouTube channel when Conversations launches
];

export const subscribeLinks = [
  // TODO: Conversations subscribe links
  { label: 'YouTube', url: 'https://youtube.com/' },
  { label: 'Spotify', url: 'https://open.spotify.com/' },
  { label: 'Apple Podcasts', url: 'https://podcasts.apple.com/' },
];

/** Primary navigation (Read Me sheet). 7 visible on desktop, 2 folded under "More". */
export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
  { label: 'Broadcasting', href: '/broadcasting/' },
  { label: 'Publications', href: '/publications/' },
  { label: 'Medicine & Academia', href: '/medicine-academia/', more: true },
  { label: 'Insights', href: '/insights/' },
  { label: 'Conversations', href: '/conversations/' },
  { label: 'Memorabilia', href: '/memorabilia/', more: true },
  { label: 'Contact', href: '/contact/' },
];

/** Home 2.0: credentials strip. Plain text, 4–6 facts, numbers from CV. */
export const credentials = [
  { value: '34+', label: 'Years in broadcasting' }, // PTV since 1992
  { value: '19', label: 'Books published' }, // Myth & Reality (2026) described as his 19th book
  { value: '24+', label: 'Years in clinical practice' }, // since 2002
  { value: '2014', label: 'Tamgha-i-Imtiaz' },
];

/** Home 3.0: four pillars. Images reuse the page hero images. */
export const pillars = [
  {
    title: 'Broadcasting',
    text: 'Decades on air: hosting, commentary and interviews with the people who shaped the game.',
    href: '/broadcasting/',
    image: '/images/pillar-broadcasting.webp',
  },
  {
    title: 'Publications',
    text: 'Books, columns and essays on cricket, medicine and the history that connects them.',
    href: '/publications/',
    image: '/images/pillar-publications.webp',  // illustrative (AI)
  },
  {
    title: 'Medicine & Academia',
    text: 'Sports medicine practice, research and teaching, written for peers and institutions.',
    href: '/medicine-academia/',
    image: '/images/pillar-medicine.webp',  // illustrative (AI)
  },
  {
    title: 'Memorabilia',
    text: 'A private collection of cricket history, now on view at the museum.',
    href: '/memorabilia/',
    image: '/images/pillar-memorabilia.webp',  // illustrative (AI) — replace with a real collection photo when available
  },
];

/** Home 6.0 (optional) + Publications 2.0 */
export const books = [
  // Sourced from press coverage (CricketWeb, Dawn, ProPakistani, JournalismPakistan).
  // TODO: add cover images, purchase links and the remaining titles (19 in total).
  {
    title: 'Myth & Reality: Type II Diabetes & Disease Impact in Pakistan',
    publisher: 'Launched with Getz Pharma',
    year: '2026',
    synopsis: 'A study of type 2 diabetes and its impact on health in Pakistan, drawing on his work as a clinical endocrinologist.',
    cover: '',
    featured: true,
    buy: [] as { label: string; url: string }[],
    excerpt: '',
  },
  {
    title: 'Heritage & Legacy: 1950s',
    publisher: 'Boundary Books',
    year: '2026',
    synopsis: 'Pakistan cricket in its first full decade, with profiles of all 35 players who represented Pakistan in Tests during the 1950s.',
    cover: '',
    featured: false,
    buy: [] as { label: string; url: string }[],
    excerpt: '',
  },
  {
    title: 'The Cricket Conversations',
    publisher: '',
    year: '2025',
    synopsis: 'Interviews with 52 figures from the game, opening with C. L. R. James.',
    cover: '',
    featured: false,
    buy: [] as { label: string; url: string }[],
    excerpt: '',
  },
  {
    title: 'In a Different Realm: Story of Quadruple and Triple Centuries 1876–2025',
    publisher: 'Privately published',
    year: '2025',
    synopsis: 'The history of cricket’s quadruple and triple centuries, from 1876 to 2025.',
    cover: '',
    featured: false,
    buy: [] as { label: string; url: string }[],
    excerpt: '',
  },
  {
    title: 'Collector’s Eye',
    publisher: 'Boundary Books',
    year: '2021',
    synopsis: 'Two volumes and nearly a thousand pages presenting his collection of cricket memorabilia in full-colour photographs.',
    cover: '',
    featured: false,
    buy: [] as { label: string; url: string }[],
    excerpt: '',
  },
  {
    title: 'Pakistan Cricket: The Story of Betrayal',
    publisher: '',
    year: '2010', // TODO: approved synopsis
    synopsis: 'An account of Pakistan cricket and the forces that shaped it.',
    cover: '',
    featured: false,
    buy: [] as { label: string; url: string }[],
    excerpt: '',
  },
  {
    title: 'The Fluctuating Fortunes',
    publisher: 'Pakistan Cricket Board',
    year: '2005', // TODO: sources give 2005 or 2007, and four or five volumes; confirm
    synopsis: 'The multi-volume history of Pakistan cricket commissioned by the Pakistan Cricket Board.',
    cover: '',
    featured: false,
    buy: [] as { label: string; url: string }[],
    excerpt: '',
  },
];

/** Publications 3.0: link out, never republish. Filter by topic and outlet. */
export const articles: { title: string; outlet: string; date: string; topic: 'Cricket' | 'History' | 'Medicine'; url: string }[] = [
  // TODO: list of published articles with links
  { title: 'Article title on a cricket subject', outlet: 'Outlet A', date: '2025-08-14', topic: 'Cricket', url: '#' },
  { title: 'Article title on a history subject', outlet: 'Outlet B', date: '2025-05-02', topic: 'History', url: '#' },
  { title: 'Article title on a sports medicine subject', outlet: 'Outlet C', date: '2024-11-20', topic: 'Medicine', url: '#' },
  { title: 'Second article on a cricket subject', outlet: 'Outlet A', date: '2024-07-09', topic: 'Cricket', url: '#' },
  { title: 'Second article on a history subject', outlet: 'Outlet C', date: '2023-12-01', topic: 'History', url: '#' },
  { title: 'Second article on a medicine subject', outlet: 'Outlet B', date: '2023-03-18', topic: 'Medicine', url: '#' },
];

/**
 * Academic papers: listed ONCE, on Medicine & Academia (spreadsheet: "Do not list in both places").
 * Publications links across to that section instead.
 */
export const papers: { citation: string; journal: string; year: string; doi: string }[] = [
  // TODO: add selected papers (citation, journal, year, DOI link). Section hides while empty.
];

/** Broadcasting 2.0. No channel logos without permission. */
export const programmes = [
  {
    title: 'Game On Hai',
    channel: 'PTV Sports',
    years: '', // TODO: years on air
    format: 'Studio analysis',
    text: 'His signature cricket show on PTV Sports, with Shoaib Akhtar and Rashid Latif on the panel and post-match guests from across the game.',
    image: '/images/programme-game-on-hai.webp', // illustrative; replace with a real still of the show
  },
  {
    title: 'Cricket host & analyst',
    channel: 'PTV (Pakistan Television)',
    years: '1992 – present',
    format: 'Studio analysis & live coverage',
    text: 'More than three decades presenting and analysing international and domestic cricket on national television.',
    image: '/images/programme-ptv.webp', // illustrative; replace with a real still
  },
  // TODO: add other named programmes / series with their years
];

/** Broadcasting 3.0. Where no clip exists, show name only (leave link empty). */
export const interviews = [
  // Post-match guests on Game On Hai (PTV Sports). TODO: add years, clip links and more names.
  { name: 'Sir Vivian Richards', role: 'West Indies batting great', year: '', link: '' },
  { name: 'David Gower', role: 'Former England captain', year: '', link: '' },
  { name: 'Sana Mir', role: 'Former Pakistan women’s captain', year: '', link: '' },
  { name: 'Umar Gul', role: 'Former Pakistan fast bowler', year: '', link: '' },
];

/** Broadcasting 4.0 (optional): YouTube IDs of showreel clips. Leave empty to hide. */
export const showreel: { youtubeId: string; title: string }[] = [];

/** Broadcasting 5.0 (optional) + hero "as seen on". Text list, safer than logos. */
export const networks = ['PTV', 'PTV Sports', 'Pakistan Cricket Board', 'Asian Cricket Council']; // TODO: add tournaments covered

/** About 3.0 */
export const qualifications = [
  // Supplied by Dr. Niaz. TODO: add the year for each from the CV.
  { title: 'Postdoctoral Fellowship', institution: 'University of Oxford', year: '' },
  { title: 'PhD', institution: 'University of Western Australia (UWA)', year: '' },
  { title: 'FRCP: Fellow of the Royal College of Physicians', institution: 'London, Glasgow, Edinburgh and Ireland', year: '' },
  { title: 'CCST in Endocrinology', institution: 'United Kingdom', year: '' },
  { title: 'MSc Biomechanics', institution: 'University of Western Australia (UWA)', year: '' },
  { title: 'MRCP', institution: 'United Kingdom', year: '' },
  { title: 'MBBS', institution: 'Rawalpindi Medical College (University of the Punjab)', year: '' }, // TODO: confirm (source: Oladoc profile)
];

/** About 4.0: 15–25 entries, colour-coded by field. */
export type Field = 'Medicine' | 'Broadcasting' | 'Writing' | 'Academia';
export const timeline: { year: string; title: string; text: string; field: Field }[] = [
  // From his LinkedIn experience and press coverage. TODO: confirm with CV.
  { year: '1992', title: 'Cricket host & analyst, PTV', text: 'Begins a broadcasting career on Pakistan Television that continues today.', field: 'Broadcasting' },
  { year: '1998', title: 'Manager Coordination, Asian Cricket Council', text: 'Media coordination for the Pakistan Cricket Board and the Asian Cricket Council.', field: 'Broadcasting' },
  { year: '1999', title: 'Media Manager, Pakistan Cricket Board', text: 'Joins the PCB in Lahore as media manager.', field: 'Broadcasting' },
  { year: '2000', title: 'Associate Manager, Pakistan team', text: 'Tours the UAE, West Indies, Bangladesh and Sri Lanka with the national side.', field: 'Broadcasting' },
  { year: '2001', title: 'Pakistan’s first cricket analyst', text: 'Sets up the team’s analysis wing, first used on the tour of New Zealand.', field: 'Academia' },
  { year: '2002', title: 'Clinical Endocrinologist', text: 'Begins clinical practice at the Mahmooda Niaz Clinic, Islamabad.', field: 'Medicine' },
  { year: '2005', title: 'The Fluctuating Fortunes', text: 'His multi-volume history of Pakistan cricket, commissioned by the PCB.', field: 'Writing' },
  { year: '2010', title: 'Pakistan Cricket: The Story of Betrayal', text: 'Published.', field: 'Writing' },
  { year: '2012', title: 'Head of Content, PTV', text: 'Leads content for Pakistan Television.', field: 'Broadcasting' },
  { year: '2014', title: 'Director Sports, PTV Sports', text: 'Channel head of PTV Sports until 2022.', field: 'Broadcasting' },
  { year: '2014', title: 'Tamgha-i-Imtiaz', text: 'Awarded for sports journalism and broadcasting.', field: 'Broadcasting' },
  { year: '2018', title: 'Director, PTV Training Academy', text: 'Leads the broadcaster’s training academy in Islamabad.', field: 'Academia' },
  { year: '2021', title: 'Collector’s Eye', text: 'Two-volume book on his memorabilia collection (Boundary Books).', field: 'Writing' },
  { year: '2024', title: 'Director Special Assignments, PTV', text: 'Current role, Islamabad.', field: 'Broadcasting' },
  { year: '2025', title: 'Sports Editor, JournalismPakistan', text: 'Joins JournalismPakistan.com and publishes The Cricket Conversations.', field: 'Writing' },
  { year: '2026', title: 'Myth & Reality', text: 'His 19th book, on type 2 diabetes in Pakistan.', field: 'Medicine' },
];

/** About: experience, grouped by organisation (from his LinkedIn profile). */
export const experience: {
  org: string;
  span: string;
  roles: { title: string; dates: string; place?: string; text?: string }[];
}[] = [
  {
    org: 'Pakistan Television Corporation (PTV)',
    span: '1992 – present',
    roles: [
      { title: 'Director Special Assignments', dates: 'May 2024 – present', place: 'Islamabad' },
      { title: 'Cricket Host / Analyst', dates: '1992 – present' },
      {
        title: 'Director Sports',
        dates: 'Feb 2014 – May 2022',
        text: 'As channel head of PTV Sports, responsible for the acquisition of live international and domestic content, forecasting, assessment of consumer demand and the channel’s future direction.',
      },
      { title: 'Director of Training Academy', dates: '2018 – 2019', place: 'Islamabad' },
      { title: 'Head of Operations & Content', dates: '2013 – 2014' },
      { title: 'Head of Content', dates: '2012 – 2013' },
    ],
  },
  {
    org: 'Mahmooda Niaz Clinic',
    span: '2002 – present',
    roles: [{ title: 'Clinical Endocrinologist', dates: '2002 – present', place: 'Pakistan' }],
  },
  {
    org: 'Pakistan Cricket Board',
    span: '1998 – 2001',
    roles: [
      { title: 'Media Manager / Cricket Analyst', dates: '1999 – 2001', place: 'Lahore', text: 'Media manager, then associate manager of the Pakistan team on its 2000 tours, before setting up the board’s cricket analyst wing.' },
      {
        title: 'Manager Coordination, Asian Cricket Council',
        dates: '1998 – 1999',
        place: 'Islamabad',
        text: 'Media Coordinator of the Pakistan Cricket Board, Manager Coordination of the Asian Cricket Council and Manager Media of the Pakistan Cricket Board.',
      },
    ],
  },
];

/** About 5.0 */
export const honours = [
  { title: 'Tamgha-i-Imtiaz (TI)', body: 'For sports journalism and broadcasting', year: '2014' },
  // TODO: other awards or honorary positions from the CV
];

/** Home 8.0 / About 6.0 (optional). Needs written permission. Empty = hidden. */
export const quotes: { quote: string; name: string; role: string }[] = [];

/** About 7.0 (optional). Files in /public/downloads. Empty = hidden. */
export const downloads: { label: string; href: string; meta: string }[] = [
  // { label: 'Short bio', href: '/downloads/bio.pdf', meta: 'PDF' },
  // { label: 'Full CV', href: '/downloads/cv.pdf', meta: 'PDF' },
  // { label: 'Press headshots', href: '/downloads/headshots.zip', meta: 'ZIP' },
];

/** About 2.0: biography sections (600-word bio, edited for web by Penaxis). */
export const biography = [
  // Drafted from public sources. TODO: check against / replace with his approved 600-word biography.
  { heading: 'Early life and education', body: ['Born in 1969, he qualified in medicine (MBBS) and trained at Holy Family Hospital, Rawalpindi, before postgraduate study in the United Kingdom and Australia: MRCP and a CCST in endocrinology in the UK, an MSc in biomechanics and a PhD at the University of Western Australia, and postdoctoral work at Oxford.'] },
  { heading: 'Medicine', body: ['A Fellow of the Royal Colleges of Physicians of London, Glasgow, Edinburgh and Ireland, he has practised as a clinical endocrinologist at the Mahmooda Niaz Clinic in Islamabad since 2002. In 2026 he published Myth & Reality, a study of type 2 diabetes in Pakistan.'] },
  { heading: 'Broadcasting', body: ['He has analysed cricket on Pakistan Television since 1992. He went on to lead PTV’s content and operations, served as Director Sports and channel head of PTV Sports from 2014 to 2022, and hosted the cricket show Game On Hai. Since 2024 he has been PTV’s Director Special Assignments.'] },
  { heading: 'Cricket administration', body: ['At the Pakistan Cricket Board from 1998 he worked as media coordinator, media manager and associate manager of the national team on its 2000 tours, and in 2001 became the team’s first cricket analyst.'] },
  { heading: 'Writing and history', body: ['His books include The Fluctuating Fortunes, the history of Pakistan cricket commissioned by the PCB; Pakistan Cricket: The Story of Betrayal; Collector’s Eye; The Cricket Conversations; and Heritage & Legacy: 1950s. He became Sports Editor of JournalismPakistan.com in 2025.'] },
  { heading: 'Present day', body: ['He was awarded the Tamgha-i-Imtiaz in 2014 for sports journalism and broadcasting. Today he combines clinical practice, broadcasting and writing with his collection of cricket memorabilia, which he began at the age of twelve.'] },
];

/** Medicine & Academia */
export const medicalPractice = [
  // No patient information of any kind.
  { role: 'Specialisation', detail: 'Endocrinology and internal medicine', years: '' },
  { role: 'Clinical Endocrinologist', detail: 'Mahmooda Niaz Clinic, F-8 Markaz, Islamabad', years: '2002 – present' },
  // TODO: add teams or boards served as physician, with years
];
export const appointments = [
  { title: 'Director, Training Academy', institution: 'Pakistan Television (PTV), Islamabad', years: '2018 – 2019' },
  // TODO: add university appointments from the CV
];
export const lectures: { event: string; topic: string; year: string }[] = [
  // TODO: keynotes and conference talks (event, topic, year). Empty = hidden.
];
export const expertise = [
  'Endocrinology',
  'Diabetes',
  'Internal medicine',
  'Biomechanics',
  'Cricket history',
  'Cricket analysis',
  'Sports broadcasting',
];

/** Memorabilia 2.0: 8–12 hero photos with one-line captions (approved). */
/** Default artwork: used wherever a post or episode has no image of its own. */
export const defaultImages = {
  insight: {
    Cricket: '/images/insight-cricket.webp',
    History: '/images/insight-history.webp',
    Medicine: '/images/insight-medicine.webp',
    Guest: '/images/insight-guest.webp',
  } as Record<string, string>,
  episode: '/images/episode-bg.webp',
  podcastCover: '/images/podcast-cover.webp',
  museumBand: '/images/museum-band.webp',
  contact: '/images/contact-bg.webp',
};

export const memorabilia = [
  // TODO: photos from the museum; captions approved by Dr. Niaz
  { caption: 'Item: whose, which year', image: '', tall: true },
  { caption: 'Item: whose, which year', image: '' },
  { caption: 'Item: whose, which year', image: '' },
  { caption: 'Item: whose, which year', image: '', tall: true },
  { caption: 'Item: whose, which year', image: '' },
  { caption: 'Item: whose, which year', image: '' },
  { caption: 'Item: whose, which year', image: '', tall: true },
  { caption: 'Item: whose, which year', image: '' },
];
export const memorabiliaStory: string[] = [
  // From press coverage (JournalismPakistan). TODO: check wording with Dr. Niaz.
  'He started collecting at the age of twelve, and the collection has grown with him ever since.',
  'Its heart is pre-war and Edwardian cricket: signed postcards, autograph sheets and handkerchiefs, alongside a large cricket library and items from beyond the game.',
  'In 2021 he published Collector’s Eye, two volumes that present the collection in full-colour photographs.',
];

/** Contact 5.0 (optional) */
export const speakingTopics = [
  'The history of cricket in the subcontinent',
  'Sports medicine and athlete welfare',
  'Broadcasting the game: then and now',
  'Writing history: archives, memory and myth',
];
