const historicalItems = [
  {
    name: "Eiffel Tower",
    location: "Paris",
    designer: "Gustave Eiffel company",
    year: "1889",
    height_metres: 330,
    purpose: "1889 World's Fair"
  },
  {
    name: "The First Moon Landing",
    location: "United States",
    designer: "NASA",
    year: "1969",
    height_metres: 0,
    purpose: "Space Race and human exploration"
  },
  {
    name: "The Great Wall of China",
    location: "China",
    designer: "various dynasties(unknown)",
    year: "17th century BC969",
    height_metres: 0,
    purpose: "protect against raids and invasions from various nomadic groups"
  },
  {
    name: "The Mona Lisa",
    location: "Paris",
    designer: "Leonardo da Vinci",
    year: "between 1503 and 1506",
    height_metres: 0,
    purpose: ""
  },
  {
    name: "The Discovery of Penicillin",
    location: "Scotland",
    designer: "Alexander Fleming",
    year: "1928",
    height_metres: 0,
    purpose: "treatment of bacterial infections"
  },
  {
    name: "The Grand Canyon",
    location: "Arizona, USA",
    designer: "Colorado River",
    year: "",
    height_metres: 445788.288,
    purpose: "attracts millions of visitors who come to witness its immense and breathtaking scale"
  },
  {
    name: "The Gutenberg Printing Press",
    location: "Europe",
    designer: "Johannes Gutenberg",
    year: "1440",
    height_metres: 0,
    purpose: "allowed for the mass production of printed books, making knowledge widely available for the first time in history"
  },
  {
    name: "The Fall of the Berlin Wall",
    location: "Germany",
    designer: "",
    year: "1989",
    height_metres: 0,
    purpose: "physically and ideologically divided East and West Berlin, serving as the most potent symbol of the Iron Curtain"
  },
  {
    name: "The RMS Titanic",
    location: "North Atlantic Ocean",
    designer: "",
    year: "1912",
    height_metres: 0,
    purpose: ""
  },
  {
    name: "Mount Everest",
    location: "Mahalangur Himal, Himalayas",
    designer: "",
    year: "",
    height_metres: 8848.86,
    purpose: ""
  },
  {
    name: "The Colosseum",
    location: "Rome, Italy",
    designer: "Roman architecture and engineering",
    year: "betwen AD 72 and AD 80",
    height_metres: 8848.86,
    purpose: "used for gladiatorial contests, public spectacles such as mock sea battles, animal hunts, and dramas based on Classical mythology"
  },
  {
    name: "The Internet",
    location: "Rome, Italy",
    designer: "United States Department of Defense",
    year: "1960s",
    height_metres: 0,
    purpose: "create a resilient communication network"
  },
  {
    name: "The Terracotta Army",
    location: "Lintong District, Xi'an, Shaanx",
    designer: "local farmers",
    year: "1974",
    height_metres: 0,
    purpose: "showcasing a remarkable level of artistry and craftsmanship."
  },
  {
    name: "The Antikythera Mechanism",
    location: "Greek island of Antikythera",
    designer: "Greek scientists",
    year: "1901",
    height_metres: 0,
    purpose: "represents a level of mechanical sophistication that was thought to be impossible for its era, with its complexity not being matched again for over a thousand years."
  }
];

const content = document.getElementById('output');

for (const item of historicalItems) {
  content.innerHTML += `
    <div>
        <hr>
        <h2>${item.name}</h2>
        <b>Location:</b> ${item.location}<br>
        <b>Designer:</b> ${item.designer}<br>
        <b>Year:</b> ${item.year}<br>
        <b>Height (m):</b> ${item.height_metres}<br>
        <b>Purpose:</b> ${item.purpose || "N/A"}<br>
    </div>
  `;
}