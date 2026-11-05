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
  descriptor: 'Sports physician, broadcaster, author and cricket historian.',
  // TODO: 50-word bio, used in footer and meta
  shortBio:
    'Dr. Nauman Niaz is a sports physician, broadcaster, author and cricket historian whose work spans the clinic, the commentary box, the archive and the lecture hall.',
  // Home hero banner: /public/images/hero-desktop-*.{webp,jpg} and hero-mobile-*.{webp,jpg}
  aboutPortrait: '', // TODO: second, environmental portrait (studio, clinic or library)
  location: 'Pakistan', // TODO confirm city for the hero "Based in" line
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
  // TODO: add YouTube and X / Twitter if he has public profiles
]

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
  // TODO: all numbers from CV
  { value: '34+', label: 'Years in broadcasting' }, // PTV since 1992
  { value: '10', label: 'Books published' },
  { value: '500+', label: 'Articles written' },
  { value: '6', label: 'Academic appointments' },
  { value: '15', label: 'Countries covered' },
];

/** Home 3.0: four pillars. Images reuse the page hero images. */
export const pillars = [
  {
    title: 'Broadcasting',
    text: 'Decades on air: hosting, commentary and interviews with the people who shaped the game.',
    href: '/broadcasting/',
    image: '', // e.g. '/images/broadcasting-hero.jpg'
  },
  {
    title: 'Publications',
    text: 'Books, columns and essays on cricket, medicine and the history that connects them.',
    href: '/publications/',
    image: '',
  },
  {
    title: 'Medicine & Academia',
    text: 'Sports medicine practice, research and teaching, written for peers and institutions.',
    href: '/medicine-academia/',
    image: '',
  },
  {
    title: 'Memorabilia',
    text: 'A private collection of cricket history, now on view at the museum.',
    href: '/memorabilia/',
    image: '',
  },
];

/** Home 6.0 (optional) + Publications 2.0 */
export const books = [
  // TODO: covers, titles, publishers, years, synopses and purchase links from Dr. Niaz
  {
    title: 'Book title one',
    publisher: 'Publisher',
    year: '2024',
    synopsis:
      'A two-to-three line synopsis of the book goes here, describing its subject, its scope and why it matters to readers of cricket history.',
    cover: '',
    featured: true,
    buy: [
      { label: 'Amazon', url: 'https://amazon.com/' },
      { label: 'Local bookseller', url: '#' },
    ],
    excerpt: '', // optional link to a PDF excerpt or an Insights post
  },
  {
    title: 'Book title two',
    publisher: 'Publisher',
    year: '2019',
    synopsis:
      'A two-to-three line synopsis of the book goes here, describing its subject, its scope and why it matters to readers.',
    cover: '',
    featured: false,
    buy: [{ label: 'Amazon', url: 'https://amazon.com/' }],
    excerpt: '',
  },
  {
    title: 'Book title three',
    publisher: 'Publisher',
    year: '2012',
    synopsis:
      'A two-to-three line synopsis of the book goes here, describing its subject, its scope and why it matters to readers.',
    cover: '',
    featured: false,
    buy: [{ label: 'Amazon', url: 'https://amazon.com/' }],
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
export const papers = [
  // TODO: citations, journal, year, DOI
  {
    citation: 'Niaz N, Co-author A. Title of the research paper on athlete injury prevention.',
    journal: 'Journal name',
    year: '2022',
    doi: 'https://doi.org/10.0000/placeholder',
  },
  {
    citation: 'Niaz N. Title of a second paper on sports medicine in cricket.',
    journal: 'Journal name',
    year: '2018',
    doi: 'https://doi.org/10.0000/placeholder',
  },
];

/** Broadcasting 2.0. No channel logos without permission. */
export const programmes = [
  {
    title: 'Cricket host & analyst',
    channel: 'PTV (Pakistan Television)',
    years: '1992 – present',
    format: 'Studio analysis & live coverage',
    text: 'More than three decades presenting and analysing international and domestic cricket on national television.',
    image: '',
  },
  // TODO: add named programmes / series with their years
]

/** Broadcasting 3.0. Where no clip exists, show name only (leave link empty). */
export const interviews = [
  // TODO
  { name: 'Guest name', role: 'Former Test captain', year: '2016', link: '' },
  { name: 'Guest name', role: 'Fast bowler', year: '2014', link: '' },
  { name: 'Guest name', role: 'Commentator', year: '2012', link: '' },
  { name: 'Guest name', role: 'Cricket administrator', year: '2010', link: '' },
  { name: 'Guest name', role: 'Batting great', year: '2008', link: '' },
  { name: 'Guest name', role: 'Coach', year: '2006', link: '' },
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
  { title: 'MBBS', institution: 'PB', year: '' }, // TODO: confirm the full institution name for "PB"
]

/** About 4.0: 15–25 entries, colour-coded by field. */
export type Field = 'Medicine' | 'Broadcasting' | 'Writing' | 'Academia';
export const timeline: { year: string; title: string; text: string; field: Field }[] = [
  // From his experience (LinkedIn). TODO: add milestones in writing and academia from the CV (15–25 entries in total).
  { year: '1992', title: 'Cricket host & analyst, PTV', text: 'Begins a broadcasting career on Pakistan Television that continues today.', field: 'Broadcasting' },
  { year: '1998', title: 'Manager Coordination, Asian Cricket Council', text: 'Media coordination for the Pakistan Cricket Board and the Asian Cricket Council.', field: 'Broadcasting' },
  { year: '1999', title: 'Media Manager, Pakistan Cricket Board', text: 'Media manager and cricket analyst for the PCB, Lahore.', field: 'Broadcasting' },
  { year: '2002', title: 'Clinical Endocrinologist', text: 'Begins clinical practice at the Mahmooda Niaz Clinic.', field: 'Medicine' },
  { year: '2012', title: 'Head of Content, PTV', text: 'Leads content for Pakistan Television.', field: 'Broadcasting' },
  { year: '2013', title: 'Head of Operations & Content, PTV', text: 'Takes on operations alongside content.', field: 'Broadcasting' },
  { year: '2014', title: 'Director Sports, PTV Sports', text: 'Channel head of PTV Sports until 2022.', field: 'Broadcasting' },
  { year: '2018', title: 'Director, PTV Training Academy', text: 'Leads the broadcaster’s training academy in Islamabad.', field: 'Academia' },
  { year: '2024', title: 'Director Special Assignments, PTV', text: 'Current role, Islamabad.', field: 'Broadcasting' },
]

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
      { title: 'Media Manager', dates: '1999 – 2001', place: 'Lahore', text: 'Cricket analyst of the Pakistan Cricket Board.' },
      {
        title: 'Manager Coordination, Asian Cricket Council',
        dates: '1998 – 1999',
        place: 'Islamabad',
        text: 'Media Coordinator of the Pakistan Cricket Board, Manager Coordination of the Asian Cricket Council and Manager Media of the Pakistan Cricket Board.',
      },
    ],
  },
]

