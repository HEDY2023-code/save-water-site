/* SAVE water — news & events data.
   Add or edit items here; the news grids on index.html and news.html render
   automatically from this file. Optional per item:
     - featured: true  makes the first rendered card span two columns (first item only).
     - image: set to a path, or null with thumbText for a text-only thumbnail.
     - fbEmbed: paste a Facebook post-plugin <iframe> to embed the post inline.
     - link + platform: outbound link (LinkedIn / Facebook / other).
*/

var SAVE_NEWS = [
  {
    id: 'news-1',
    section: 'news',
    featured: true,
    category: 'Living Lab',
    dateISO: '2026-06-30',
    dateLabel: 'June 30, 2026',
    title: 'Launch Seminar of the Tunisian Living Lab',
    image: 'assets/news-seminar-1.jpg',
    imageAlt: 'Launch Seminar of the Tunisian Living Lab in Tunis',
    excerpt: 'On 30 June 2026, the Faculty of Sciences of Tunis proudly hosted the launch seminar of the Tunisian Living Lab, a day of innovation and knowledge sharing, marked by the active participation of the General Directorate of Water Resources (DGRE), represented by Mr. Aissa Hlaimi, Director General of Water Resources, Ms. Houda Rzigui and Ms. Nejla Khalfoun.',
    link: 'https://www.linkedin.com/posts/save-water-prima-85b56639b_on-30-june-2026-the-faculty-of-sciences-activity-7478183855385079808-j-WM',
    platform: 'LinkedIn'
  },
  {
    id: 'news-2',
    section: 'news',
    category: 'Milestone',
    dateISO: '2026-01-15',
    dateLabel: 'January 15, 2026',
    title: 'First intelligent sensor for water monitoring acquired at FST',
    image: 'assets/news-jdaida.jpg',
    imageAlt: 'Tunisian pilot site of Jdaida-Manouba',
    excerpt: 'The Tunisian team at the Faculty of Sciences of Tunis successfully acquired an intelligent sensor for water level and water quality monitoring &mdash; a major milestone that strengthens SAVE water&rsquo;s capacity for smart, real-time water resource assessment and sustainable water management.',
    link: 'https://www.linkedin.com/posts/save-water-prima-85b56639b_today-we-a-activity-7417638375517618177-DO-_',
    platform: 'LinkedIn'
  },
  {
    id: 'news-3',
    section: 'news',
    category: 'Funding',
    dateISO: '2024-12-26',
    dateLabel: 'December 26, 2024',
    title: 'SAVE water selected for funding under the PRIMA programme',
    image: 'assets/news-dgre.jpg',
    imageAlt: 'SAVE water selected for funding by PRIMA',
    excerpt: 'SAVE water was selected for funding by the PRIMA programme &mdash; 13 partners from 9 countries, led by Tunisia as coordinator of the water section of the call.',
    link: 'https://www.linkedin.com/posts/salwa-saidi-61bab482_coordinator-save-prima-activity-7278174825863348224-Ryin',
    platform: 'LinkedIn'
  },
  {
    id: 'news-4',
    section: 'news',
    category: 'Community',
    dateISO: '2025-10-21',
    dateLabel: 'October 21, 2025',
    title: 'SAVE water joins the NextGen4MED community',
    image: null,
    thumbText: 'NextGen4MED',
    excerpt: 'Dr. Salwa SAIDI, SAVE water coordinator, joined the wonderful NextGen4MED community &mdash; moving forward together to make the NextGen4MED network shine even brighter.',
    link: 'https://www.facebook.com/permalink.php?story_fbid=pfbid0uYft6GyJcbA7k1ZFaxjXw3Y8GFFnNRD4MbX4uB5he3LbY8ywwT1xZByBqjX7CyPJl&id=61577954372614',
    platform: 'Facebook'
  },
  {
    id: 'event-7',
    section: 'events',
    category: 'Workshop',
    dateISO: '2026-08-31',
    dateLabel: 'August 31 &ndash; September 3, 2026',
    title: 'SAVE water project meeting &ndash; GIS-based Technologies and AI for Water Resources Management (Workshop W007, AVSS 2026)',
    poster: true,
    image: 'assets/news-avss-w007.png',
    imageAlt: 'Affiche of the SAVE water project meeting at the AVSS 2026 workshop W007, Lecce, Italy',
    excerpt: 'The SAVE water project meeting on &ldquo;GIS-based Technologies and Artificial Intelligence: An Innovative Approach for Water Resources Management&rdquo; took place on 31 August 2026 at Convitto Palmieri, Lecce, Italy, during the 22nd International Conference on Advanced Visual and Signal-Based Systems (AVSS 2026). Organizers: Pier Luigi Mazzeo (CNR, Italy) and Salwa Saidi (FST-UTM, Tunisia).',
    link: 'avss2026-w007.html',
    readMoreLabel: 'View workshop details',
    platform: 'AVSS 2026'
  },
  {
    id: 'event-1',
    section: 'events',
    category: 'Field Mission',
    dateISO: '2026-06-24',
    dateLabel: 'June 24, 2026',
    title: 'Young Experts field mission in Morocco (MJE)',
    image: 'assets/news-mje.jpg',
    imageAlt: 'Young Experts field mission in Morocco',
    excerpt: 'Between 4 May and 14 June 2026, seven ISTOM students carried out a field mission in Morocco, in a partnership between CIRAD (UMR SELMET) and IAV Hassan II, conducting around 40 interviews with herders and local stakeholders on water management and mobility strategies, with results presented at IAV Rabat.',
    link: 'https://www.linkedin.com/posts/save-water-prima-85b56639b_httpslnkdindeufhskn-activity-7475342384504033280-3IRY',
    platform: 'LinkedIn'
  },
  {
    id: 'event-2',
    section: 'events',
    category: 'Award',
    dateISO: '2026-05-06',
    dateLabel: 'May 6, 2026',
    title: 'Best Project Presentation Award at the UTM Research Day',
    image: 'assets/news-award.jpg',
    imageAlt: 'Research Day of the University of Tunis El Manar at ENIT',
    excerpt: 'Coordinator Salwa SAIDI presented the SAVE water project at the Research Day organized by the University of Tunis El Manar (UTM) at ENIT, and received the Best Project Presentation Award during the event.',
    link: 'https://www.linkedin.com/posts/save-water-prima-85b56639b_i-i-i-activity-7457916634540855296-2ib2',
    platform: 'LinkedIn'
  },
  {
    id: 'event-3',
    section: 'events',
    category: 'Conference',
    dateISO: '2025-10-28',
    dateLabel: 'October 28&ndash;30, 2025',
    title: '1st International Conference of Geosciences in the Service of Territorial Development',
    image: 'assets/news-algeria.jpg',
    imageAlt: '1st International Conference of Geosciences in the Service of Territorial Development in Batna, Algeria',
    excerpt: 'The SAVE water team participated in the 1st International Conference of Geosciences in the Service of Territorial Development in Batna, Algeria (28&ndash;30 October 2025), represented by Salwa SAIDI and Abdelaziz Sbei from the Tunisian team and Larbi Djabri from the Badji Mokhtar Annaba (UBMA) team.',
    link: 'https://www.linkedin.com/posts/save-water-prima-85b56639b_very-save-activity-7400928594082029568-dATN',
    platform: 'LinkedIn'
  },
  {
    id: 'event-8',
    section: 'events',
    category: 'Workshop',
    dateISO: '2026-09-07',
    dateLabel: 'August 31 &ndash; September 3, 2026',
    title: 'SAVE water consortium second meeting &ndash; Lecce, Italy',
    image: 'assets/second meeting.jfif',
    imageAlt: 'SAVE water consortium second meeting during the AVSS 2026 International Conference in Lecce, Italy',
    excerpt: 'It was a great pleasure to participate together with the SAVE water consortium in a dedicated workshop for the SAVE water consortium second meeting during the AVSS 2026 International Conference in Lecce, Italy (31 August &ndash; 3 September 2026). Many thanks to the AVSS 2026 organizing committee &mdash; especially Prof. Pier Luigi Mazzeo (ISASI-CNR) &mdash; for hosting the meeting and giving us the opportunity to share our work, experiences and vision with an international scientific community.',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7502462246233526272/',
    platform: 'LinkedIn'
  },
  {
    id: 'event-4',
    section: 'events',
    category: 'Conference',
    dateISO: '2025-10-01',
    dateLabel: 'October 1&ndash;2, 2025',
    title: 'SAVE water at PRIMA Day',
    image: 'assets/5_n.jpg',
    imageAlt: 'SAVE water at PRIMA Day',
    excerpt: 'On 1&ndash;2 October 2025, Dr. Salwa SAIDI, SAVE water coordinator, took part in PRIMA Day &mdash; an amazing opportunity to exchange ideas and rethink our projects for the development of all Mediterranean countries, and to thank the entire PRIMA team for their flawless organization.',
    link: 'https://www.facebook.com/permalink.php?story_fbid=pfbid02ca97CmVn69zzkhg5kgiupGeJqYTKB16viDhij5WQJD7p2rnwm8BiKSrx68jx68Uql&id=61577954372614',
    platform: 'Facebook'
  },
  {
    id: 'event-5',
    section: 'events',
    category: 'Kick-off',
    dateISO: '2025-09-22',
    dateLabel: 'September 22, 2025',
    title: 'Opening Ceremony of the SAVE water Kick-off',
    image: 'assets/55_n.jpg',
    imageAlt: 'Opening ceremony of the SAVE water kick-off in Tunis',
    excerpt: 'On 22 September 2025, the SAVE water project kicked off at the Tunis Grand Hotel, with Dr. Salwa Saidi (Coordinator), Prof. Adel Megriche (Dean, Faculty of Sciences of Tunis), Prof. Moez Chafra (President, University of Tunis El Manar) and Ms. Saida Rafrafi (Deputy Director, DGRS). Partners joined in person from Spain, Italy, Germany and Morocco and via Zoom from Algeria, Portugal and Egypt.',
    link: 'https://www.facebook.com/permalink.php?story_fbid=pfbid0285FCTPaoDcFLqpqTcMk8WJ26XvaKtbk36q7zWWAJHhi4G8897jDiJ48rm1vyzgQ9l&id=61577954372614',
    platform: 'Facebook'
  },
  {
    id: 'event-6',
    section: 'events',
    category: 'Field Visit',
    dateISO: '2025-09-23',
    dateLabel: 'September 23, 2025',
    title: 'Kick-off study site visit in Manouba (second day)',
    image: 'assets/news-kickoff-visit.jpg',
    imageAlt: 'Kick-off study site visit at Saidia-Manouba, Tunisia',
    excerpt: 'On the second day of the kick-off (23 September 2025), SAVE water partners and CRDA Manouba visited the study area at Saidia-Manouba to explore the pilot site and its water monitoring challenges on the ground.',
    link: 'https://www.facebook.com/permalink.php?story_fbid=pfbid02858s5Bq2HiyyveMTmXJMEV9RW7az4gexqBPUvHgC4k3QTQpUSGVCYvd1nhfFmrBZl&id=61577954372614',
    platform: 'Facebook'
  }
];
