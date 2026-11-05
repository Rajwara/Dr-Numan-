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
  heroPortrait: '', // TODO: e.g. '/images/hero-portrait.png' (landscape, min 2400px wide)
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

export const socials = [
  // TODO: replace with real profile URLs
  { label: 'YouTube', url: 'https://youtube.com/' },
  { label: 'X / Twitter', url: 'https://x.com/' },
  { label: 'LinkedIn', url: 'https://linkedin.com/' },
  { label: 'Instagram', url: 'https://instagram.com/' },
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
  // TODO: all numbers from CV
  { value: '25+', label: 'Years in broadcasting' },
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
  // TODO: programme list from Dr. Niaz
  {
    title: 'Programme title',
    channel: 'Channel name',
    years: '2010 – 2018',
    format: 'Studio analysis',
    text: 'One-line description of the programme and his role on it.',
    image: '',
  },
  {
    title: 'Programme title',
    channel: 'Channel name',
    years: '2004 – 2010',
    format: 'Live commentary',
    text: 'One-line description of the programme and his role on it.',
    image: '',
  },
  {
    title: 'Programme title',
    channel: 'Channel name',
    years: '1998 – 2004',
    format: 'Interview series',
    text: 'One-line description of the programme and his role on it.',
    image: '',
  },
];

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
export const networks = ['Network one', 'Network two', 'Tournament one', 'Tournament two', 'Board one', 'Network three'];

/** About 3.0 */
export const qualifications = [
  // TODO: from CV
  { title: 'MBBS', institution: 'Institution', year: '0000' },
  { title: 'Postgraduate qualification in Sports Medicine', institution: 'Institution', year: '0000' },
  { title: 'PhD', institution: 'Institution', year: '0000' },
  { title: 'Fellowship', institution: 'Professional body', year: '0000' },
  { title: 'Member', institution: 'Professional body', year: '0000' },
];

/** About 4.0: 15–25 entries, colour-coded by field. */
export type Field = 'Medicine' | 'Broadcasting' | 'Writing' | 'Academia';
export const timeline: { year: string; title: string; text: string; field: Field }[] = [
  // TODO: from CV
  { year: '1990', title: 'Qualifies in medicine', text: 'One line describing the milestone.', field: 'Medicine' },
  { year: '1994', title: 'First broadcast', text: 'One line describing the milestone.', field: 'Broadcasting' },
  { year: '1997', title: 'Sports medicine role', text: 'One line describing the milestone.', field: 'Medicine' },
  { year: '2000', title: 'First book published', text: 'One line describing the milestone.', field: 'Writing' },
  { year: '2004', title: 'Hosts major programme', text: 'One line describing the milestone.', field: 'Broadcasting' },
  { year: '2008', title: 'Academic appointment', text: 'One line describing the milestone.', field: 'Academia' },
  { year: '2012', title: 'Multi-volume history', text: 'One line describing the milestone.', field: 'Writing' },
  { year: '2016', title: 'Senior broadcasting role', text: 'One line describing the milestone.', field: 'Broadcasting' },
  { year: '2020', title: 'Professorship', text: 'One line describing the milestone.', field: 'Academia' },
  { year: '2024', title: 'Launches Conversations', text: 'One line describing the milestone.', field: 'Broadcasting' },
];

/** About 5.0 */
export const honours = [
  // TODO: from CV. If none are public, empty this array and the section hides.
  { title: 'Award name', body: 'Awarding body', year: '0000' },
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
  // TODO: from CV. No patient information of any kind.
  { role: 'Specialisation', detail: 'Sports medicine', years: '' },
  { role: 'Team physician', detail: 'Team or board name', years: '0000 – 0000' },
  { role: 'Medical consultant', detail: 'Institution', years: '0000 – 0000' },
];
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
