/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Apollon',
    position: 'Mobile App Developer',
    url: 'https://apollon.uk.com/',
    startDate: '2023-09-01',
    summary: `
    `,
    highlights: [
      'Developed the Apollon mobile application for Android and iOS using Flutter, following Clean Architecture',
      'Implemented comprehensive integration tests',
      'Authored detailed project documentation',
      'Collaborated in an Agile/Scrum team to iteratively deliver features',
      'Managed CI/CD pipelines, automating versioning, testing, and delivery processes for continuous deployment',
    ],
  },
  {
    name: 'Aral Studio',
    position: 'Mobile Application Developer',
    url: 'https://aral.studio/',
    startDate: '2023-04-01',
    endDate: '2023-09-01',
    summary: `
    `,
    highlights: [
      'Developed a Flutter-based mobile application in the recycling industry (Dobare)',
      'Tested and updated existing company applications, including a mobile online shop and an accounting app for POS devices',
    ],
  },
];

export default work;