/** About 5.0 */
export const honours = [
  // TODO: from CV. If none are public, empty this array and the section hides.
  { title: 'Tamgha-i-Imtiaz (TI)', body: 'Government of Pakistan', year: '' }, // TODO: confirm year
  { title: 'Honorary position', body: 'Institution', year: '0000' },
  { title: 'Notable appointment', body: 'Organisation', year: '0000' },
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
  // TODO: replace with the approved 600-word biography
  { heading: 'Early life and education', body: ['Placeholder paragraph. A short account of his early years, schooling and the path into medicine.'] },
  { heading: 'Medicine', body: ['Placeholder paragraph. His training and practice as a sports physician, and the teams and boards he has served.'] },
  { heading: 'Broadcasting', body: ['Placeholder paragraph. How he came to broadcasting and the programmes that defined his on-air career.'] },
  { heading: 'Writing and history', body: ['Placeholder paragraph. His books and columns, and the historian’s work of recording the game.'] },
  { heading: 'Academia', body: ['Placeholder paragraph. Appointments, teaching and research.'] },
  { heading: 'Present day', body: ['Placeholder paragraph. What he is focused on now, including Conversations and the museum.'] },
];

/** Medicine & Academia */
export const medicalPractice = [
  // No patient information of any kind.
  { role: 'Specialisation', detail: 'Clinical endocrinology', years: '' },
  { role: 'Clinical Endocrinologist', detail: 'Mahmooda Niaz Clinic, Pakistan', years: '2002 – present' },
  // TODO: add teams or boards served as physician, with years
]
export const appointments = [
  { title: 'Professor', institution: 'University', years: '0000 – present' },
  { title: 'Visiting lecturer', institution: 'University', years: '0000 – 0000' },
  { title: 'Doctoral supervisor', institution: 'University', years: '0000 – 0000' },
];
export const lectures: { event: string; topic: string; year: string }[] = [
  { event: 'Conference name', topic: 'Talk topic', year: '0000' },
  { event: 'Symposium name', topic: 'Keynote topic', year: '0000' },
];
export const expertise = [
  'Sports medicine',
  'Injury prevention',
  'Athlete performance',
  'Cricket history',
  'Sports broadcasting',
  'Medical education',
];

/** Memorabilia 2.0: 8–12 hero photos with one-line captions (approved). */
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
  // Optional (Memorabilia 3.0). Empty = hidden.
  'Placeholder paragraph. How the first piece was acquired and what sparked the collection.',
  'Placeholder paragraph. How it grew: sources, friendships, auctions and gifts from players.',
  'Placeholder paragraph. Why it now lives at the museum and what visitors can expect.',
];

/** Contact 5.0 (optional) */
export const speakingTopics = [
  'The history of cricket in the subcontinent',
  'Sports medicine and athlete welfare',
  'Broadcasting the game: then and now',
  'Writing history: archives, memory and myth',
];
